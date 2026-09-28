import './Stats.css'

/* =====================================
   ICONOS
===================================== */

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor">
      <path d="M20.8 8.7c0 5.4-8.8 10.1-8.8 10.1S3.2 14.1 3.2 8.7C3.2 5.8 5.3 4 7.8 4c1.7 0 3.3.9 4.2 2.2C12.9 4.9 14.5 4 16.2 4c2.5 0 4.6 1.8 4.6 4.7Z" />
    </svg>
  )
}

function StepsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
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
    <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 15.5A7.8 7.8 0 0 1 8.5 5a8 8 0 1 0 10.5 10.5Z" />
    </svg>
  )
}

function ArrowUp() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19V5M6 11l6-6 6 6" />
    </svg>
  )
}

function ArrowDown() {
  return (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  )
}

function ExportIcon() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12M7 10l5 5 5-5M4 21h16" />
    </svg>
  )
}

/* =====================================
   TARJETAS DE MÉTRICAS
===================================== */

function StatCard({ title, value, unit, badge, badgeTone, icon, type }) {
  return (
    <div className={`stat-card ${type}`}>
      <div className="stat-top">
        <div className="stat-icon">{icon}</div>
        <span className={`stat-badge ${badgeTone}`}>{badge}</span>
      </div>

      <div className="stat-value">
        <strong>{value}</strong>
        {unit && <span>{unit}</span>}
      </div>

      <span className="stat-label">{title}</span>
    </div>
  )
}

/* =====================================
   GRÁFICO DE RITMO CARDÍACO
===================================== */

const HR_POINTS = [
  { x: 40, y: 98, value: 70, label: '10/09' },
  { x: 147, y: 90, value: 75, label: '11/09' },
  { x: 253, y: 107, value: 65, label: '12/09' },
  { x: 360, y: 73, value: 85, label: '13/09' },
  { x: 467, y: 28, value: 112, label: '14/09' },
  { x: 573, y: 82, value: 80, label: '15/09' },
  { x: 680, y: 95, value: 72, label: '16/09' },
]

function HeartRatePath({ points }) {
  return points
    .map((p, i) => (i === 0 ? `M${p.x} ${p.y}` : ` L${p.x} ${p.y}`))
    .join('')
}

function HeartRateChart() {
  const linePath = HeartRatePath({ points: HR_POINTS })
  const areaPath = `${linePath} L680 175 L40 175 Z`
  const peak = HR_POINTS[4]
  const last = HR_POINTS[6]

  return (
    <div className="hr-chart">
      <div className="hr-y-labels">
        <span>120</span>
        <span>90</span>
        <span>60</span>
        <span>30</span>
      </div>

      <svg className="hr-svg" viewBox="0 0 700 190" preserveAspectRatio="none">
        <defs>
          <linearGradient id="hrGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#eb5470" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#eb5470" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* zona óptima */}
        <rect x="0" y="48" width="700" height="67" fill="#e9f9f1" />
        <text x="8" y="42" className="hr-zone-label">Zona Óptima en Reposo (60 - 100 ppm)</text>

        {/* línea guía punteada hasta el pico */}
        <line x1={peak.x} y1="10" x2={peak.x} y2={peak.y} stroke="#c9d2e0" strokeWidth="1" strokeDasharray="3 3" />

        <path d={areaPath} fill="url(#hrGradient)" />
        <path d={linePath} fill="none" stroke="#eb5470" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

        {HR_POINTS.map((p) => (
          <circle key={p.label} cx={p.x} cy={p.y} r="4" fill="#ffffff" stroke="#eb5470" strokeWidth="2.2" />
        ))}
      </svg>

      <div className="hr-tooltip" style={{ left: `${(peak.x / 700) * 100}%` }}>
        <strong>{peak.label} · Cardio Activo</strong>
        <span>{peak.value} ppm</span>
      </div>

      <div className="hr-tooltip hr-tooltip-last" style={{ left: `${(last.x / 700) * 100}%` }}>
        <strong>16/09 (18:45)</strong>
        <span>{last.value} ppm (Reposo)</span>
      </div>

      <div className="hr-x-labels">
        {HR_POINTS.slice(0, 6).map((p) => (
          <span key={p.label}>{p.label}</span>
        ))}
        <span className="hr-x-today">16/09 (Hoy)</span>
      </div>
    </div>
  )
}

/* =====================================
   PASOS DIARIOS
===================================== */

const STEP_DAYS = [
  { label: 'L', value: 46 },
  { label: 'M', value: 58 },
  { label: 'X', value: 39 },
  { label: 'J', value: 64 },
  { label: 'V', value: 71 },
  { label: 'S', value: 100, active: true },
  { label: 'D', value: 54 },
]

function StepsPanel() {
  return (
    <section className="panel side-panel steps-panel">
      <div className="side-panel-header">
        <span>Pasos Diarios</span>
        <div className="side-panel-value">
          <strong>8,432</strong>
          <span>Meta: 10,000 pasos</span>
        </div>
      </div>

      <div className="steps-bars">
        {STEP_DAYS.map((d) => (
          <div className="steps-bar-col" key={d.label}>
            {d.active && <span className="steps-bar-peak">10.4k</span>}
            <div
              className={`steps-bar${d.active ? ' active' : ''}`}
              style={{ height: `${d.value}%` }}
            />
            <span>{d.label}</span>
          </div>
        ))}
      </div>

      <div className="side-panel-footer">
        <span>Máx: 10,420</span>
        <span>Mín: 6,810</span>
        <span className="up">↑ 12%</span>
      </div>
    </section>
  )
}

/* =====================================
   CALORÍAS ACTIVAS
===================================== */

function CaloriesPanel() {
  return (
    <section className="panel side-panel calories-panel">
      <div className="side-panel-header">
        <span>Calorías Activas</span>
        <div className="side-panel-value">
          <strong>342 <small>kcal</small></strong>
          <span>Meta: 400 kcal</span>
        </div>
      </div>

      <div className="calories-chart">
        <span className="calories-peak">Pico: 520 kcal (16h)</span>

        <svg viewBox="0 0 220 70" preserveAspectRatio="none">
          <defs>
            <linearGradient id="calGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#e9a719" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#e9a719" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            d="M0 55 C15 52 22 44 36 40 C50 36 58 46 72 48 C88 50 96 30 112 20
               C128 10 138 14 152 24 C166 34 172 50 188 52 C200 54 210 46 220 40
               L220 65 L0 65 Z"
            fill="url(#calGradient)"
          />
          <path
            d="M0 55 C15 52 22 44 36 40 C50 36 58 46 72 48 C88 50 96 30 112 20
               C128 10 138 14 152 24 C166 34 172 50 188 52 C200 54 210 46 220 40"
            fill="none"
            stroke="#e9a719"
            strokeWidth="2.3"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="side-panel-footer">
        <span>Máx: 520 kcal</span>
        <span>Mín: 280 kcal</span>
        <span className="up">↑ 8%</span>
      </div>
    </section>
  )
}

/* =====================================
   FASES DE SUEÑO
===================================== */

const SLEEP_PHASES = [
  { label: 'Profundo', pct: 28, color: '#2f5fd0' },
  { label: 'Ligero', pct: 48, color: '#5b9bf2' },
  { label: 'REM', pct: 24, color: '#b7d3fb' },
]

function SleepPanel() {
  return (
    <section className="panel side-panel sleep-panel">
      <div className="side-panel-header">
        <span>Fases de Sueño</span>
        <div className="side-panel-value">
          <strong>7h <small>24m</small></strong>
          <span>Objetivo: 8h regulares</span>
        </div>
      </div>

      <div className="sleep-bar-label">
        <span>Composición promedio</span>
        <span className="sleep-eff">Eficiencia · 88%</span>
      </div>

      <div className="sleep-bar">
        {SLEEP_PHASES.map((p) => (
          <div
            key={p.label}
            className="sleep-bar-segment"
            style={{ width: `${p.pct}%`, background: p.color }}
          />
        ))}
      </div>

      <div className="sleep-legend">
        {SLEEP_PHASES.map((p) => (
          <span key={p.label}>
            <i style={{ background: p.color }} />
            {p.label} ({p.pct}%)
          </span>
        ))}
      </div>

      <div className="side-panel-footer">
        <span>Máx: 8h 15m</span>
        <span>Mín: 6h 10m</span>
        <span className="up">↑ 6%</span>
      </div>
    </section>
  )
}

/* =====================================
   PÁGINA PRINCIPAL
===================================== */

function Stats() {
  return (
    <div className="estadisticas">

      {/* CABECERA */}

      <div className="estadisticas-header">
        <div>
          <div className="estadisticas-title">
            <h1>Estadísticas de Salud</h1>
            <span className="device-badge">FitBand Pro v3.4</span>
          </div>

          <p>
            Analiza y compara el rendimiento y evolución de tus métricas
            biométricas registradas por tu FitBand Pro.
          </p>
        </div>

        <div className="estadisticas-actions">
          <div className="period-pills">
            <button className="period-pill" type="button">Hoy</button>
            <button className="period-pill active" type="button">Últimos 7 días</button>
            <button className="period-pill" type="button">Último mes</button>
          </div>

          <button className="date-button" type="button">
            <span>▣</span>
            10 Sep – 16 Sep 2025
            <span>⌄</span>
          </button>

          <button className="export-button" type="button">
            <ExportIcon />
            Exportar
          </button>
        </div>
      </div>

      {/* TARJETAS DE RESUMEN */}

      <div className="stats-grid">
        <StatCard
          title="Ritmo Cardíaco"
          value="72"
          unit="ppm prom."
          badge="Activo"
          badgeTone="badge-red"
          icon={<HeartIcon />}
          type="heart"
        />

        <StatCard
          title="Pasos Diarios"
          value="8,432"
          unit="pasos/día"
          badge="+12%"
          badgeTone="badge-green"
          icon={<StepsIcon />}
          type="steps"
        />

        <StatCard
          title="Calorías Quemadas"
          value="342"
          unit="kcal act."
          badge="Normal"
          badgeTone="badge-gray"
          icon={<CaloriesIcon />}
          type="calories"
        />

        <StatCard
          title="Tiempo de Sueño"
          value="7h 24m"
          unit="prom./noche"
          badge="88% efic."
          badgeTone="badge-green"
          icon={<SleepIcon />}
          type="sleep"
        />
      </div>

      {/* RITMO CARDÍACO DETALLADO */}

      <section className="panel hr-panel">
        <div className="hr-panel-header">
          <div className="panel-title">
            <div className="hr-panel-icon"><HeartIcon /></div>

            <div>
              <div className="hr-panel-title-row">
                <h2>Ritmo Cardíaco Detallado</h2>
                <span className="badge badge-green-outline">Rango Normal</span>
              </div>

              <span className="hr-panel-sub">
                Mediciones continuas cada 5 minutos · Última sincronización hace 12 min
              </span>
            </div>
          </div>

          <div className="hr-panel-controls">
            <button className="view-toggle active" type="button">⟍ Línea</button>
            <button className="view-toggle" type="button">▤ Barras</button>
            <button className="view-toggle" type="button">⇄ Comparativa</button>
            <button className="kebab-button" type="button">⋮</button>
          </div>
        </div>

        <HeartRateChart />

        <div className="hr-stats-row">
          <div className="hr-stat">
            <span>Ritmo Promedio</span>
            <strong>72 <small>ppm</small></strong>
            <span className="hr-stat-meta good">✓ Dentro del rango saludable</span>
          </div>

          <div className="hr-stat">
            <span>Frecuencia Máxima <ArrowUp /></span>
            <strong>112 <small>ppm</small></strong>
            <span className="hr-stat-meta">14 Sep · Entrenamiento en carrera</span>
          </div>

          <div className="hr-stat">
            <span>Frecuencia Mínima <ArrowDown /></span>
            <strong>48 <small>ppm</small></strong>
            <span className="hr-stat-meta">Fase de sueño profundo (04:12 AM)</span>
          </div>

          <div className="hr-stat">
            <span>Variación Semanal</span>
            <strong>+5%</strong>
            <span className="hr-stat-meta">
              <span className="badge badge-green">Estable</span> vs semana previa (69 ppm)
            </span>
          </div>
        </div>
      </section>

      {/* PASOS / CALORÍAS / SUEÑO */}

      <div className="side-grid">
        <StepsPanel />
        <CaloriesPanel />
        <SleepPanel />
      </div>

      {/* INSIGHTS */}

      <div className="insights-banner">
        <div className="insights-icon">✦</div>

        <div className="insights-copy">
          <div className="insights-title">
            <strong>Conclusiones de Salud de la Semana</strong>
            <span className="badge badge-green-outline">Análisis Inteligente</span>
          </div>

          <p>
            Tu frecuencia cardíaca en reposo se mantiene notablemente estable en 72 ppm
            y la constancia de pasos mejoró un 12% respecto a la semana pasada.
            La fase de sueño profundo aumentó 18 minutos el fin de semana tras
            sesiones activas.
          </p>
        </div>

        <div className="insights-actions">
          <button className="insights-btn-outline" type="button">Ver Registro Completo</button>
          <button className="insights-btn" type="button">Configurar Alertas →</button>
        </div>
      </div>

    </div>
  )
}

export default Stats