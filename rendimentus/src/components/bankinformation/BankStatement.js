import React from 'react';
import { useHistory } from "react-router-dom";

export const BankStatement = () => {
  let history = useHistory();

  const handleClick = (path) => {
    history.push(path);
  };


  return (
    <>
    <header></header>
    <main>Olá</main>
    <footer>
      <div onClick={() => handleClick("/statement")}>extrato</div>
      <div onClick={() => handleClick("/invoice")}>fatura</div>
      <div onClick={() => handleClick("/products")}>produto</div>
      <div onClick={() => handleClick("/contacts")}>contato</div>
    </footer>
    </>
  );
}
