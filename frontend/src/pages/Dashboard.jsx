import './Dashboard.css'

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor">
      <path d="M20.8 8.7c0 5.4-8.8 10.1-8.8 10.1S3.2 14.1 3.2 8.7C3.2 5.8 5.3 4 7.8 4c1.7 0 3.3.9 4.2 2.2C12.9 4.9 14.5 4 16.2 4c2.5 0 4.6 1.8 4.6 4.7Z" />
    </svg>
  )
}

function StepsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.5 4.5c1.5 1.4 1.5 3.8.1 5.2-1.3 1.4-3.7 1.3-5.1-.1-1.4-1.5-1.3-3.8.1-5.1 1.4-1.4 3.5-1.4 4.9 0Z" />
      <path d="M17.9 14.2c1.4 1.4 1.4 3.7 0 5.1-1.4 1.4-3.7 1.4-5.1 0-1.4-1.4-1.4-3.7 0-5.1 1.4-1.4 3.7-1.4 5.1 0Z" />
      <path d="m9.2 9.7 5.4 4.6" />
    </svg>
  )
}

function CaloriesIcon() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor">
      <path d="M13.8 2.8c.3 3.1-1.4 4.7-3 6.3-1.4 1.4-2.8 2.8-2.8 5.1 0 2.2 1.8 4 4 4 2.7 0 4.8-2.1 4.8-5 0-1.8-.8-3.5-2.3-4.9.1 2.1-.5 3.2-1.5 4.1.3-2.9-.7-6.5-3.4-9.6.1 2.1 1 3.7 2 5.2 1.2-1.6 2.1-3.1 2.2-5.2Z" />
      <path d="M7.2 17.5c.4 1.9 2 3.2 4.1 3.2 2.5 0 4.4-1.8 4.7-4.2-.8 1.3-2 2.1-3.5 2.1-2.2 0-3.7-1.2-5.3-1.1Z" />
    </svg>
  )
}

function SleepIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="19"
      height="19"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 15.5A7.8 7.8 0 0 1 8.5 5a8 8 0 1 0 10.5 10.5Z" />
    </svg>
  )
}

function MetricCard({
  title,
  value,
  unit,
  meta,
  change,
  icon,
  type,
  points,
}) {
  return (
    <div className={`metric-card ${type}`}>
      <div className="metric-top">
        <div className="metric-title">
          <div className="metric-icon">
            {icon}
          </div>

          <span>{title}</span>
        </div>

        <span className="metric-change">
          ↑ {change}
        </span>
      </div>

      <div className="metric-value">
        <strong>{value}</strong>

        {unit && (
          <span>{unit}</span>
        )}

        {meta && (
          <small>{meta}</small>
        )}
      </div>

      <svg
        className="metric-chart"
        viewBox="0 0 180 52"
        preserveAspectRatio="none"
      >
        <path
          d={points}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

function ActivityChart() {
  return (
    <div className="activity-chart">

      <div className="chart-y-labels">
        <span>15k</span>
        <span>10k</span>
        <span>5k</span>
        <span>0</span>
      </div>

      <svg
        className="activity-svg"
        viewBox="0 0 650 250"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="activityGradient"
            x1="0"
            x2="0"
            y1="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopOpacity="0.20"
            />
            <stop
              offset="100%"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>

        <path
          d="M0 210
             C35 208 55 202 82 194
             C110 185 125 203 150 210
             C175 216 184 204 202 177
             C220 150 238 133 259 126
             C280 119 300 150 322 159
             C348 170 367 157 384 126
             C405 89 425 57 451 61
             C475 65 488 101 508 123
             C531 149 549 169 568 185
             C590 202 615 208 650 210
             L650 250
             L0 250 Z"
          fill="url(#activityGradient)"
        />

        <path
          d="M0 210
             C35 208 55 202 82 194
             C110 185 125 203 150 210
             C175 216 184 204 202 177
             C220 150 238 133 259 126
             C280 119 300 150 322 159
             C348 170 367 157 384 126
             C405 89 425 57 451 61
             C475 65 488 101 508 123
             C531 149 549 169 568 185
             C590 202 615 208 650 210"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <circle
          cx="451"
          cy="61"
          r="5"
          fill="currentColor"
          stroke="#fff"
          strokeWidth="3"
        />
      </svg>

      <div className="chart-x-labels">
        <span>00:00</span>
        <span>04:00</span>
        <span>08:00</span>
        <span>12:00</span>
        <span>16:00</span>
        <span>20:00</span>
        <span>24:00</span>
      </div>

      <div className="chart-tooltip">
        <strong>16:40 hrs</strong>
        <span>9,850 pasos</span>
      </div>

    </div>
  )
}

function DeviceIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="23"
      height="23"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="6" y="2.5" width="12" height="19" rx="3" />
      <path d="M9.5 6h5" />
      <path d="M9.5 18h5" />
    </svg>
  )
}

function Dashboard() {
  return (
    <div className="dashboard">

      {/* CABECERA */}

      <div className="dashboard-header">

        <div>
          <h1>¡Hola, Alejandro!</h1>

          <p>
            Aquí tienes un resumen de la actividad y estadísticas
            de tus dispositivos de hoy.
          </p>
        </div>

        <div className="dashboard-actions">

          <button className="date-button">
            <span>▣</span>
            Hoy, 18 de Octubre 2025
          </button>

          <button className="filter-button">
            ☷
            Filtrar
          </button>

        </div>

      </div>


      {/* TARJETAS */}

      <div className="metrics-grid">

        <MetricCard
          title="Ritmo cardíaco promedio"
          value="72"
          unit="ppm"
          change="5%"
          type="heart"
          icon={<HeartIcon />}
          points="M0 35 C20 30 28 40 48 34 C66 29 72 14 88 22 C104 31 102 48 119 47 C139 45 135 12 151 18 C163 22 165 46 180 31"
        />

        <MetricCard
          title="Pasos diarios"
          value="8,432"
          unit="/ 10,000"
          change="12"
          type="steps"
          icon={<StepsIcon />}
          points="M0 36 C20 36 33 30 49 32 C67 34 78 36 94 27 C110 18 116 25 128 29 C142 35 151 20 160 19 C170 18 171 30 180 18"
        />

        <MetricCard
          title="Calorías quemadas"
          value="342"
          unit="/ 500 kcal"
          change="8%"
          type="calories"
          icon={<CaloriesIcon />}
          points="M0 38 C20 35 36 31 51 34 C68 38 76 43 94 40 C112 37 116 29 130 34 C145 40 145 48 158 42 C171 36 170 18 180 27"
        />

        <MetricCard
          title="Tiempo de sueño"
          value="7h 24m"
          meta="Meta: 8h"
          change="6%"
          type="sleep"
          icon={<SleepIcon />}
          points="M0 38 C18 37 30 32 47 36 C62 39 76 40 89 34 C105 27 116 28 127 35 C142 44 147 46 157 36 C168 24 169 10 180 18"
        />

      </div>


      {/* PARTE INFERIOR */}

      <div className="dashboard-main-grid">

        {/* ACTIVIDAD */}

        <section className="panel activity-panel">

          <div className="panel-header">

            <div className="panel-title">
              <h2>Actividad del día</h2>
              <span className="title-dot"></span>
            </div>

            <button className="today-button">
              ▣ Hoy
              <span>⌄</span>
            </button>

          </div>

          <ActivityChart />

        </section>


        {/* DISPOSITIVO */}

        <section className="panel device-panel">

          <div className="panel-header">
            <h2>Dispositivo<br />conectado</h2>

            <span className="connected">
              <i></i>
              Conectado
            </span>
          </div>

          <div className="device-card">

            <div className="watch">
              <div className="watch-screen">
                <small>18:45</small>
                <strong>♥</strong>
                <span>72</span>
                <div></div>
              </div>
            </div>

            <div className="device-info">
              <strong>FitBand Pro</strong>
              <span>Edición Deportiva</span>

              <div className="battery">
                <span>♧</span>
                78%
                <small>Hoy · 18:45</small>
              </div>
            </div>

          </div>

          <button className="device-details">
            Ver detalles del dispositivo
            <span>→</span>
          </button>

        </section>

      </div>


      {/* SINCRONIZACIÓN */}

      <div className="sync-banner">

        <div className="sync-icon">
          i
        </div>

        <div>
          <strong>Sincronización activa:</strong>
          <span>
            Mantén tu dispositivo vinculado para asegurar un flujo
            constante y métricas en tiempo real.
          </span>
        </div>

        <button>
          Entendido
        </button>

      </div>


      {/* ACCESOS RÁPIDOS */}

      <section className="panel quick-panel">

        <div className="panel-header">
          <h2>Accesos rápidos</h2>
          <span className="quick-symbol">ϟ</span>
        </div>

        <div className="quick-grid">

          <button className="quick-item">
            <div className="quick-icon blue">
              ◷
            </div>

            <div>
              <strong>Iniciar entrenamiento</strong>
              <span>Registrar nueva sesión</span>
            </div>
          </button>

          <button className="quick-item">
            <div className="quick-icon cyan">
              ◇
            </div>

            <div>
              <strong>Añadir registro de agua</strong>
              <span>Vasos consumidos: 6 / 8</span>
            </div>
          </button>

          <button className="quick-item">
            <div className="quick-icon purple">
              ⚑
            </div>

            <div>
              <strong>Nueva meta personal</strong>
              <span>Personalizar objetivos diarios</span>
            </div>
          </button>

          <button className="quick-item">
            <div className="quick-icon green">
              ↻
            </div>

            <div>
              <strong>Sincronizar ahora</strong>
              <span>Última hace 12 min</span>
            </div>
          </button>

        </div>

      </section>

    </div>
  )
}

export default Dashboard