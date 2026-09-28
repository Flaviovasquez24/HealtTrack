import { useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Navbar from './components/Navbar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Stats from './pages/Stats.jsx'
import Metas from './pages/Goals.jsx'
import History from './pages/History.jsx'
import Settings from './pages/Settings.jsx'
import Profile from './pages/Profile.jsx'
import DeviceStats from './pages/DeviceStats.jsx'
import './index.css'

const PAGES = {
  dashboard: Dashboard,
  stats: Stats,
  goals: Metas,
  history: History,
  settings: Settings,
  profile: Profile,
  device: DeviceStats,
}

const PAGE_LABELS = {
  device: 'Dispositivo',
}

function ComingSoon({ page }) {
  return (
    <div className="coming-soon">
      <h2>{PAGE_LABELS[page] ?? page}</h2>
      <p>Esta sección todavía está en construcción.</p>
    </div>
  )
}

function App() {
  const [activePage, setActivePage] = useState('dashboard')

  const Page = PAGES[activePage]

  return (
    <div className="app-shell">

      <Sidebar activePage={activePage} onNavigate={setActivePage} />

      <div className="main-shell">

        <Navbar />

        <main className="page-content">
          {Page ? <Page onNavigate={setActivePage} /> : <ComingSoon page={activePage} />}
        </main>

      </div>

    </div>
  )
}

export default App