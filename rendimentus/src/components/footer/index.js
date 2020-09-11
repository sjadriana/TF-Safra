import React from 'react';
import Images from '../images/images.js';
import Invoice from '../../assests/invoice.svg';
import Card from '../../assests/card.svg';
import Contact from '../../assests/contact.svg';
import InvoiceBlue from '../../assests/invoice-blue.svg';
import CardBlue from '../../assests/card-blue.svg';
import ContactBlue from '../../assests/contact-blue.svg';
import { useHistory, useLocation } from "react-router-dom";
import './footer.css'

 const Footer = () =>{
  let history = useHistory();
  let location = useLocation();

  const background = (path) => {
    return location.pathname === path;
  }

  const handleClick = (path) => {
    history.push(path);
  };
   return (
     <footer className="footer">
       <div 
          onClick={() => handleClick(`/statement/${location.pathname.split("/")[2]}`)}
          className={background(`/statement/${location.pathname.split("/")[2]}`) 
            ? "footer-background-white div-footer" 
            : "footer-background-blue div-footer"}
        >
         <Images 
          class='footer-images'
          src={background(`/statement/${location.pathname.split("/")[2]}`) ?
          InvoiceBlue :
          Invoice}  
          />
       </div>
       <div 
          onClick={() => handleClick(`/invoice/${location.pathname.split("/")[2]}`)}
          className={background(`/invoice/${location.pathname.split("/")[2]}`) 
            ? "footer-background-white div-footer" 
            : "footer-background-blue div-footer"} 
        >
         <Images 
          class='footer-images'
          src={background(`/invoice/${location.pathname.split("/")[2]}`) ?
          CardBlue :
          Card} 
          />
       </div>
       <div 
          onClick={() => handleClick(`/contact/${location.pathname.split("/")[2]}`)}
          className={background(`/contact/${location.pathname.split("/")[2]}`) 
            ? "footer-background-white div-footer" 
            : "footer-background-blue div-footer"}
          >
         <Images 
          class='footer-images'
          src={background(`/contact/${location.pathname.split("/")[2]}`) ?
          ContactBlue :
          Contact} 
          />
       </div>
     </footer>
   )
 }
 export default Footer