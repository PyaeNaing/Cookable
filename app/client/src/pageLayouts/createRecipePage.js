import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import FolderIcon from '@material-ui/icons/Folder';
import MenuItem from '@material-ui/core/MenuItem';

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
  add: {
    marginTop: theme.spacing.unit * 3,  
    width: '45%',
    padding: theme.spacing.unit, 
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class CreateRecipePage extends Component{
  constructor(props){
    super(props); 
    this.state = {
      recipeTitle: "",
      serves: "", 
      cookingTime: "", 
      calorieCount: "", 
      ingredients: "", 
      cuisine: "", 
      uploadImage: "", 
    };
  }; 
  render (){
    const {classes} = this.props; 
    return (
      <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FolderIcon/>
        </Avatar>
        <Typography component="h1" variant="h5">
         Add A New Recipe
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
           <div> <Button
            as = "input"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.add}
          >
            Add 
          </Button>

		    <Button
            as = "input"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.add}
          >
            Remove
          </Button></div>
          </FormControl>
		  <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="cuisine">Cuisine</InputLabel>
            <Input id="cuisine" name="cuisine" />
           <div>
           <Select
            value={this.state.age}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
          >
            <MenuItem value="">
              <em>Select Meal-Type</em>
            </MenuItem>
            <MenuItem value={10}>Breakfast</MenuItem>
            <MenuItem value={20}>Brunch</MenuItem>
            <MenuItem value={30}>Lunch</MenuItem>
            <MenuItem value={30}>Dinner</MenuItem>
          </Select>
            </div>
          </FormControl>		  
		  <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="uploadImage">Upload Image</InputLabel>
            <Input id="uploadImage" name="uploadImage" />
          </FormControl>
      <Button
            as = "input"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit 
          </Button>
		  <Button
            as = "input"
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
  };
}

CreateRecipePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateRecipePage);