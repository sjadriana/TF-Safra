import React from 'react';
import { useHistory } from "react-router-dom";


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
    <div className={`card-offers ${props.hasBank}`} onClick={() => handleClick()}>
      <div className='title-card-offer'>
        <h2 className='offers'>{props.bankName} </h2>
        <p className='min-tax'>{props.minTax}</p>
      </div>
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