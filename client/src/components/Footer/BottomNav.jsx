import { NavLink } from 'react-router-dom'
import { FaHome, FaClock, FaCalendarAlt, FaBell } from 'react-icons/fa'
import './BottomNav.css'

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" className="nav-item">
        <FaHome />
        <span>Inicio</span>
      </NavLink>
      <NavLink to="/fichajes" className="nav-item">
        <FaClock />
        <span>Fichajes</span>
      </NavLink>
      <NavLink to="/calendario" className="nav-item">
        <FaCalendarAlt />
        <span>Calendario</span>
      </NavLink>
      <NavLink to="/notificaciones" className="nav-item">
        <FaBell />
        <span>Notificaciones</span>
      </NavLink>
    </nav>
  )
}

export default BottomNav
