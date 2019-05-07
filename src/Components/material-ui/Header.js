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

class ButtonAppBar extends Component {
  
    goto = path => {
      this.props.history.push(path);
    };

  render() {
  const { classes } = this.props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" color="inherit" className={classes.grow}  onClick={() => this.goto("/")}>
            Park Ideas
          </Typography>
          <Button color="inherit" onClick={() => this.goto("/SignIn")}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

// export default (withStyles(styles)(ButtonAppBar));


export default (withRouter(withStyles(styles)(ButtonAppBar)));