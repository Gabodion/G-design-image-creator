import React from 'react';
import Input from "./Input";
import "./FormInput.css";
import {Form, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <div>
        <div className='Form__wrapper'>
          <h1 className='Form__logo'>G-Designs</h1>
          <h2 className='Form__title'>Log into your account</h2>
          <Form>
            <Input label="Username" type="text" placeholder="Username"/>
            <Input label="Password" type="password" placeholder="Password"/>
            <Button className="Form__button" type="submit">Log In</Button> 
          </Form>
            <p className='Form__signup-text'>Don't have an account?<Link to="/register" className='Form__signup-btn'> Sign Up</Link></p>
        </div>
      </div>
  )
}

export default Login;