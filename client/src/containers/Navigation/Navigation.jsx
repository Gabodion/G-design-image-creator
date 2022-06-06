import React from 'react';
import "./Navigation.css";
import {Menu} from '@mui/icons-material';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

const Navigation = (props) => {

  

 
  return (
      <nav>
          <a href='#' className='nav__logo'>G-Design</a>
          <Button variant="none" className="nav__button"><Link to="/login">Login</Link></Button>
      </nav>
  )
}

export default Navigation;