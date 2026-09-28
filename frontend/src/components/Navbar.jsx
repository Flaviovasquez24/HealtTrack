function BellIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 9a6 6 0 0 1 12 0c0 4.5 1.5 6 1.5 6h-15S6 13.5 6 9Z" />
      <path d="M9.5 18a2.5 2.5 0 0 0 5 0" />
    </svg>
  )
}

function Navbar() {
  return (
    <header className="topbar">
      <div className="topbar-spacer" />

      <button className="icon-button" type="button" aria-label="Notificaciones">
        <BellIcon />
        <span className="icon-dot" />
      </button>

      <button
        className="user-menu"
        type="button"
        aria-label="Menú de usuario"
      >
        <div className="avatar">
          A
        </div>

        <div className="user-copy">
          <strong>Alejandro</strong>
          <span>Usuario</span>
        </div>

        <svg
          className="chevron"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </header>
  )
}

export default Navbar