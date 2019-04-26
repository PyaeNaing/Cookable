import React, { Component } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

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
		height: 140,
	},
	cardContent: {
		flexGrow: 1,
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing.unit * 6,
	},
});

class RecommendationsPage extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			recommendations: [],
		};
	};

	handlePageChange = (page) => {
    this.props.handlePageChange(page);
  };

	handleRecommendations = event => {
	// Use '/api/v1/searchIngredients' when is production.
	// Use '/v1/searchIngredients' when on local machine.
		axios.get('/v1/recommendation')
		.then((response) => {
			if(response.data.length === 0) {
				console.log("Recommendations could not be retreived.");
				console.log(response);
			}
			else {
				console.log(response);
				this.setState({ recommendations: response.data });
				console.log(this.state.recommendations);
			}
		})
		.catch((error) => {
			console.log(error);
		});
	};

	componentWillMount() {
		this.handleRecommendations();
	};

	render() {
		const { classes } = this.props;
		const data = this.state.recommendations;

		return (
			<div>
				<React.Fragment>
						<CssBaseline />
						<main>
							{/* Hero unit */}
							<div className={classes.heroUnit}>
								<div className={classes.heroContent}>
									<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
										Welcome to Cookable!
									</Typography>
									<Typography variant="h6" align="center" color="textSecondary" paragraph>
										Here at Cookable our aim is to provide you with recipes. If you are new to
										Cookable, please feel free to create an account to gain access to member only
										features!
									</Typography>
									<div className={classes.heroButtons}>
										<Grid container spacing={16} justify="center">
											<Grid item>
												<Button variant="contained" color="primary" onClick={() => this.handlePageChange('loginPage')}>
													Login
												</Button>
											</Grid>
											<Grid item>
												<Button variant="outlined" color="primary" onClick={() => this.handlePageChange('registerPage')}>
													Create Account
												</Button>
											</Grid>
										</Grid>
									</div>
									<Typography variant="h6" align="center" color="textSecondary" paragraph>
										Here are some recommended recipes to get you started!
									</Typography>
								</div>
							</div>
							<div className={classNames(classes.layout, classes.cardGrid)}>
								{/* End hero unit */}
								<Grid container spacing={40}>
									{data.map(recipe => (
										<Grid item key={recipe.recipeID} sm={6} md={4} lg={3}>
											<Card className={classes.card}>
												<CardMedia
													className={classes.cardMedia}
													image={recipe.url} // eslint-disable-line max-len
													title="Image title"
												/>
												<CardContent className={classes.cardContent}>
													<Typography gutterBottom variant="h5" component="h2">
														{recipe.recipeName}
													</Typography>
													<Typography>
														{recipe.description}
													</Typography>
												</CardContent>
												<CardActions>
													<Button size="small" color="primary">
														View
													</Button>
													<Button size="small" color="primary">
														Edit
													</Button>
												</CardActions>
											</Card>
										</Grid>
									))}
								</Grid>
							</div>
						</main>
						{/* Footer */}
						<footer className={classes.footer}>
							<Typography variant="h6" align="center" gutterBottom>
								Cookable
							</Typography>
							<Typography variant="subtitle1" align="center" color="textSecondary" component="p">
								Copyright cookable.com
							</Typography>
						</footer>
						{/* End footer */}
					</React.Fragment>
			</div>
		);
	}
}

RecommendationsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecommendationsPage);