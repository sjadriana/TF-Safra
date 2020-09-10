import React,{useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import {CardOffers, cardOffers} from './cardOffers/index.js'
import { Header } from '../header/index.js';
import Footer from '../footer/index.js';
//  export const Offers = ()=>{
// fetch(` https://jsonbox.io/box_ddb0ab5da8d69da8c315/offers`)
// .then( function(response){
//   return response.json()
// })
// .then(function(data){ 
//   console.log(data)})
// return <div>Ola</div>
// }

export const ClientOffers = () => {
  const [offers, setOffers] = useState([]);

  // let history = useHistory();

  // const handleClick = (path) => {
  //     history.push(path);
  //   };

  useEffect(() => {
      loadoffers().then(result => 
          setOffers(result))
  }, []);

  
  const loadoffers = async () => {
      try {
          const getBanksApi = await fetch("https://jsonbox.io/box_ddb0ab5da8d69da8c315/offers")
          const response = await getBanksApi.json();          
        return response;
      }
      catch (err) {
          console.error("We got a problem to fetch the information", err)
      }    
  }
  
  const showOffers = (offers) => {
      return offers.reduce((total, offer) => total += offer.name[0].type, 0);
  }

  // const sumCreditExpenses = (offers) => {
  //     return offers.reduce((total/*, offer*/) => total += 300, 0);
  // }

  return (
      <>
          <Header/>
          <section className='cards-profile'>
          {offers.map((offer, index) => <cardOffers 
          key={index}
          name={offer.name}
          />
          
            
          )}
          </section>
          <Footer />
          
      </>
  );
};
