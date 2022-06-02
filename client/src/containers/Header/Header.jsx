import React, { useState } from 'react'
import "./Header.css"
import {Row, Col, Button} from "react-bootstrap";
import computer from "../../assets/Computer-Programmer.jpg";
import {Link} from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Footer from "../../components/Footer/Footer"


const Header = () => {

  return (
    <>
    <Navigation />
      <div className='Header__wrapper'>
      <Row>
          <Col lg={6} md={12}>
            <h1 className='Header__title'>Create Your <br /><span>Designs</span></h1>
            <p className="Header__text">Discover the Channel that let's you create, resize your own designs. </p>
            <Button variant="warning" className="Header__button"> <Link to="/login">Start Now</Link></Button>
          </Col>
          <Col lg={6} md={12}>
            <img className="Header__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXurSqHNC0uXNWsL97M07nmldcWxhIm27eww&usqp=CAU" />
          </Col>
      </Row>
        
      </div>
      <Footer />
      </>
  )
}

export default Header;