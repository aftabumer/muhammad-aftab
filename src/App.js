import React, { Component } from "react";
import ParkIdea from "./Components/material-ui/ParkIdea";
import SignIn from "./Components/material-ui/SignIn";
import SignUp from "./Components/material-ui/SignUp";
import Header from "./Components/material-ui/Header";
import Model from "./Components/material-ui/Model";



// using ES6 modules
import { BrowserRouter, Route } from "react-router-dom";
// // using CommonJS modules
// var Router = require("react-router").Router;
// var Route = require("react-router").Route;
// var Switch = require("react-router").Switch;
 
// // using CommonJS modules
// const BrowserRouter = require("react-router-dom").BrowserRouter;
// const Route = require("react-router-dom").Route;
// const Link = require("react-router-dom").Link;

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       authenticated: false
    }
  }
  
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <Header authenticated = {this.state.authenticated}/>
      <Route exact path='/SignIn' component={SignIn} />
      <Route exact path='/SignUp' component={SignUp} />
      <Route exact path='/ParkIdea' component={ParkIdea} />

        {/* <SignIn />
        <SignUp /> */}    
        {/* <ParkIdea /> */}
        {/* <Header />   */}
        </BrowserRouter>

        {/* <Model /> */}
      </div>
    );
  }
}

export default App;
