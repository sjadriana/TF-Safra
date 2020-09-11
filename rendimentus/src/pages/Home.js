import React from "react";
import Form from "../components/form/Form.js";
import logo from "../components/form/logo-safra-gold.svg";
import "./Home.css"


export const Home = () => {

    return (
        <main className='main-home'>
            <div className='container-home'>
                <img src={logo} alt='' className='logo-home'></img>
                <p className='gold'>Rendimentus</p>
                <section className="section-cpf">
                    <p className="cpf-cnpj">CPF/CNPJ</p>
                </section>
                <Form />
            </div>
        </main>
    )

};




