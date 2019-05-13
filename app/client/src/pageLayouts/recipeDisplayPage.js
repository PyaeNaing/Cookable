import React, { Component } from "react";
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
});

class RecipeDisplayPage extends Component {
	
	// IMPLEMENT CONSTRUCTOR IF NEEDED

	render() {
		const { classes } = this.props;
		const data = this.props.searchResult;

		return (
			<div>
				<React.Fragment>
						<CssBaseline />
						<main>
							{/* Hero unit */}
							<div className={classes.heroUnit}>
								<div className={classes.heroContent}>
									<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
										Recipe Results
									</Typography>
									<Typography variant="h6" align="center" color="textSecondary" paragraph>
										Here are the search results for the recipe name or ingredient!
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
													image={recipe.url}
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
								Footer
							</Typography>
							<Typography variant="subtitle1" align="center" color="textSecondary" component="p">
								Something here to give the footer a purpose!
							</Typography>
						</footer>
						{/* End footer */}
					</React.Fragment>
			</div>
		);
	}
}

RecipeDisplayPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeDisplayPage);