import React, { useState, useEffect } from 'react';
import Input from "./Input";
import "./FormInput.css";
import {Form, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { login } from "../../actions/userActions";
import { useHistory } from "react-router-dom";
import {errorMessage} from "./errorMessage";


const Login = () => {

  let history = useHistory();
  const [logins, setLogins] = useState({
    email:"",
    password: ""
  })
const dispatch = useDispatch();


const userLogin = useSelector((state) => state.userLogin);

const {loading, error, userInfo } = userLogin;

useEffect(() => { 
  if (userInfo) {
    history.push("/dashboard/my-designs")
  }
}, [history, userInfo])

  function handleChange(event){
    const {name, value} = event.target;
    setLogins(preValue => {
      return {
        ...preValue,
        [name] : value
      }
    })
   
  }
  const handleSubmit = async (event) => {
  event.preventDefault();
    console.log(logins)
   dispatch(login(logins.email, logins.password))
  }

  return (
    <div>
        <div className='Form__wrapper'>
          <h1 className='Form__logo'>G-Designs</h1>
          <h2 className='Form__title'>Log into your account</h2>
         <errorMessage> {error} </errorMessage>
          <Form onSubmit={handleSubmit}>
            <Input label="Email Address" name="email" type="email" placeholder="Enter email" onChange={handleChange} value={logins.email}/>
            <Input label="Password" name="password" type="password" placeholder="Password"  onChange={handleChange} value={logins.password}/>
            <Button className="Form__button" type="submit">Log In</Button> 
          </Form>
            <p className='Form__signup-text'>Don't have an account?<Link to="/register" className='Form__signup-btn'> Sign Up</Link></p>
        </div>
      </div>
  )
}

export default Login;