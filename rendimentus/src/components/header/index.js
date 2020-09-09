import React from 'react'

import Images from '../images/images'
import logo from '../../assests/logo-safra.svg'
import logout from '../../assests/logout.svg'
const Header = () => {

  return (
    <header>
      <Images src={logo} alt='logo' class='logo-image' />
      <div className='louout' onClick={e => <Link to="/somewhere"/>}
      ><Images src={logout} alt='logout' class='logout-image'/> </div>
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