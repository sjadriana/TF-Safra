import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import './bankinformation.css';

const loadApiGetBanks = async () => {
  try {
    const getBanksApi = await fetch("https://jsonbox.io/box_ddb0ab5da8d69da8c315/banks")
    const response = await getBanksApi.json();
    return response;
  }
  catch (err) {
    console.error("We got a problem to fetch the information", err)
  }
}

export const BankStatement = () => {
  let history = useHistory();
  const [extract, setExtract] = useState("");

  const handleClick = (path) => {
    history.push(path);
  };

  useEffect(() => {
    loadApiGetBanks().then((client) => setExtract(client[2].accounts[0].accountExtract));
  }, []);

  return (
    <>
    <section>
      <div className="section"></div>
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
