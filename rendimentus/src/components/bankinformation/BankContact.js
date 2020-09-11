import React, { useState, useEffect } from 'react';
import './bankinformation.css';
import { Header } from "../header/index.js";
import { loadApiGetBanks } from "./loadApi.js";
import { useLocation } from "react-router-dom";
import Footer from '../footer';

export const BankContact = () => {
  const [contactManager, setContactManager] = useState([]);
  const [contactCenter, setContactCenter] = useState([]);
  let location = useLocation();

  useEffect(() => {
    loadApiGetBanks().then((client) => {
      setContactManager(client.find(item => item.name === location.pathname.split("/")[2]).accounts[0].accountManager)
    });
  }, []);

  useEffect(() => {
    loadApiGetBanks().then((client) => setContactCenter(client.find(item => item.name === location.pathname.split("/")[2])));
  }, []);

  return (
    <>
      <Header />
      <h1 className="h-extract">Contato</h1>
      <section className="section">
        <div className="div-extract">
          <h3 className="p-margin">Central</h3>
          <p>Telefone: {Object.values(contactCenter)[3]}</p>
          <h3 className="p-margin">Gerente</h3>
          <p className="p-extract">Nome: {Object.values(contactManager)[0]}</p>
          <p className="p-extract">E-mail: {Object.values(contactManager)[1]}</p>
          <p className="p-extract">Telefone: {Object.values(contactManager)[2]}</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
