import React from 'react'
import Input from "../../Form/Input"
import {Card} from "react-bootstrap";
import "./CreateCard.css";
import DashNavigation from "../Navigation/DashNavigation";
import Footer from "../../Footer/Footer"
import "./FormInput.css";

const CreateCard = () => {
  return (
      <>
      <DashNavigation />
    <div className="CreateCard__wrapper">
    <Card className="CreateCard__box">
        <Input label="Category" type="text" placeholder="Category"/>
        <Input label="Description" type="text" placeholder="Description"/>
        <Input label="Upload image" type="image" placeholder="upload a picture"/>
        <Button className="Form__button" type="submit" onClick={handleSubmit}>Sign Up</Button>
    </Card>
         
    </div>
    <Footer />
    </>
  )
}

export default CreateCard