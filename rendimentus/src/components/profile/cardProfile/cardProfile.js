import React from 'react';
import { useHistory } from "react-router-dom";
import "../../../../node_modules/font-awesome/css/font-awesome.min.css"

export const CardProfile = (props) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(props.onClick);
  };

  return (
    <div className='card' onClick={() => handleClick()}>
      <h2 className='bank'>{props.bankNumber} / {props.bankName}</h2>
      <div className='card-account'>
        <p className='first-p'>Ag: {props.agency}</p>
        <p>CC: {props.accountNumber}</p>
      </div>
      <div className='card-balance'>
        <p className='first-p'><i class="fa fa-money"></i> {props.balance.toFixed(2)}</p>
        <p className='first-p'><i class="fa fa-credit-card"></i> {props.creditExpenses.toFixed(2)}</p>
      </div>
    </div>
  );
};