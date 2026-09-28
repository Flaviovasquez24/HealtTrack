import random
from datetime import datetime

from sqlalchemy.orm import Session

from app.models.device_stats import Device
from app.models.user import User
from app.schemas.device import DeviceSyncResponse, DeviceUpdate


def _generate_serial_number() -> str:
    return f"FB-{random.randint(1000, 9999)}"


def get_or_create_device(db: Session, user: User) -> Device:
    """
    Por ahora cada usuario tiene un único dispositivo activo (el flujo de
    "emparejar dispositivo" todavía no existe). Si no tiene uno, se crea
    uno por defecto para no romper el resto de las vistas (Dashboard,
    Dispositivo, etc.).
    """
    device = db.query(Device).filter(Device.user_id == user.id).first()
    if device is None:
        device = Device(
            user_id=user.id,
            name="FitBand Pro",
            edition="Edición Deportiva",
            serial_number=_generate_serial_number(),
            firmware_version="3.4",
            connection_type="Bluetooth",
            is_connected=True,
            battery_level=100,
            storage_used_mb=0,
            storage_total_mb=512,
            paired_at=datetime.utcnow(),
        )
        db.add(device)
        db.commit()
        db.refresh(device)
    return device


def update_device(db: Session, user: User, payload: DeviceUpdate) -> Device:
    device = get_or_create_device(db, user)

    if payload.name is not None:
        device.name = payload.name
    if payload.edition is not None:
        device.edition = payload.edition

    db.commit()
    db.refresh(device)
    return device


def sync_device(db: Session, user: User) -> DeviceSyncResponse:
    """
    Simula una sincronización manual ("Sincronizar ahora"). En un
    dispositivo real esto dispararía la lectura de nuevas métricas por
    Bluetooth (ver POST /device-stats/); aquí solo refrescamos el estado
    de conexión/batería del dispositivo.
    """
    device = get_or_create_device(db, user)

    now = datetime.utcnow()
    device.last_sync_at = now
    device.is_connected = True
    device.battery_level = max(device.battery_level - random.randint(0, 2), 5)

    db.commit()
    db.refresh(device)

    return DeviceSyncResponse(
        synced_at=now,
        battery_level=device.battery_level,
        is_connected=device.is_connected,
    )


def unpair_device(db: Session, user: User) -> None:
    """Desvincula (borra) el dispositivo del usuario, junto con su historial de lecturas."""
    device = db.query(Device).filter(Device.user_id == user.id).first()
    if device is not None:
        db.delete(device)
        db.commit()