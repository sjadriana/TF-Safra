import React,  { useState, useEffect } from 'react'
import Images from '../images/images'
import logo from '../../assests/logo-safra.svg'
import logout from '../../assests/logout.svg'
import './header.css'
import { useHistory } from "react-router-dom"

export const Header = () => {
  const [name, setName] = useState([]);
  const [cpf, setCpf] = useState([]);
 useEffect(()=>{fetch(`https://jsonbox.io/box_ddb0ab5da8d69da8c315/client`)
 .then( function(response){
   return response.json()
 })
 .then(function(data){
   let name= data.map(item => item.name).reduce((acc, client)=>{
     acc += `<p>${client.name}</p>`
     return acc      
   })
   name = name.split(' ')[0]
   setName(name)
   const cpf = data.map(item =>item.cpf).reduce((acc, client)=>{
     acc += `<p>${client.cpf}</p>`
     return acc      
   })
   setCpf(cpf)
   console.log(name)
   console.log(cpf)
 })},[])
  
    
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
        <div className='logout' onClick={() =>handleClick("/")}> 
      <Images src={logout} alt='logout' class='logout-image' />      
      </div>
      </div>           
      <nav>
        <ul className='client-info'>
  <li className='name-li'><h1 id='client-name' className='client-name'>{name}</h1></li>
          <li className='account-info'><p id='client-account'>{cpf}</p></li>
        </ul>
      </nav>
    </header>

  );
}

 