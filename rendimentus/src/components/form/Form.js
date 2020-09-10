import React from "react";
// import { useHistory } from "react-router-dom";
import Button from "../button/button";
import Input from "../input/Input"


const Form = (props) => {
    return (
        <form className='form-login'>
            <label htmlFor='login'>
                <Input className='input-cpf' onChange={props.onChangeLogin} />
            </label>
            <Button className='consult-btn' onclick={props.onclick} name='Consultar' />
        </form>
    );
}
export default Form;
