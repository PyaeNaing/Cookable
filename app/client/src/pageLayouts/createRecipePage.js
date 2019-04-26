import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const paper = {
	height: '100vh',
};

const container = {
	display: 'flex',
  flexWrap: 'wrap',
};

const pageTitle = {
	paddingTop: 10,
};

const textField = {
  marginLeft: 25,
  marginRight: 25,
  width: 200,
};

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

		return (
			<div>
				{isLoggedIn ? renderRecipeCreationPage : renderLoginError}
			</div>
		);
	}
}

export default CreateRecipePage;