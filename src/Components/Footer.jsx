import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Footer.css'

const Footer = () => {
  return (
    <footer>
      <div>
        <p>Powered by</p>
        <img src=" /images/DH.png" alt='DH-logo' />
      </div>
      <p className='student'>Estilizado por <Link to='https://falconleandro.github.io/Trabajos/'>LeaDev</Link> </p>

    </footer>
  )
}

export default Footer