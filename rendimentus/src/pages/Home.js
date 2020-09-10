import React from "react";
import { useHistory } from "react-router-dom";
import Form from "../components/form/Form.js";
import logo from "../components/form/logo-safra.svg";
import "./Home.css"


export const Home = () => {
    let history = useHistory();

    // const handleClick = () => {
    //     history.push("/profile")
    // }

    return (
        <main className='main-home'>
            <div className='container-home'>
                <img src={logo} alt='' className='logo'></img>
                <h1 className='gold'>Rendimentus</h1>
                <section>
                    <div>
                        <ul>CPF/CNPJ</ul>
                    </div>
                </section>
                <Form />
            </div>
        </main>
    )

};




