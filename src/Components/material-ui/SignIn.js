import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import purple from "@material-ui/core/colors/purple";
import { withRouter } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
// import purple from '@material-ui/core/colors/purple';
// import Form from "./Form";

const styles = theme => ({
  card: {
    margin: "0 auto",
    marginTop: "7%",
    marginBottom: "7%",
    padding: "5px 10px",
    maxWidth: "50%",
    color: "purple"
  },

  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  root: {
    display: "flex",
    flexWrap: "wrap"
    // width: "100%",
    // maxWidth: 360,
    // // backgroundColor: theme.palette.background.paper
    // backgroundColor: 'pink'
  },
  list: {
    maxWidth: "auto",
    // backgroundColor: theme.palette.background.paper
    backgroundColor: "pink"
  },
  margin: {
    margin: theme.spacing.unit
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  inline: {
    display: "inline"
  },
  avatar: {
    margin: 10
  }
});
const theme = createMuiTheme({
  palette: {
    primary: purple
  }
});

class MediaCard extends Component {
  state = {
    email: "",
    password: "",
    data: []
  };

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };
  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };

  // handleOnClick = () => {
  //   let { email, password, data } = this.state; //object destructing
  //   let obj = { email, password };

  //   if (email !== "" && password !== "") {
  //     data.push(obj);
  //     this.setState({

  //       data,
  //       email: "",
  //       password: ""
  //     });
  //   } else {
  //     alert("plz fill the field");
  //   }
  // };

  goto = path => {
    this.props.history.push(path);
  };

  handleOnClick = e => {
    let { email, password, data } = this.state; //object destructing
    let obj = { email, password };

    if (email !== "" && password !== "") {
      data.push(obj);
      this.setState({
        data,
        email: "",
        password: ""
      });
    } else {
      alert("plz fill the field");
    }

    var url = "http://localhost:8000/signin";
    fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj) // body data type must match "Content-Type" header
    })
      .then(response => {
        return response.json();
      })
      .then(response => {
        if (response.status == 200) {
          console.log("login successful", response.data);
          const { user_id } = response.data;
          console.log(user_id);
          window.localStorage.setItem("user_id", user_id);

          const { f_name } = response.data;
          console.log(f_name);
          localStorage.setItem("f_name", f_name);

          alert("login successfull");
          this.goto('/SignIn')
          //	window.location.href="/v_dashboard.html";
        } else if (response.status == 204) {
          console.log("Email and password does not match", response.data);
          alert("incorrect email or password");
        } else {
          // when error
          console.log("login fail: ", response.error);
          alert(response.error.code);
        }
        // alert('Record has been insert successfully')
      })
      .catch(err => {
        console.log("Error occured", err);
        alert(err);
      }); // parses response to JSON

    e.preventDefault();
    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <h2>Sign In</h2>

          <CardContent>
            <div className={classes.root}>
              <MuiThemeProvider theme={theme}>
                <TextField
                  className={classes.margin}
                  label="Email"
                  name="name"
                  ref={TextField => {
                    this.emailInput = TextField;
                  }}
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  placeholder="Email"
                  variant="outlined"
                  id="mui-theme-provider-outlined-input"
                  fullWidth
                  type="email"
                />
              </MuiThemeProvider>

              <MuiThemeProvider theme={theme}>
                <TextField
                  className={classes.margin}
                  label="Password"
                  name="title"
                  ref={TextField => {
                    this.passwordInput = TextField;
                  }}
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  placeholder="Password"
                  variant="outlined"
                  id="mui-theme-provider-outlined-input"
                  fullWidth
                  type="password"
                />
              </MuiThemeProvider>
            </div>
          </CardContent>
          <Button
            type="reset"
            variant="contained"
            color="primary"
            className={classes.button}
            onChange={() => this.goto("/ParkIdea")}
            onClick={this.handleOnClick}
          >
            Sign In
          </Button>

          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={() => this.goto("/SignUp")}
          >
            Sign Up
          </Button>
        </Card>
      </div>
    );
  }
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(MediaCard));
