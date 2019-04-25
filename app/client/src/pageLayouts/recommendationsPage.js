import React, { Component } from "react";
import axios from "axios";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import RecipeCarousel from '../components/recipeCarousel.js';

class RecommendationsPage extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			recommendations: [],
		};
	};

	handleRecommendations = event => {
	// Use '/api/v1/searchIngredients' when is production.
	// Use '/v1/searchIngredients' when on local machine.
		axios.get('/v1/getRecommendations')
		.then((response) => {
		  	if(response.data.length === 0) {
				console.log("Recommendations could not be retreived.");
				console.log(response);
		  	}
		  	else {
				console.log(response);
				this.setState({ recommendations: response.data.recommendations });
		  	}
		})
		.catch((error) => {
		  	console.log(error);
		});
	};

	render() {
		return (
			<div>
				<Paper square={true} elevation={1}>
					<Typography variant="headline">Recommendations</Typography>
					<RecipeCarousel recipes={this.state.recommendations}/>
				</Paper>
			</div>
		);
	}
}

export default RecommendationsPage;