import React, { useState, useEffect } from 'react';
import './bankinformation.css';
import { useLocation } from "react-router-dom";
import { Header } from "../header/index.js";
import { loadApiGetBanks } from "./loadApi.js";
import Footer from '../footer';

export const BankInvoice = () => {
  const [invoice, setInvoice] = useState([]);
  let location = useLocation();

  useEffect(() => {
    loadApiGetBanks().then((client) => {
      setInvoice(client.find(item=>item.name === location.pathname.split("/")[2]).accounts[0].accountExtract);
    });
  }, []);

  const sumExtract = () => {
    return invoice.reduce((total, currentValue) => total += currentValue.value,0)
  }

  return (
    <>
      <Header />
      <h1 className="hExtract">Fatura</h1>
      <section className="section">
        <div className="divExtract">
          <p>Total: R${sumExtract().toFixed(2)}</p>
          {invoice.map((eachValue, index) => (
            <div key={index}>
              <p className="pExtract">Valor: R${eachValue.value}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}