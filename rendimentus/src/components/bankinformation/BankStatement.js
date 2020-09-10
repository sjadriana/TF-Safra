import React, { useState, useEffect } from 'react';
import './bankinformation.css';
import { Header } from "../header/index.js";
import { loadApiGetBanks } from "./loadApi.js";
import { useHistory } from "react-router-dom";

export const BankStatement = () => {
  const [extract, setExtract] = useState([]);
  let history = useHistory();

  const handleClick = (path) => {
    history.push(path);
  };

  useEffect(() => {
    loadApiGetBanks().then((client) => setExtract(client[2].accounts[0].accountExtract));
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
      <footer>
        <div onClick={() => handleClick("/statement")}>extrato</div>
        <div onClick={() => handleClick("/invoice")}>fatura</div>
        <div onClick={() => handleClick("/products")}>produto</div>
        <div onClick={() => handleClick("/contacts")}>contato</div>
    </footer>
    </>
  );
}
