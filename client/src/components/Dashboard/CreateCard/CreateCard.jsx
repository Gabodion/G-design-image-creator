import React, { useState } from 'react'
import Input from "../../Form/Input"
import {Card, Button} from "react-bootstrap";
import "./CreateCard.css";
import DashNavigation from "../Navigation/DashNavigation";
import Footer from "../../Footer/Footer"
import "../../Form/FormInput.css";
import { useDispatch, useSelector } from 'react-redux';
import { createDataInfos } from '../../../actions/dataActions';
import { useHistory } from 'react-router-dom';

const CreateCard = () => {

  const [newCard, setNewCard] = useState({
    name: "",
    img: "",
    description: ""
  })

  function handleChange(event){
    const {name, value} = event.target;
    setNewCard(preValue => {
      return {
        ...preValue,
        [name] : value
      }
    })
  }
  const dispatch =useDispatch()
  const history = useHistory()
  const cardCreate = useSelector((state) => state.cardCreate);
  const { loading, error, dataInfo } = cardCreate;

    const handleSubmit = async (event) => {
      event.preventDefault();
      dispatch(createDataInfos(newCard.category, newCard.img, newCard.description));
      if (!newCard.category || !newCard.img || !newCard.description) return;

      history.push("/dashboard/my-designs");
         
      }
  return (
      <>
      <DashNavigation /> 
        <div className="CreateCard__wrapper">
          <h1>Create a New Design</h1>
          <Card className="CreateCard__box">
              <Input label="Category" type="text" name="category" onChange={handleChange} value={newCard.category} placeholder="Category"/>
              <Input label="Description" type="text" name="description" onChange={handleChange}  value={newCard.description} placeholder="Description"/>
              <Input label="Upload image" type="file" name="img" onChange={handleChange} value={newCard.img} placeholder="upload a picture"/>
              <Button className="Form__button" type="submit" onClick={handleSubmit}>Save</Button>
          </Card>     
        </div>
    <Footer />
    </>
  )
}

export default CreateCard