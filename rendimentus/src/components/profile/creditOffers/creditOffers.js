import React from 'react';
import '../../../../node_modules/font-awesome/css/font-awesome.min.css'; 

export const CreditOffers = (props) => {

    return (
        <div className= 'creditOffers' onClick={() => props.onClick()}>
            <div className='container-warn-icon'>
                <i class="fa fa-exclamation-triangle"></i>
            </div>
            <div className='container-warn-text'>
                <p>Temos propostas de crédito para você. Clique Aqui!</p>
            </div>
        </div>
    );
};