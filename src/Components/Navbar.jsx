import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { routes } from '../utils/routes'
import { usecontextGlobal } from '../Components/utils/global.context'
import './styles/Navbar.css'

const Navbar = () => {
  const navigate = useNavigate()
  const { dentistDispatch, dentistState } = usecontextGlobal()

  const toggleTheme = () => {
    dentistDispatch({ type: 'THEME', payload: !dentistState.dentistTheme })
  }

  return (
    <div className='navbar'>
      <div className='links'>

        <Link to={routes.home} className='link'>
          <h4>Home</h4>
        </Link>
        <Link to={routes.contact} className='link'>
          <h4>Contact</h4>
        </Link>
        <Link to={routes.favs} className='link'>
          <h4>Favs</h4>
        </Link>




      </div>
      <div className='navbarButtons'>
      <button
          onClick={toggleTheme}
          className={dentistState.dentistTheme ? 'dark' : ''}
        >
          {dentistState.dentistTheme ? 'Modo Oscuro' : 'Modo Claro'}
        </button>
        <h4 onClick={() => navigate(-1)}>↩ Back</h4>

        
      </div>
    </div>
  )
}

export default Navbar