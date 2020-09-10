import React from 'react';

export const cardOffers = (props)=>{
  return (
    <div className= 'card-offers' onClick={props.onClick}>
            <h2 className= 'offers'>{props.bankName} / {props.offerName}</h2>
        <div className='offers-account'>
            <p>R$: {props.type}</p>
            <p>R$: {props.value}</p>
            <p>Taxa: {props.rate}</p>
  <p>N° de parcelas: {props.maxInstallments}</p>
        </div>        
    </div>
);
}