import React, { useState, useEffect } from 'react';
import './bankinformation.css';
import { Header } from "../header/index.js";
import { loadApiGetBanks } from "./loadApi.js";
import Footer from '../footer';

export const BankInvoice = () => {
  const [invoice, setInvoice] = useState([]);

  useEffect(() => {
    loadApiGetBanks().then((client) => setInvoice(client[2].accounts[0].accountExtract));
  }, []);

  return (
    <>
      <Header />
      <h1 className="hExtract">Fatura</h1>
      <section className="section">
        <div className="divExtract">
          <p>Total: </p>
          {invoice.map((eachExtract, index) => (
            <div key={index}>
              <p className="pExtract">Valor: R${eachExtract.value}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}