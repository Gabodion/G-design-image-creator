import React from 'react'
import Input from "../../Form/Input"
import {Card} from "react-bootstrap";
import "./CreateCard.css";
import DashNavigation from "../Navigation/DashNavigation";
import Footer from "../../Footer/Footer"

const CreateCard = () => {
  return (
      <>
      <DashNavigation />
    <div className="CreateCard__wrapper">
    <Card className="CreateCard__box">
        <Input label="Category" type="text" placeholder="Category"/>
        <Input label="Description" type="text" placeholder="Description"/>
        <Input label="Username" type="text" placeholder="Username"/>
        
    </Card>
         
    </div>
    <Footer />
    </>
  )
}

export default CreateCard