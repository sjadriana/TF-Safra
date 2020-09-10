import React from 'react'
import Images from '../images/images'
import logo from '../../assests/logo-safra.svg'
import logout from '../../assests/logout.svg'
import './header.css'
import { useHistory } from "react-router-dom"

export const Header = () => {
  let history = useHistory();

  const handleClick = (path) => {
    history.push(path);
  };
  
  return (
    <header className='header'>
      <div className='logo-logout'>
        <div className='logo'>
          <Images src={logo} alt='logo'  />
        </div>
        <div className='logout' onClick={() =>handleClick("/home")}> 
      <Images src={logout} alt='logout' class='logout-image' />      
      </div>
      </div>           
      <nav>
        <ul className='client-info'>
          <li className='name-li'><h1 id='client-name' className='client-name'>Ana</h1></li>
          <li className='account-info'><p id='client-account'>conta</p></li>
        </ul>
      </nav>
    </header>

  );
}

 