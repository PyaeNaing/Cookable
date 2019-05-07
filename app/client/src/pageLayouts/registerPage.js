import React, { Component } from "react";
import axios from "axios";
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

class RegisterPage extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			email: "",
			password: "",
			confirmPassword: "",
		};
	}

	handleCreateUser = event => {
		if (this.state.password === this.state.confirmPassword) {
      // Use '/api/v1/searchIngredients' when is production.
      // Use '/v1/searchIngredients' when on local machine.
			axios.post('/v1/createUser', {
	      		username: this.state.username,
	      		email: this.state.email,
	      		password: this.state.password,
	      		confirmPassword: this.state.confirmPassword,
		    })
		    .then((response) => {
		      	console.log(response);
		    })
		    .catch((error) => {
		      	console.log(error);
		    });
		}
		else {
			console.log("Your passwords do not match. Please re-enter your password.")
		}
	}
	
	handleChange = event => {
		this.setState({
      		[event.target.id]: event.target.value
    });
	}

	render() {
		const { classes } = this.props;

		return (
			<main className={classes.main}>
      			<CssBaseline />
      			<Paper className={classes.paper}>
        			<Avatar className={classes.avatar}>
          				<LockOutlinedIcon />
        			</Avatar>
        			<Typography component="h1" variant="h5">
          				Register
        			</Typography>
        			<form className={classes.form}>
          				<FormControl margin="normal" required fullWidth>
            				<InputLabel htmlFor="email">Email Address</InputLabel>
            				<Input id="email" name="email" autoComplete="email" onChange={this.handleChange} autoFocus />
          				</FormControl>
          				<FormControl margin="normal" required fullWidth>
            				<InputLabel htmlFor="username">Username</InputLabel>
            				<Input id="username" name="username" autoComplete="username" onChange={this.handleChange} />
          				</FormControl>
          				<FormControl margin="normal" required fullWidth>
            				<InputLabel htmlFor="password">Password</InputLabel>
            				<Input name="password" type="password" id="password" onChange={this.handleChange} autoComplete="current-password" />
          				</FormControl>
          				<FormControl margin="normal" required fullWidth>
            				<InputLabel htmlFor="password">Confirm Password</InputLabel>
            				<Input name="confirmPassword" type="password" id="confirmPassword" onChange={this.handleChange} autoComplete="current-password" />
          				</FormControl>
          				<FormControlLabel
            				control={<Checkbox value="terms" color="primary" />}
            				label="I accept the Terms of Service."
          				/>
          				{/*
          				 type="submit"
          				 add keyPress 'enter' functionality to Sign in button
          			 	*/}
          				<Button
            				fullWidth
            				variant="contained"
            				color="primary"
            				className={classes.submit}
            				onClick={this.handleCreateUser}
          				>
            				Create Account
          				</Button>
        			</form>
      			</Paper>
    		</main>
		);
	};
}

RegisterPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisterPage);