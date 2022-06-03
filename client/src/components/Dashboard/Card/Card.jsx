import React, {useState, useEffect} from 'react';
import {Card, Button, Col, Row} from "react-bootstrap";
import DashNavigation from "../Navigation/DashNavigation";
import Footer from "../../Footer/Footer"
import "./Card.css";

import axios from "axios";





const Cards = () => {

    const [details, setDetails] = useState([])

    const fetchDetails = async() => {
        const {data} = await axios.get('/api/details')
        setDetails(data)
    }
    
    useEffect( () => {
        fetchDetails()   
    }, [])


  return (
    <div>
    <DashNavigation />
    <Row className="Card__wrapper">
    {
        details.map(data => {
            return  <Col lg={6} md={12} key={data.id}>
                    <Card className="Card__box">
                        <Card.Header as="h5" className="Card__header">
                            <p className='Card__header-text'>{data.category}</p>
                            <p className='Card__header-text'>{data.date}</p>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{data.description}</Card.Title>
                            <Card.Img className="Card__img" src={data.img}/>
                            <div className='Card__Footer'>
                                <Button variant="primary">Edit</Button>
                                <Button variant="primary">Delete</Button>
                            </div>
                            
                        </Card.Body>
                    </Card>
                    </Col>
            })
    }
       
    </Row>
        <Footer />
    </div>
  )
}

export default Cards;