import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ParkIdea from "./ParkIdea";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class ButtonAppBar extends Component {

  handleOnClick = () => {
    return (
      this.props.authenticated
      ? <button>Login</button>
      :null
    )
    }
  
  render() {
  const { classes } = this.props;
  console.log(this.handleOnClick)
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" color="inherit" className={classes.grow}>
            Park Ideas
          </Typography>
          <Button color="inherit" onClick={this.handleOnClick}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
