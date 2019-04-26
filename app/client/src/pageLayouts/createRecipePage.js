import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider } from "@material-ui/core";
import PropTypes from 'prop-types'; 

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
}

export default CreateRecipePage;