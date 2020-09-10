import React from 'react';
import Images from '../images/images.js';
import Invoice from '../../assests/invoice.svg'
import Card from '../../assests/card.svg'
import Notification from '../../assests/notification.svg'
import Contact from '../../assests/contact.svg'
import { useHistory } from "react-router-dom"
import './footer.css'

 const Footer = () =>{
  let history = useHistory();

  const handleClick = (path) => {
    history.push(path);
  };
   return (
     <footer>
       <div onClick={() => handleClick("/statement")}>
         <Images src={Invoice} class='footer-images' />
         <Images src={Invoice} class='footer-images imgs' />
       </div>
       <div onClick={() => handleClick("/invoice")} >
         <Images src={Card}class='footer-images' />
         <Images src={Card}class='footer-images imgs' />
       </div>
       <div onClick={() => handleClick("/products")}>
         <Images src={Notification} class='footer-images ' />
         <Images src={Notification} class='footer-images imgs' />
       </div>
       <div onClick={() => handleClick("/contact")}>
         <Images src={Contact}class='footer-images' />
         <Images src={Contact}class='footer-images imgs' />
       </div>
     </footer>
   )
 }
 export default Footer