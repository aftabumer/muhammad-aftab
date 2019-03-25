import React from "react";
import PropTypes from "prop-types";
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import purple from "@material-ui/core/colors/purple";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing.unit
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  }
});

const theme = createMuiTheme({
  palette: {
    primary: purple
  }
});

class CustomizedInputs extends React.Component {
  state = {
    name: "",
    title: "",
    description: "",
    arr: [],
  };

  handleOnChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
    
  }
  

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <TextField
            className={classes.margin}
            label="Name"
            name="name"
            value={this.state.name}
            onChange = {this.handleOnChange} 
            placeholder="Name"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            fullWidth
          />
        </MuiThemeProvider>

        <MuiThemeProvider theme={theme}>
          <TextField
            className={classes.margin}
            label="Title"
            name="title"
            value={this.state.title}
            onChange = {this.handleOnChange} 
            placeholder="Title"
            variant="outlined"
            id="mui-theme-provider-outlined-input"
            fullWidth
          />
        </MuiThemeProvider>

        <MuiThemeProvider theme={theme}>
          <TextField
            id="outlined-multiline-flexible"
            label="Description"
            name="description"
            value={this.state.description}
            onChange = {this.handleOnChange} 
            placeholder="Description"
            multiline
            rows="4"
            fullWidth
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedInputs);
