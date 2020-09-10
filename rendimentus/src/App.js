import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
// import { Profile } from "colocar o caminho do perfil";
import { BankStatement } from "./components/bankinformation/BankStatement.js";
// import { Invoice } from "colocar o caminho da fatura";
// import { Products } from "colocar o caminho dos produtos";
// import { Contact } from "colocar o caminho dos contatos";
import {Header} from"./components/header/index.js"
import Footer from './components/footer';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        {/*<Route path="/profile" component={Profile} /> */}
        <Route path="/statement" component={BankStatement} />
        {/* <Route path="/invoice" component={Invoice} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} /> */}
        <Route path="/header" component={Header} />
        <Route path="/footer" component={Footer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
