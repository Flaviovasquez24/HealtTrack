"""
Script de siembra: crea un usuario y dispositivo de ejemplo con lecturas
a lo largo del día, para poder probar /device-stats/dashboard sin tener
que registrar datos manualmente.

Uso (desde backend/, con el venv activado y el .env configurado):
    python -m app.seed
"""

from datetime import datetime, timedelta

from app.core.security import hash_password
from app.database import Base, SessionLocal, engine
from app.models.device_stats import Device, DeviceStat
from app.models.user import User

DEMO_EMAIL = "alejandro@healthtrack.dev"
DEMO_PASSWORD = "demo1234"

# (hora, pasos acumulados, kcal acumuladas, ritmo cardíaco)
HOURLY_PROGRESS = [
    (0, 0, 0, 60),
    (4, 320, 18, 58),
    (8, 2150, 96, 74),
    (10, 3480, 145, 82),
    (12, 4670, 190, 88),
    (14, 5920, 235, 79),
    (16, 7180, 289, 91),
    (18, 8432, 342, 72),
]

SLEEP_MINUTES_LAST_NIGHT = 444  # 7h 24m


def seed() -> None:
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()

    try:
        user = db.query(User).filter(User.email == DEMO_EMAIL).first()
        if user is None:
            user = User(
                email=DEMO_EMAIL,
                full_name="Alejandro",
                hashed_password=hash_password(DEMO_PASSWORD),
            )
            db.add(user)
            db.commit()
            db.refresh(user)
            print(f"Usuario demo creado: {DEMO_EMAIL} / {DEMO_PASSWORD}")
        else:
            print("El usuario demo ya existe, se omite la creación.")

        device = db.query(Device).filter(Device.user_id == user.id).first()
        if device is None:
            device = Device(
                user_id=user.id,
                name="FitBand Pro",
                edition="Edición Deportiva",
                serial_number="FB-9021",
                firmware_version="3.4",
                connection_type="Bluetooth",
                is_connected=True,
                battery_level=78,
                storage_used_mb=128,
                storage_total_mb=512,
                paired_at=datetime.utcnow() - timedelta(days=42),
                last_sync_at=datetime.utcnow(),
            )
            db.add(device)
            db.commit()
            db.refresh(device)
            print("Dispositivo demo creado.")
        else:
            print("El dispositivo demo ya existe, se omite la creación.")

        already_has_stats = (
            db.query(DeviceStat).filter(DeviceStat.device_id == device.id).count() > 0
        )
        if already_has_stats:
            print("Ya existen lecturas para el dispositivo, se omite la siembra de datos.")
            return

        today = datetime.utcnow().replace(hour=0, minute=0, second=0, microsecond=0)

        for hour, steps, calories, heart_rate in HOURLY_PROGRESS:
            db.add(
                DeviceStat(
                    device_id=device.id,
                    recorded_at=today + timedelta(hours=hour, minutes=40 if hour == 18 else 0),
                    heart_rate=heart_rate,
                    steps=steps,
                    calories=calories,
                    sleep_minutes=SLEEP_MINUTES_LAST_NIGHT if hour == 0 else None,
                )
            )

        # Una lectura de "ayer" para poder calcular variaciones porcentuales
        yesterday = today - timedelta(days=1)
        db.add(
            DeviceStat(
                device_id=device.id,
                recorded_at=yesterday.replace(hour=23, minute=50),
                heart_rate=76,
                steps=7530,
                calories=316,
                sleep_minutes=420,
            )
        )

        db.commit()
        print("Lecturas demo insertadas correctamente.")

    finally:
        db.close()


if __name__ == "__main__":
    seed()