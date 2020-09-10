import React, { useState, useEffect } from 'react';
import './bankinformation.css';
import { Header } from "../header/index.js";
import { loadApiGetBanks } from "./loadApi.js";
import { useHistory } from "react-router-dom";

export const BankInvoice = () => {
  const [invoice, setInvoice] = useState([]);
  let history = useHistory();

  const handleClick = (path) => {
    history.push(path);
  };

  useEffect(() => {
    loadApiGetBanks().then((client) => setInvoice(client[2].accounts[0].accountExtract));
  }, []);

  console.log(invoice)

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
      <footer>
        <div onClick={() => handleClick("/statement")}>extrato</div>
        <div onClick={() => handleClick("/invoice")}>fatura</div>
        <div onClick={() => handleClick("/products")}>produto</div>
        <div onClick={() => handleClick("/contacts")}>contato</div>
    </footer>
    </>
  );
}