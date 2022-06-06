import React, { useState, useEffect } from 'react';
import Input from "./Input";
import "./FormInput.css";
import {Form, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { register } from "../../actions/userActions";

import { useHistory } from "react-router-dom";

const Register = () => {

  let history = useHistory();
  const [registerInput, setRegisterInput] = useState({
    username:"",
    email:"",
    password: ""
  })
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);

  const {loading, error, userInfo } = userRegister;

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(registerInput)
    dispatch(register(registerInput.username, registerInput.email, registerInput.password))  
  }


  function handleChange (event){
    const {name, value} = event.target;
    setRegisterInput(preValue => {
      return {
        ...preValue,
        [name] : value
      }
    })
    
  }

  useEffect(() => { 
    if (userInfo) {
      history.push("/dashboard/my-designs")
    }
  }, [history, userInfo])

  return (
    <div>
      <div className='Form__wrapper'>
        <h1 className='Form__logo'>G-Designs</h1>
        <h2 className='Form__title'>SignUp Now</h2>
        <Form>
          <Input label="Username" type="text" name="username" onChange={handleChange} value={registerInput.username} placeholder="Username"/>
          <Input label="Email Address" type="email" name="email" onChange={handleChange} value={registerInput.email} placeholder="Enter email"/>
          <Input label="Password" type="password" name="password" onChange={handleChange} value={registerInput.password} placeholder="Password"/>
          <Button className="Form__button" type="submit" onClick={handleSubmit}>Sign Up</Button>
        </Form>
        <p className='Form__signup-text'>Already have an account?<Link to="/login" className='Form__signup-btn' > Sign In</Link></p>
      </div>
    </div>
  )
}

export default Register;