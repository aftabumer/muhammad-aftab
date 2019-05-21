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
    marginLeft: "20%",
    marginRight: "20%",
    padding: "5px 10px",
    maxWidth: "100%",
    color: "purple",


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
        {
          this.state.ideas && this.state.ideas.length && this.state.ideas.map(idea => {
            let idd = parseInt(localStorage.getItem('user_id'))
            if (idd !== idea.user_id) return
            return (
              <div>
                <Card className={classes.card}>
                  <h2 align="center">{idea.idea_title}</h2>
                  <CardContent>
                    <div className={classes.description}><p><font size="5" face="Arial" >{idea.description}</font></p></div>
                    <div className={classes.ideaby}><h4 align="right">Idea by : {idea.user_name}</h4></div>
                    <div>
                   <Button variant="contained" 
                      color="secondary"
                      className={classes.button}
                      onClick={this.handleOnDelete}>
                       Delete  
                    </Button>

                  <Button variant="contained"
                    color="primary"
                    className={classes.button}>
                    onClick={this.handleOnEdit}
                    edit
                  </Button></div>
                    
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

