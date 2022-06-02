import React from 'react';
import Input from "./Input";
import "./FormInput.css";
import {Form, Button} from "react-bootstrap";
import {Link} from "react-router-dom";


const Register = () => {
  return (
    <div>
      <div className='Form__wrapper'>
        <h1 className='Form__logo'>G-Designs</h1>
        <h2 className='Form__title'>SignUp Now</h2>
        <Form>
          <Input label="Username" type="text" placeholder="Username"/>
          <Input label="Email Address" type="email" placeholder="Enter email"/>
          <Input label="Password" type="password" placeholder="Password"/>
          <Button className="Form__button" type="submit">Sign Up</Button>
        </Form>
        <p className='Form__signup-text'>Already have an account?<Link to="/login" className='Form__signup-btn'> Sign In</Link></p>
      </div>
    </div>
  )
}

export default Register;