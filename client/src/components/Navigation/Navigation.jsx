import './Navigation.css'
import ymcaLogo from '../../assets/ymcaLogo.png'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav className="top-navbar">
      <img src={ymcaLogo} alt="YMCA Logo" className="ymca-logo" />
      
      <Link to="/perfil" className="profile-link">
        <FaUser />
      </Link>
    </nav>
  )
}

export default Navigation
