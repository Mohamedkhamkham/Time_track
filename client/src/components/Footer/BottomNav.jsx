import { NavLink } from 'react-router-dom';
import { FaHome, FaClock, FaCalendarAlt, FaBell } from 'react-icons/fa';
import './../../components/Footer/BottomNav.css';

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" className="nav-item">
        <FaHome />
        <span>Inicio</span>
      </NavLink>

      <NavLink to="/check-in" className="nav-item">
        <FaClock />
        <span>Fichajes</span>
      </NavLink>

      <NavLink to="/calendar" className="nav-item">
        <FaCalendarAlt />
        <span>Calendario</span>
      </NavLink>

      <NavLink to="/notifications" className="nav-item">
        <FaBell />
        <span>Notificaciones</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;
