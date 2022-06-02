import React from 'react'
import {Card, Button, Col, Row} from "react-bootstrap";
import DashNavigation from "../Navigation/DashNavigation";
import Footer from "../../Footer/Footer"
import "./Card.css";


const Cards = () => {
  return (
    <div>
    <DashNavigation />
    <Row className="Card__wrapper">
        <Col lg={6} md={12}>
        <Card className="Card__box">
            <Card.Header as="h5" className="Card__header">
                <p className='Card__header-text'>Tech</p>
                <p className='Card__header-text'>May 21 2022</p>
            </Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Img className="Card__img" src="https://www.goatsontheroad.com/wp-content/uploads/2020/10/how-to-make-money-as-a-graphic-designer-1100x618.jpg"/>
                <div className='Card__Footer'>
                    <Button variant="primary">Edit</Button>
                    <Button variant="primary">Delete</Button>
                </div>
                
            </Card.Body>
        </Card>
        </Col>
        <Col lg={6} md={12}>
        <Card className="Card__box">
            <Card.Header as="h5" className="Card__header">
                <p className='Card__header-text'>Tech</p>
                <p className='Card__header-text'>May 21 2022</p>
            </Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Img className="Card__img" src="https://www.goatsontheroad.com/wp-content/uploads/2020/10/how-to-make-money-as-a-graphic-designer-1100x618.jpg"/>
                <div className='Card__Footer'>
                    <Button variant="primary">Edit</Button>
                    <Button variant="primary">Delete</Button>
                </div>
                
            </Card.Body>
        </Card>
        </Col>
    </Row>
        <Footer />
    </div>
  )
}

export default Cards;