import React from 'react';

export const CardProfile = (props) => {

    return (
        <div className= 'card' onClick={props.onClick}>
                <h2 className= 'bank'>{props.bankNumber} / {props.bankName}</h2>
            <div className='card-account'>
                <p>Ag: {props.agency}</p>
                <p>CC: {props.accountNumber}</p>
            </div>
            <div className='card-balance'>
                <p>Saldo: {props.balance}</p>
                <p>Fatura do cartao: {props.creditExpenses}</p>
            </div>
        </div>
    );
  };