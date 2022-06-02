import React, { useState, useSyncExternalStore } from 'react'
import {Form, Button} from "react-bootstrap";
import "./FormInput.css"
import Login from './Login';
import Register from './Register';
import {Link} from "react-router-dom";

const FormInput = () => {

    const [login, setLogin] = useState(true);

    function handleClick(event){
        event.preventDefault()
        setLogin(false)
        if (login === false){
            setLogin(true)
            
        }
    }
  return (
        <div className='Form__wrapper'>
        <h1 className='Form__logo'>G-Designs</h1>
        <h2 className='Form__title'>{login ? "Log into your account": "SignUp Now"}</h2>
            <Form>
               {login ? <Login /> : <Register  />}
                <Button className="Form__button" type="submit">
                    {login ? "Log In" : "Sign Up"}
                </Button> 
            </Form>
            <p className='Form__signup-text'>{login? "Don't have an account?" : "Already have an account?"} <button className='Form__signup-btn' onClick={handleClick}>{login? "Sign Up" : "Sign In" }</button></p>
        </div>
  )
}

export default FormInput;