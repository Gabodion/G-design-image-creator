import React from 'react'
import {Alert} from "react-bootstrap";

const errorMessage = ({ children}) => {
    return (
      <Alert variant="danger">
        <strong>{children}</strong>
    </Alert>
    );

}

export default errorMessage