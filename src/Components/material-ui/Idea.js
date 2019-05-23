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
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
// import purple from '@material-ui/core/colors/purple';
// import Form from "./Form";

const styles = theme => ({
  card: {

    margin: "0 auto",
    marginTop: "7%",
    marginBottom: "7%",
    marginLeft: "20%",
    marginRight: "20%",
    padding: "5px 10px",
    maxWidth: "100%",
    color: "purple",


  },

    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },

  ideaby: {
    marginLeft: "60%",

  },

  description: {

    marginBottom: "10%",
    border: "solid",
    borderWidth: "1px"

  },

  button: {
    margin: theme.spacing.unit,
    marginTop: "2%",
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
 searchField: {
   
    marginTop: "1%",
    marginLeft:"55%",
    align:"left",
  
  },


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
    ideas: []
  };


  componentDidMount() {
    this.handleOnClick()
  }

  handleOnClick = () => {

    let { name, title, description, data } = this.state; //object destructing
    let obj = { name, title, description }



    var url = 'http://localhost:8000/getIdea'

    fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj), // body data type must match "Content-Type" header
    }).then((response) => {
      return response.json()
    }).then((response) => {

      if (response.status == 200) {
        console.log('data fethed', response.data);
       
        this.setState({ ideas: response.data })



      }

      else if (response.status == 204) {

        console.log('unable to fetch', response.data)
        alert("unable to fetch");

      }

      else { // when error

        console.log('login fail: ', response.error)
        alert(response.error.code)

      }
      // alert('Record has been insert successfully')
    }).catch((err) => {
      console.log('Error occured', err)
      alert(err)
    }) // parses response to JSON




  };

  render() {
    const { classes } = this.props;
    //console.log(this.state.data);

    return (
      <div>

        <div className={classes.searchField}>

        <TextField
                  className={classes.searchField}
                  label="Search"
                  name="name"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  placeholder="Idea Title"
                  variant="outlined"
                  id="mui-theme-provider-outlined-input"
                  type="email"
                  validators={['required', 'isEmail']}
                />
                 
      <Button color="primary" className={classes.button}>
        SEARCH IDEA
      </Button>
                </div>
        {
          this.state.ideas && this.state.ideas.length && this.state.ideas.map(idea => {
            return (
              <div>
                <Card className={classes.card}>
                  <h2 align="center">{idea.idea_title}</h2>
                  <CardContent>


                  <TextField
          id="outlined-multiline-flexible"
          multiline
          rowsMax="4"
          value={idea.description}
          onChange={this.handleChange}
          className={classes.textField}
          margin="normal"
          fullWidth
        />

                    {/* <div className={classes.description}><p><font size="5" face="Arial" >{idea.description}</font></p></div> */}
                    <div className={classes.ideaby}><h4 align="right">Idea by : {idea.user_name}</h4></div>
                  </CardContent>
                </Card>
              </div>
            )
          })
        }

      </div>
    );
  }
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MediaCard);

