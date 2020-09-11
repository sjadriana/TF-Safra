import React from "react";
import { useHistory} from "react-router-dom";
import Form from "../components/form/Form.js";
import logo from "../components/form/logo-safra-gold.svg";
import "./Home.css"


export const Home = () => {
    let history = useHistory();
    // const handleClick = () => {
    //     history.push("/profile")
    // }

    // const [login, setLogin] = useState();




    return (
        <main className='main-home'>
            <div className='container-home'>
                <img src={logo} alt='' className='logo'></img>
                <h2 className='gold'>Rendimentus</h2>
                <section>
                    <div>
                        <ul>CPF/CNPJ</ul>
                    </div>
                </section>
                <Form
                    // onChangeLogin={(event) => setLogin(event.target.value)}
                />
            </div>
        </main>
    )

};




