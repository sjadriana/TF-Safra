import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./components/profile/profile";

import { BankStatement } from "./components/bankinformation/BankStatement.js";
import { BankInvoice } from "./components/bankinformation/BankInvoice.js";
// import { Products } from "colocar o caminho dos produtos";
import { BankContact } from "./components/bankinformation/BankContact.js";
import {Header} from"./components/header/index.js"
import Footer from './components/footer';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/profile" component={Profile} /> 
        <Route path="/statement" component={BankStatement} />
        <Route path="/invoice" component={BankInvoice} />
        {/* <Route path="/products" component={Products} /> */}
        <Route path="/contact" component={BankContact} />
        <Route path="/header" component={Header} />
        <Route path="/footer" component={Footer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
