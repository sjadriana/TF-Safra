import React from 'react';
import { useHistory } from "react-router-dom";

export const CardProfile = (props) => {
    let history = useHistory();

    const handleClick = () => {
        history.push(props.onClick);
      };

    return (
        <div className= 'card' onClick={() => handleClick()}>
                <h2 className= 'bank'>{props.bankNumber} / {props.bankName}</h2>
            <div className='card-account'>
                <p className='agency'>Ag: {props.agency}</p>
                <p>CC: {props.accountNumber}</p>
            </div>
            <div className='card-balance'>
                <p>Saldo: {props.balance.toFixed(2)}</p>
                <p>Fatura do cartao: {props.creditExpenses.toFixed(2)}</p>
            </div>
        </div>
    );
  };