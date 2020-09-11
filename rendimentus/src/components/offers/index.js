import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { CardOffers } from './cardOffers/index.js'
import { Header } from '../header/index.js';
import Footer from '../footer/index.js';

export const ClientOffers = () => {
  const [offers, setOffers] = useState([]);

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

  useEffect(() => {
    loadoffers().then(result =>
      setOffers(result))
  }, []);

  return (
    <>
      <Header />
      <section className='cards-profile'>
        {offers.map((offer, index) =>
          <CardOffers
            key={index}
            bankName={offer.bank.name}
            offerName={offer.name}
            value={offer.value}
            type={offer.type}
            rate={offer.rate}
            maxInstallments={offer.maxInstallments}
          />
        )}
      </section>
      <footer>
      </footer>

    </>
  );
};
