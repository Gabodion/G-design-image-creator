import React, {useState, useEffect} from 'react';
import {Card, Button, Col, Row} from "react-bootstrap";
import DashNavigation from "../Navigation/DashNavigation";
import Footer from "../../Footer/Footer"
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {dataInfos} from "../../../actions/dataActions";





const Cards = () => {
    const dispatch = useDispatch();

    const dataList  = useSelector(state => state.dataList)

    const {loading, dataInfo, error} = dataList

    const date = new Date();
    

    
    useEffect( () => {
        dispatch(dataInfos())   
    }, [dispatch])


  return (
    <div>
    <DashNavigation />
    <Row className="Card__wrapper">
    {
        dataInfo?.map(data => {
            return  <Col lg={6} md={12} key={data.id}>
                    <Card className="Card__box">
                        <Card.Header as="h5" className="Card__header">
                            <p className='Card__header-text'>{data.category}</p>
                            <p className='Card__header-text'>{data.createdAt.substring(0, 10)}</p>
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