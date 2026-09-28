import './Goals.css'

/* =====================================
   ICONOS
===================================== */

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  )
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

function StepsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 4.5c1.5 1.4 1.5 3.8.1 5.2-1.3 1.4-3.7 1.3-5.1-.1-1.4-1.5-1.3-3.8.1-5.1 1.4-1.4 3.5-1.4 4.9 0Z" />
      <path d="M17.9 14.2c1.4 1.4 1.4 3.7 0 5.1-1.4 1.4-3.7 1.4-5.1 0-1.4-1.4-1.4-3.7 0-5.1 1.4-1.4 3.7-1.4 5.1 0Z" />
      <path d="m9.2 9.7 5.4 4.6" />
    </svg>
  )
}

function FlameIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
      <path d="M13.8 2.8c.3 3.1-1.4 4.7-3 6.3-1.4 1.4-2.8 2.8-2.8 5.1 0 2.2 1.8 4 4 4 2.7 0 4.8-2.1 4.8-5 0-1.8-.8-3.5-2.3-4.9.1 2.1-.5 3.2-1.5 4.1.3-2.9-.7-6.5-3.4-9.6.1 2.1 1 3.7 2 5.2 1.2-1.6 2.1-3.1 2.2-5.2Z" />
      <path d="M7.2 17.5c.4 1.9 2 3.2 4.1 3.2 2.5 0 4.4-1.8 4.7-4.2-.8 1.3-2 2.1-3.5 2.1-2.2 0-3.7-1.2-5.3-1.1Z" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 15.5A7.8 7.8 0 0 1 8.5 5a8 8 0 1 0 10.5 10.5Z" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
      <path d="M20.8 8.7c0 5.4-8.8 10.1-8.8 10.1S3.2 14.1 3.2 8.7C3.2 5.8 5.3 4 7.8 4c1.7 0 3.3.9 4.2 2.2C12.9 4.9 14.5 4 16.2 4c2.5 0 4.6 1.8 4.6 4.7Z" />
    </svg>
  )
}

function DropletIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3.5S6 10.4 6 14.5a6 6 0 0 0 12 0C18 10.4 12 3.5 12 3.5Z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 10.5c0 5.6-7 10.5-7 10.5s-7-4.9-7-10.5a7 7 0 1 1 14 0Z" />
      <circle cx="12" cy="10.5" r="2.4" />
    </svg>
  )
}

function CheckCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12.3 2.6 2.6L16.5 9" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 2" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M8 3v4M16 3v4M3.5 10h17" />
    </svg>
  )
}

/* =====================================
   DATOS
===================================== */

const GOALS = [
  {
    id: 'steps',
    icon: <StepsIcon />,
    tone: 'blue',
    title: 'Pasos diarios',
    meta: 'Objetivo: 10,000 pasos/día',
    progressLabel: '7,842 / 10,000',
    pct: 78,
    status: 'progress',
  },
  {
    id: 'calories',
    icon: <FlameIcon />,
    tone: 'cyan',
    title: 'Calorías quemadas',
    meta: 'Objetivo: 500 kcal por día',
    progressLabel: '342 / 500',
    pct: 68,
    status: 'progress',
    dark: true,
  },
  {
    id: 'sleep',
    icon: <MoonIcon />,
    tone: 'dark',
    title: 'Tiempo de sueño',
    meta: 'Objetivo: 8 horas por noche',
    progressLabel: '7h 24min / 8h',
    pct: 93,
    status: 'progress',
    dark: true,
  },
  {
    id: 'heart',
    icon: <HeartIcon />,
    tone: 'blue',
    title: 'Frecuencia en reposo',
    meta: 'Objetivo: 60 - 70 lpm',
    progressLabel: '72 / 70',
    pct: 100,
    status: 'done',
  },
  {
    id: 'water',
    icon: <DropletIcon />,
    tone: 'cyan-light',
    title: 'Agua diaria',
    meta: 'Objetivo: 2 litros por día',
    progressLabel: '1.5 / 2 L',
    pct: 75,
    status: 'progress',
  },
  {
    id: 'distance',
    icon: <PinIcon />,
    tone: 'cyan-light',
    title: 'Distancia recorrida',
    meta: 'Objetivo: 5 km por día',
    progressLabel: '5 / 5 km',
    pct: 100,
    status: 'done',
  },
]

const RECENT_GOALS = [
  { date: '16 sep 2025', title: 'Frecuencia en reposo', status: 'done' },
  { date: '14 sep 2025', title: 'Pasos diarios', status: 'done' },
  { date: '12 sep 2025', title: 'Tiempo de sueño', status: 'progress' },
  { date: '10 sep 2025', title: 'Calorías quemadas', status: 'progress' },
  { date: '08 sep 2025', title: 'Agua diaria', status: 'progress' },
]

const STATUS_LABEL = {
  progress: 'En progreso',
  done: 'Completada',
}

/* =====================================
   SUBCOMPONENTES
===================================== */

function SummaryCard({ icon, tone, label, value, meta, highlight }) {
  return (
    <div className={`summary-card ${tone}${highlight ? ' highlight' : ''}`}>
      <div className="summary-icon">{icon}</div>

      <div className="summary-copy">
        <span className="summary-label">{label}</span>
        <strong>{value}</strong>
        <span className="summary-meta">{meta}</span>
      </div>
    </div>
  )
}

function GoalRow({ goal }) {
  return (
    <div className="goal-row">
      <div className={`goal-icon ${goal.tone}`}>{goal.icon}</div>

      <div className="goal-info">
        <strong>{goal.title}</strong>
        <span>{goal.meta}</span>
      </div>

      <div className="goal-progress">
        <div className="goal-progress-top">
          <span>{goal.progressLabel}</span>
          <strong>{goal.pct}%</strong>
        </div>

        <div className="goal-bar">
          <div
            className={`goal-bar-fill${goal.status === 'done' ? ' done' : ''}${goal.dark ? ' dark' : ''}`}
            style={{ width: `${goal.pct}%` }}
          />
        </div>
      </div>

      <span className={`status-pill ${goal.status}`}>{STATUS_LABEL[goal.status]}</span>

      <button className="row-kebab" type="button" aria-label="Más opciones">⋮</button>
    </div>
  )
}

function ProgressDonut({ pct }) {
  const radius = 54
  const circumference = 2 * Math.PI * radius
  const offset = circumference * (1 - pct / 100)

  return (
    <svg className="donut" viewBox="0 0 130 130">
      <circle cx="65" cy="65" r={radius} fill="none" stroke="#eef1f6" strokeWidth="14" />
      <circle
        cx="65"
        cy="65"
        r={radius}
        fill="none"
        stroke="#2867df"
        strokeWidth="14"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform="rotate(-90 65 65)"
      />
    </svg>
  )
}

/* =====================================
   PÁGINA PRINCIPAL
===================================== */

function Metas() {
  const completed = GOALS.filter((g) => g.status === 'done').length
  const inProgress = GOALS.filter((g) => g.status === 'progress').length
  const total = GOALS.length

  return (
    <div className="metas">

      {/* CABECERA */}

      <div className="metas-header">
        <div className="metas-title">
          <div className="metas-title-icon"><TargetIcon /></div>

          <div>
            <h1>Metas</h1>
            <p>Establece y da seguimiento a tus objetivos para llevar un mejor control de tu salud y rendimiento.</p>
          </div>
        </div>

        <button className="new-goal-button" type="button">
          <PlusIcon />
          Crear nueva meta
        </button>
      </div>

      {/* RESUMEN */}

      <div className="summary-grid">
        <SummaryCard
          icon={<StepsIcon />}
          tone="green"
          highlight
          label="Metas activas"
          value={inProgress}
          meta={`de ${total} totales`}
        />

        <SummaryCard
          icon={<CheckCircleIcon />}
          tone="blue"
          label="Metas completadas"
          value={completed}
          meta={`${Math.round((completed / total) * 100)}% del total`}
        />

        <SummaryCard
          icon={<ClockIcon />}
          tone="gray"
          label="En progreso"
          value={inProgress}
          meta={`${Math.round((inProgress / total) * 100)}% del total`}
        />

        <SummaryCard
          icon={<CalendarIcon />}
          tone="gray"
          label="Vencidas"
          value={0}
          meta="0% del total"
        />
      </div>

      {/* GRID PRINCIPAL */}

      <div className="metas-main-grid">

        {/* MIS METAS */}

        <section className="panel goals-panel">
          <div className="panel-header">
            <h2>Mis metas</h2>

            <button className="filter-select" type="button">
              Todas
              <span>⌄</span>
            </button>
          </div>

          <div className="goals-list">
            {GOALS.map((goal) => (
              <GoalRow goal={goal} key={goal.id} />
            ))}
          </div>
        </section>

        {/* LATERAL */}

        <div className="metas-side">

          <section className="panel progress-panel">
            <h2>Progreso general</h2>

            <div className="donut-wrap">
              <ProgressDonut pct={67} />
              <div className="donut-center">
                <strong>67%</strong>
                <span>de tus metas</span>
              </div>
            </div>

            <ul className="progress-legend">
              <li><i className="dot green" />Completadas<span>{completed}</span></li>
              <li><i className="dot blue" />En progreso<span>{inProgress}</span></li>
              <li><i className="dot gray" />Vencidas<span>0</span></li>
              <li><i className="dot dark" />Total<span>{total}</span></li>
            </ul>
          </section>

          <section className="panel recent-panel">
            <div className="panel-header">
              <h2>Metas recientes</h2>
              <button className="see-all" type="button">Ver todas →</button>
            </div>

            <ul className="recent-list">
              {RECENT_GOALS.map((item) => (
                <li key={`${item.date}-${item.title}`}>
                  <div>
                    <span className="recent-date">{item.date}</span>
                    <strong>{item.title}</strong>
                  </div>

                  <span className={`status-pill ${item.status}`}>
                    {STATUS_LABEL[item.status]}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <div className="tip-banner">
            <div className="tip-icon"><PinIcon /></div>

            <div>
              <strong>Consejo</strong>
              <p>Establece metas realistas y constantes para ver mejores resultados en tu salud.</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Metas