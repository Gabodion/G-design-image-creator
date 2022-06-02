import React from 'react'
import {Navbar, Form, Container, Nav, Button, FormControl, NavDropdown} from "react-bootstrap";
import Card from "../Card/Card";
import {Link} from "react-router-dom";
import "./DashNavigation.css"



const DashNavigation = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">G-Design</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    
                    <NavDropdown title="Designs" id="navbarScrollingDropdown" menuVariant="dark">
                    <NavDropdown.Item><Link to="/dashboard/create-new">Create New</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to="/dashboard/my-designs">My Designs</Link></NavDropdown.Item>
                    </NavDropdown>
                   
                </Nav>
                    <NavDropdown className="DashNav__user"  title="Gabriel" id="navbarScrollingDropdown" menuVariant="dark">
                    <NavDropdown.Item><Button variant="outline-success">LogOut</Button></NavDropdown.Item>
                    </NavDropdown>
                    
                
                </Navbar.Collapse>
            </Container>
        </Navbar>

    </div>
  )
}

export default DashNavigation