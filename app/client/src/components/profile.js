import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { MenuItem } from "@material-ui/core";

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

class profileSettings extends Component {
    constructor(props) {
		super(props);
		this.state = {
			fName: "",
			lName: "",
			gender: "",
			email: "",
			username: "",
			dob: "",
		};
    };

    // Just a handleChange needed as per controls
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
					<Typography style={pageTitle} variant="headline">Profile</Typography>
					<form style={container}>
						<TextField
							style={textField}
							id="fName"
							label="First Name"
							value={this.state.fName}
							onChange={this.handleChange}
							margin="normal"
							variant="outlined"
						/>
						<TextField
							style={textField}
							id="lName"
							label="Last Name"
							value={this.state.lName}
							onChange={this.handleChange}
							margin="normal"
							variant="outlined"
						/>
                        <MenuItem>
                            <MenuItem>Male</MenuItem>
                            <MenuItem>Female</MenuItem> 
                            <MenuItem>Don't want to specify</MenuItem>
                        </MenuItem>
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


		return (
			<div>
				{profileSettings}
			</div>
		);
	}
}

export default profileSettings;