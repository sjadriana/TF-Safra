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
