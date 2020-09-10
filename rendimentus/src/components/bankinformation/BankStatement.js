import React, { useState, useEffect } from 'react';
import './bankinformation.css';
import { Header } from "../header/index.js";
import { loadApiGetBanks } from "./loadApi.js";
import Footer from '../footer';

export const BankStatement = () => {
  const [extract, setExtract] = useState([]);
  // const [test, setTest] = useState([]);

  useEffect(() => {
    loadApiGetBanks().then((client) => setExtract(client[2].accounts[0].accountExtract));
  }, []);

  // useEffect(() => {
  //   loadApiGetBanks().then(client => client.map(bank => setTest(bank.accounts[0].accountExtract)));
  // }, []);


  return (
    <>
      <Header />
      <h1 className="hExtract">Extrato</h1>
      <section className="section">
        <div className="divExtract">
          {extract.map((eachExtract, index) => (
            <div key={index}>
              <p className="pExtract">Nome: {eachExtract.name}</p>
              <p className="pExtract">Valor: R${eachExtract.value}</p>
              <p className="pExtract">Data: {eachExtract.date}</p>
              <p></p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
