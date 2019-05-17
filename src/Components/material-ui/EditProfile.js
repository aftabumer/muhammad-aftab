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
import { withRouter } from 'react-router-dom';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { userInfo } from "os";
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
  },
  textField: {
    flexBasis: 200
  }
});
const theme = createMuiTheme({
  palette: {
    primary: purple
  }
});

class MediaCard extends Component {
  state = {
    f_name: "",
    l_name: "",
    email: "",
    password: "",
    c_password: "",
    user_info: [],
    data: []
  };




  handleF_nameChange = event => {
    this.setState({
      f_name: event.target.value
    });
  };

  handleL_nameChange = event => {
    this.setState({
      l_name: event.target.value
    });
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

  handleC_passwordChange = event => {
    this.setState({
      c_password: event.target.value
    });
  };

  goto = path => {
    this.props.history.push(path);
  };


  componentDidMount() {
    this.sendIdToServer()
  }

  
  sendIdToServer = () => {

    
    var user_id = window.localStorage.getItem('user_id')

    let {f_name, l_name, email, password, c_password, data } = this.state;

    let obj = {
      user_id: user_id
    }
    data.push(obj);
    
    
     
    var url = 'http://localhost:8000/getProfile'
    console.log(obj);
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
          console.log("info fetched", response.data);
          
          this.setState({ user_info: response.data})

         debugger
          //   window.location.href="/index.html";
        } else {
          // when error
          console.log("failed to fecth info: ", response.error);
        }
        // alert('Record has been insert successfully')
      })
      .catch(err => {
        console.log("Error occured in insertion", err);
        // alert('Error in insertion')
      }); // parses response to JSON


  }


  handleOnClick = (e) => {

    var user_id = window.localStorage.getItem('user_id')

    let {f_name, l_name, email, password, c_password, data } = this.state; //object destructing
    let obj = { user_id,f_name, l_name, email, password, c_password };
    data.push(obj);
    this.setState({ data });

    if (f_name == "" || l_name == "" || email == "" || password == "" || c_password == "") {
      alert("please fill all the fields");


    }
    else if (this.state.password != this.state.c_password) {
      alert("Passwords don't match");
    }

    else {

      data.push(obj);
      this.setState({
        data,
        email: "",
        password: ""
      });

      var url = 'http://localhost:8000/updateProfile'
      console.log(obj);
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
            console.log("record has been insert succuss", response.data);
            alert("you have successfuly eidted your profile");
            this.goto('/SignIn')
            //   window.location.href="/index.html";
          } else {
            // when error
            console.log("faile to update profile: ", response.error);

            if (response.error.code == "ER_DUP_ENTRY") {
              alert("This email id is alredy resgisterd");
            }
          }
          // alert('Record has been insert successfully')
        })
        .catch(err => {
          console.log("Error occured in insertion", err);
          // alert('Error in insertion')
        }); // parses response to JSON

    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <h2>Edit Profile</h2>

          <CardContent>
            {/* <Form /> */}
            <div className={classes.root}>
              <MuiThemeProvider theme={theme}>
                <TextField
                  className={classes.margin}
                  label=""
                  name="name"
                  value={this.state.f_name}
                  onChange={this.handleF_nameChange}
                  placeholder="First Name"
                  variant="outlined"
                  id="mui-theme-provider-outlined-input"
                  fullWidth
                  type="First Name"
                />
              </MuiThemeProvider>{" "}
              <MuiThemeProvider theme={theme}>
                <TextField
                  className={classes.margin}
                  label=""
                  name="name"
                  value={this.state.user_info.l_name}
                  onChange={this.handleL_nameChange}
                  placeholder="Last Name"
                  variant="outlined"
                  id="mui-theme-provider-outlined-input"
                  fullWidth
                  type="Last Name"
                />
              </MuiThemeProvider>

              <MuiThemeProvider theme={theme}>

                <TextField
                  className={classes.margin}
                  label=""
                  name="name"
                  value={this.state.user_info.email}
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
                  name="name"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  placeholder="Password"
                  variant="outlined"
                  id="mui-theme-provider-outlined-input"
                  fullWidth
                  type="password"
                />
              </MuiThemeProvider>
              <MuiThemeProvider theme={theme}>
                <TextField
                  className={classes.margin}
                  label="Confirm Password"
                  name="name"
                  value={this.state.c_password}
                  onChange={this.handleC_passwordChange}
                  placeholder="Confirm Password"
                  variant="outlined"
                  id="mui-theme-provider-outlined-input"
                  fullWidth
                  type="password"
                />
              </MuiThemeProvider>
            </div>
          </CardContent>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.handleOnClick}
          >
            Done
          </Button>
        </Card>
        }
      </div>
    );
  }
}


MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default (withRouter(withStyles(styles)(MediaCard)));
