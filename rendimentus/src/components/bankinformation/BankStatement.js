import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './bankinformation.css';
import { Header } from "../header/index.js";
import { loadApiGetBanks } from "./loadApi.js";
import Footer from '../footer';

export const BankStatement = () => {
  const [extract, setExtract] = useState([]);
  let location = useLocation();

  useEffect(() => {
    loadApiGetBanks().then((client) => {
      setExtract(client.find(item=>item.name === location.pathname.split("/")[2]).accounts[0].accountExtract);
    });
  }, []);


  return (
    <>
      <Header />
      <h1 className="h-extract">Extrato</h1>
      <section className="section">
        <div className="div-extract">
          {extract.map((eachExtract, index) => (
            <div key={index}>
              <p className="p-extract p-bold">{eachExtract.name}</p>
              <p className="p-extract span-date-value">
                <span>{eachExtract.date.split("T")[0]}</span>
                <span>R$ {eachExtract.value}</span>
              </p>
              <p className="p-margin"></p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
