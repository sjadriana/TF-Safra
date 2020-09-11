import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { CardOffers } from './cardOffers/index.js'
import { Header } from '../header/index.js';
import Footer from '../footer/index.js';
import './cardOffer.css';

export const ClientOffers = () => {
  const [offers, setOffers] = useState([]);
  const [banks, setBanks] = useState([]);

  const loadoffers = async () => {
    try {
      const getOffersApi = await fetch("https://jsonbox.io/box_ddb0ab5da8d69da8c315/offers")
      const response = await getOffersApi.json();
      return response;
    }
    catch (err) {
      console.error("We got a problem to fetch the information", err)
    }
  }

  const loadBanks = async () => {
    try {
      const getBanksApi = await fetch("https://jsonbox.io/box_ddb0ab5da8d69da8c315/banks")
      const response = await getBanksApi.json();
      return response;
    }
    catch (err) {
      console.error("We got a problem to fetch the information", err)
    }
  }

  useEffect(() => {
    loadoffers().then(result =>
      setOffers(result))
  }, []);
  
  useEffect(() => {
    loadBanks().then(result =>
      setBanks(result))
  }, []);

  const offersRender = (banks, offers) => {
    const numBanks = banks.map((bank) => parseInt(bank.bankNumber));
    
    offers.forEach((offer, index) => {
      if(!numBanks.includes(parseInt(offer.bank.cod))){
        offers.splice(index, 1);
        offers.push(offer);
      }
    });

    let minimumTax;
    let posMinimumTax = 0;

    offers.forEach((offer, index) => {
      if(index == 0){
        minimumTax = offer.rate;
      }
      if(offer.rate < minimumTax){
        posMinimumTax = index;
      }
    });


    return offers.map((offer, index) => {
      if(numBanks.includes(parseInt(offer.bank.cod)) && index == posMinimumTax){
        return (<CardOffers
          key={index}
          minTax='Menor Taxa!'
          bankName={offer.bank.name}
          offerName={offer.name}
          value={offer.value}
          type={offer.type}
          rate={offer.rate}
          maxInstallments={offer.maxInstallments}
          hasBank='bank-border'
        />);
      }
      else if(index == posMinimumTax){
        return (<CardOffers
          key={index}
          minTax='Menor Taxa!'
          bankName={offer.bank.name}
          offerName={offer.name}
          value={offer.value}
          type={offer.type}
          rate={offer.rate}
          maxInstallments={offer.maxInstallments}
          hasBank=''
        />);
      } 
      else if(numBanks.includes(parseInt(offer.bank.cod))){
        return (<CardOffers
          key={index}
          minTax=''
          bankName={offer.bank.name}
          offerName={offer.name}
          value={offer.value}
          type={offer.type}
          rate={offer.rate}
          maxInstallments={offer.maxInstallments}
          hasBank='bank-border'
        />);
      }
      else{
        return (<CardOffers
          key={index}
          minTax=''
          bankName={offer.bank.name}
          offerName={offer.name}
          value={offer.value}
          type={offer.type}
          rate={offer.rate}
          maxInstallments={offer.maxInstallments}
          hasBank=''
        />);
      }          
    });
  }

  return (
    <>
      <Header />
      <section className='cards-offers'>
        {offersRender(banks, offers)}
      </section>
      <footer>
      </footer>

    </>
  );
};
