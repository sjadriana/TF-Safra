import React from 'react'
import Images from '../images/images'
import logo from '../../assests/logo-safra.svg'
import logout from '../../assests/logout.svg'
import './header.css'
// import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom"

const Header = () => {
 
  
  return (
    <header className='header'>
      <div className='logo-logout'>
      <Images src={logo} alt='logo' class='logo-image' />
      <div className='louout' onClick={e => console.log('foi')}> 
      <Images src={logout} alt='logout' class='logout-image' />
      </div>
      </div>          
      <nav>
        <ul>
          <li><h1 id='client-name'>Ana</h1></li>
          <li><p id='client-account'>conta</p></li>
        </ul>
      </nav>
    </header>

  );
}

export default Header