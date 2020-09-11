import React from 'react';
import { useHistory } from "react-router-dom";
import './cardOffer.css'


export const CardOffers = (props) => {

  const handleClick = () => {
    if (window.confirm('Você tem interesse nesse produto?')) {
      alert('Em breve a instituição financeira entrará em contato com você!')
      console.log(`Interesse recebedo!`)
    } else {
      alert("cancelado")
    }
  }

  return (
    <div className='card-offers' onClick={() => handleClick()}>
      <h2 className='offers'>{props.bankName} </h2>
      <p> {props.offerName}</p>
      <div className='offers-account'>
        <p>{props.type}</p>
        <p>R$: {props.value}</p>
        <p>Taxa: {props.rate}%</p>
        <p>N° de parcelas: {props.maxInstallments}</p>
      </div>
    </div>
  );
}