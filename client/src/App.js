import React from 'react'
import Navigation from './containers/Navigation/Navigation';
import Header from './containers/Header/Header';
import Footer from "./components/Footer/Footer"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Form/Login"
import Register from "./components/Form/Register"
import DashNavigation from './components/Dashboard/Navigation/DashNavigation';
import "./App.css"
import Cards from "./components/Dashboard/Card/Card"
import CreateCard from "./components/Dashboard/CreateCard/CreateCard";




const App = () => {
  return (
    <Router>
      
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/dashboard/my-designs">
          <Cards />           
        </Route>
        <Route exact path="/dashboard/create-new">
          <CreateCard />     
        </Route>
        
      </Switch>
      
      
    </Router>
    
   
  )
}

export default App