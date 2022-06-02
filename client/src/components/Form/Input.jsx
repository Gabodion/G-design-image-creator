import React from 'react';
import {Form} from "react-bootstrap";

const Input = (props) => {
  return (
    <div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type={props.type} placeholder={props.placeholder} />
        </Form.Group>
    </div>
  )
}

export default Input;