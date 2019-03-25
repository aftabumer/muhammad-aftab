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
    maxWidth: 'auto',
    // backgroundColor: theme.palette.background.paper
    backgroundColor: "pink",
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
    name: "",
    title: "",
    description: "",
    data: []
  };

  // handleOnChange = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // };

  // handleOnClick = () => {
  //   let { name, title, description, data } = this.state; //object destructing
  //   let obj = { name, title, description };
  //   data.push(obj);
  //   this.setState({
  //     data
  //   });
  // };

  // handleOnDelete = index => {
  //   let data = this.state.data;
  //   data.splice(index, 1);
  //   this.setState({
  //     data: data
  //   });
  // };
  // fEdit = i => {
  //   let { name, title, description, data } = this.state; //object destructing

  //   let obj = { name, title, description };
  //   data.filter(obj)
  //   this.setState({
  //     data: data[i]
  //   });
  // };

    constructor(props) {
      super(props)
         this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
    }
    
    
    authWithEmailPassword(event) {
      event.preventDefault()
      console.log("authed with Email")
      console.table([{
        email: this.emailInput.value,
        password: this.passwordInput.value
      }])
    }



  render() {
    const { classes } = this.props;
    console.log(this.state.data)

    return (
      <div>
        <Card className={classes.card} onSubmit={(event) => { this.authWithEmailPassword(event)}} ref={(Card) => {this.loginForm = Card}}>
          <h2>Sign In</h2>

          <CardContent>
            {/* <Form /> */}
            <div className={classes.root}>
              <MuiThemeProvider theme={theme}>
                <TextField
                  className={classes.margin}
                  label="Email"
                  name="name"
                  ref={(TextField) => {this.emailInput = TextField}}
                  onChange={this.handleOnChange}
                  placeholder="Email"
                  variant="outlined"
                  id="mui-theme-provider-outlined-input"
                  fullWidth
                  type='email'
                />
              </MuiThemeProvider>

              <MuiThemeProvider theme={theme}>
                <TextField
                  className={classes.margin}
                  label="Password"
                  name="title"
                  ref={(TextField) => {this.passwordInput = TextField}}
                  onChange={this.handleOnChange}
                  placeholder="Password"
                  variant="outlined"
                  id="mui-theme-provider-outlined-input"
                  fullWidth
                  type='password'
                />
              </MuiThemeProvider>
            </div>
          </CardContent>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={this.handleOnClick}         >
            Sign In
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Sign Up
          </Button>
        </Card>
        {/* {this.state.data.map(item => {
          return (
            <div>
              <List className={classes.list} container justify="center"> 
                <ListItem alignItems="flex-center">
                  <ListItemAvatar>
                    <Grid alignItems="center">
                      <Avatar
                        alt="Remy Sharp"
                        src="\material-ui\img\idea.jpg"
                        className={classes.avatar}
                      />
                    </Grid>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          className={classes.inline}
                          color="textPrimary"
                        >
                          {item.title}
                        </Typography>
                        <br />
                        {item.description}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={this.handleOnClick}
                  size="small"
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  size="small"
                  onClick={this.handleOnDelete}
                >
                  Delete
                </Button>
              </List>
            </div>
          );
        })}*/}
      </div> 
    );
  }
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);
