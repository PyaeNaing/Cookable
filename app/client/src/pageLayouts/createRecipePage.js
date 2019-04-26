/*import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider } from "@material-ui/core";
import PropTypes from 'prop-types'; 
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const paper = {
	height: '100vh',
};

const container = {
	display: 'flex',
  flexWrap: 'wrap',
  maxWidth: 300, 
};

const pageTitle = {
	paddingTop: 10,
};

const textField = {
  marginLeft: 25,
  marginRight: 25,
  width: 200,
};

function TextButtons(props){
	const {classes} = props; 
}
class CreateRecipePage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			recipeTitle: "",
			serves: "",
			cookingTime: "",
			calorieCount: "",
			ingredients: [],
			cuisine: "",
			recipeDirections: "",
			uploadImage:"", 
			add: "", 
			cancel:"",
		};
	};

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	};

	render() {

		const isLoggedIn = this.props.isLoggedIn;

		const renderRecipeCreationPage = (
			<div>
				<Paper style={paper} square={true}>
					<Typography style={pageTitle} variant="headline">Add a new recipe</Typography>
					<form style={container}>
						<TextField
							style={textField}
							id="recipeTitle"
							label="Recipe Title"
							value={this.state.recipeTitle}
							onChange={this.handleChange}
							margin="normal"
							variant="outlined"
						/>
						<TextField
							style={textField}
							id="serves"
							label="Serves"
							value={this.state.serves}
							onChange={this.handleChange}
							margin="normal"
							variant="outlined"
						/>
						<TextField
							style={textField}
							id="cookingTime"
							label="Cooking Time"
							value={this.state.cookingTime}
							onChange={this.handleChange}
							margin="normal"
							variant="outlined"
						/>
						<TextField
							style={textField}
							id="calorieCount"
							label="Calorie Count"
							value={this.state.calorieCount}
							onChange={this.handleChange}
							margin="normal"
							variant="outlined"
						/>
						<TextField
							style={textField}
							id="ingredients"
							label="Ingredients"
							value={this.state.ingredients}
							onChange={this.handleChange}
							margin="normal"
							variant="outlined"
						/>
						<TextField
							style={textField}
							id="cuisine"
							label="Cuisine"
							value={this.state.cuisine}
							onChange={this.handleChange}
							margin="normal"
							variant="outlined"
						/>
						<TextField
							style={textField}
							id="recipeDirections"
							label="Recipe Directions"
							value={this.state.recipeDirections}
							onChange={this.handleChange}
							margin="normal"
							variant="outlined"
						/>
						<TextField
							style={textField}
							id="uploadImage"
							label="Upload Image"
							value={this.state.uploadImage}
							onChange={this.handleChange}
							margin="normal"
							variant="outlined"
						/>
						<Button color = "primary" className = {this.state.Button}>Add</Button>
						<Button color= "primary" className = {this.state.Button}>Cancel</Button>
					</form>
				</Paper>
			</div>
		);

		const renderLoginError = (
			<div>
				<Paper square={true}>
					<Typography>You must be logged in to access this feature.</Typography>
				</Paper>
			</div>
		);
			TextButtons.propTypes = { clases: PropTypes.object.isRequired}
		return (
			<div>
				{isLoggedIn ? renderRecipeCreationPage : renderLoginError}
			</div>
		);
	}
}*/
import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import FolderIcon from '@material-ui/icons/Folder';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

function CreateRecipePage(props) {
  const { classes } = props;

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FolderIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
          Add New Recipe
        </Typography>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="recipe">Recipe Title</InputLabel>
            <Input id="recipeTitle" name="recipeTitle"  autoFocus />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="serves">Serves</InputLabel>
            <Input name="serves" type="serves" id="serves" autoComplete="current-password" />
          </FormControl>
		  <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="cookingTime">Cooking Time</InputLabel>
            <Input id="cookingTime" name="cookingTime"  />
          </FormControl>
		  <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="calorieCount">Calorie Count</InputLabel>
            <Input id="calorieCount" name="calorieCount"  />
          </FormControl>
		  <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="ingredients">Ingredients</InputLabel>
            <Input id="ingredient" name="ingredient" />
          </FormControl>
		  <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="cuisine">Cuisine</InputLabel>
            <Input id="cuisine" name="cuisine" />
          </FormControl>		  
		  <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="uploadImage">Upload Image</InputLabel>
            <Input id="uploadImage" name="uploadImage" />
          </FormControl>
          {/*<FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
		  />*/}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add 
          </Button>
		  <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
			Cancel
          </Button>
        </form>
      </Paper>
    </main>
  );
}

CreateRecipePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateRecipePage);