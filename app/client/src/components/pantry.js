import React, { Component } from "react";
import { Paper } from "@material-ui/core";
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import axios from "axios";



const styles = theme => ({
	appBar: {
		position: 'relative',
	},
	icon: {
		marginRight: theme.spacing.unit * 2,
	},
	heroUnit: {
		backgroundColor: theme.palette.background.paper,
	},
	heroContent: {
		maxWidth: 600,
		margin: '0 auto',
		padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
	},
	heroButtons: {
		marginTop: theme.spacing.unit * 4,
		marginBottom: theme.spacing.unit * 4,
	},
	layout: {
		width: 'auto',
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
			width: 1100,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	cardGrid: {
		padding: `${theme.spacing.unit * 8}px 0`,
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing.unit * 6,
	},
	button: {
		paddingLeft: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
	}
});

//const cards = [1, 2, 3, 4, 5, 6, 7, 8];

class Pantry extends Component {
	
    	
	constructor(props) {
		super(props);
		this.state = {
			pantryItems: [],
		};
	};

	handlePageChange = (page) => {
		this.props.handlePageChange(page);
	};

	handlePantryItems = event => {
		// Use '/api/v1/getIngredient' when is production.
		// Use '/v1/getIngredient' when on local machine.
		//example getIngredient?userID=1012
		axios.get('/v1/getIngredient',{
			params: {
				userID: this.props.user.userID
			}
		})
		.then((response) => {
			if(response.data.length === 0) {
				console.log("Pantry could not be retreived.");
				console.log(response);
			}
			else 
			{
				console.log(response);
				this.setState({ pantryItems: response.data });
				console.log(this.state.pantryItems);
			}
		})
		.catch((error) => {
			console.log(error);
		});
	};
	
	componentWillMount() {
		this.handlePantryItems();
	}

	render() {
		const { classes } = this.props;
		const data = this.state.pantryItems;
		return (
			<div>
				<div>
					<Typography style={styles.pageTitle} variant="headline">Pantry</Typography>
				</div>
				<div className={classNames(classes.layout, classes.cardGrid)}>
								{/* End hero unit */}
								<Grid container spacing={40}>
									{data.map(pantryItem => (
										<Grid item key={pantryItem.pantryID} sm={6} md={4} lg={3}>
											<Card className={classes.card}>
												<CardMedia
													className={classes.cardMedia}
													image={pantryItem.url} // eslint-disable-line max-len
													title="Image title"
												/>
												<CardContent className={classes.cardContent}>
													<Typography gutterBottom variant="h5" component="h2">
														{pantryItem.ingredientName}
													</Typography>
													<Typography>
														{pantryItem.ingredientID}
													</Typography>
												</CardContent>
												<CardActions>
													<Button size="small" color="primary">
														Remove
													</Button>
												</CardActions>
											</Card>
										</Grid>
									))}
								</Grid>
							</div>
				<div>
					<Button variant="contained" className={classes.button}>
                    Add Ingredients
                    </Button>
				</div>
			</div>
		);
	}
}

Pantry.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Pantry);