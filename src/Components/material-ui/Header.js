import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from "./Modal";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import TextField from "@material-ui/core/TextField";
import purple from "@material-ui/core/colors/purple";

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ParkIdea from "./ParkIdea";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

import { withRouter } from 'react-router-dom';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    cursor: 'pointer'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
 
};



var userName = window.localStorage.getItem("f_name")


class ButtonAppBar extends Component {

  state = {
    isSignIn: false
  }

  componentWillMount() {
    
    setInterval(() => {

      var isSignIn = JSON.parse(window.localStorage.getItem("isSignIn"))
      var userName = window.localStorage.getItem("f_name")

      this.setState({
        isSignIn,
        userName: userName
      });

    }, 1000)
     
  }




  goto = path => {
    this.props.history.push(path);
  };

  handleOnLogin = () => {
    //var showStatus

    this.goto("/SignIn")

  };

  handleOnlogout = () => {
    localStorage.clear()
    localStorage.setItem("isSignIn", false)

    this.goto("/Idea")
  }

  handleOnPostIdea = () => {
    this.goto("/ParkIdea")
  }

  handleOnMyIdeas = () => {
    this.goto("/MyIdeas")
  }

  parkBeforLogin=()=>{

    alert("you must be logged in to park an idea")
    this.goto("/SignIn")
  }


  render() {

    const { classes } = this.props;


    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" color="inherit" className={classes.grow} onClick={() => this.goto("/")}>
              Park Ideas
          </Typography>

    
            {
              !this.state.isSignIn ?
              <div>
                <Button color="inherit" onClick={this.handleOnLogin}>Login</Button>
                <Button color="inherit" onClick={this.parkBeforLogin}>Park idea</Button></div>
                :
                <div>
                  <h4 color="inherit"><b>welcome {this.state.userName}</b></h4>
                  <Button color="inherit" onClick={this.handleOnlogout}>Logout</Button>
                  <Button color="inherit" onClick={this.handleOnPostIdea}>Park Idea</Button>
                  <Button color="inherit" onClick={this.handleOnMyIdeas}>My Ideas</Button>
                </div>


            }
          </Toolbar>
        </AppBar>
      </div>

    );


  }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};



export default (withRouter(withStyles(styles)(ButtonAppBar)));