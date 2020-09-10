import React, { useState, useEffect } from 'react';
import './bankinformation.css';
import { Header } from "../header/index.js";
import { loadApiGetBanks } from "./loadApi.js";
import Footer from '../footer';

export const BankContact = () => {
  const [contactManager, setContactManager] = useState([]);
  const [contactCenter, setContactCenter] = useState([]);

  useEffect(() => {
    loadApiGetBanks().then((client) => setContactManager(client[2].accounts[0].accountManager));
  }, []);

  useEffect(() => {
    loadApiGetBanks().then((client) => setContactCenter(client[2]));
  }, []);

  return (
    <>
      <Header />
      <h1 className="hExtract">Contato</h1>
      <section className="section">
        <div className="divExtract">
          <p>Central: {Object.values(contactCenter)[3]}</p>
          <h3>Gerente</h3>
          <p className="pExtract">Nome: {Object.values(contactManager)[0]}</p>
          <p className="pExtract">E-mail: {Object.values(contactManager)[1]}</p>
          <p className="pExtract">Telefone: {Object.values(contactManager)[2]}</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
