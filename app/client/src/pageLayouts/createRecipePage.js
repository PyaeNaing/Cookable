import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import FolderIcon from '@material-ui/icons/Folder';
import MenuItem from '@material-ui/core/MenuItem';
import axios from "axios";

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
      description: "", 
      cookingTime: "", 
      calorieCount: "", 
      ingredients: "", 
      cuisine: "", 
      uploadImage: "", 
    };
  }; 
    createRecipe = e => {

    axios.request('/v2/user/myRecipes', {
      id: this.state.id,
        recipeTitle: this.state.id,
        description: this.state.id, 
        cookingTime: this.state.id, 
        calorieCount: this.state.id, 
        ingredients: this.state.id, 
        cuisine: this.state.id, 
        uploadImage: this.state.id, 

    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  getCreateRecipe = e => 
  {
    axios.get("/v2/user/myRecipes").then(function(res){
      console.log(res.data);
    })
  };
  
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
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
            <InputLabel htmlFor="description">Description</InputLabel>
            <Input name="description" type="description" id="description" autoComplete="current-password" 
                     value={this.state.description}
                     onChange={this.handleChange}
                     inputProps={{
                       name:'description',
                       id: 'description', 
                     }}
            />
          </FormControl>
		  <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="cookingTime">Cooking Time</InputLabel>
            <Input id="cookingTime" name="cookingTime" 
                     value={this.state.cookingTime}
                     onChange={this.handleChange}
                     inputProps={{
                     name: 'cookingTime',
                     id: 'cookingTime',
                       }}
             />
          </FormControl>
		  <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="calorieCount">Calorie Count</InputLabel>
            <Input id="calorieCount" name="calorieCount" 
                    value={this.state.calorieCount}
                    onChange={this.handleChange}
                    inputProps={{
                    name: 'calorieCount',
                    id: 'calorieCount',
                      }}
            />
          </FormControl>
		  <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="ingredients">Ingredients</InputLabel>
            <Input id="ingredient" name="ingredient" 
                          value={this.state.ingredient}
                          onChange={this.handleChange}
                          inputProps={{
                          name: 'ingredient',
                          id: 'ingredient',
                        }}/>
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
          <FormControl className={classes.formControl} required fullWidth>
          <InputLabel htmlFor="cuisine">Cuisine</InputLabel>
          <Select
            value={this.state.cuisine}
            onChange={this.handleChange}
            inputProps={{
              name: 'cuisine',
              id: 'cuisine',
            }}
          >
            <MenuItem value="">
            <em>Meal Type</em>
            </MenuItem>
            <MenuItem value={10}>Snack</MenuItem>
            <MenuItem value={20}>Breakfast</MenuItem>
            <MenuItem value={30}>Brunch</MenuItem>
            <MenuItem value={40}>Lunch</MenuItem>
            <MenuItem value={50}>Dinner</MenuItem>
          </Select>
        </FormControl>
		  <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="uploadImage">Upload Image</InputLabel>
            <Input id="uploadImage" name="uploadImage"
                        value={this.state.uploadImage}
                        onChange={this.handleChange}
                        inputProps={{
                        name: 'uploadImage',
                        id: 'uploadImage',
                            }}
            />
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
            onClick={this.createRecipe}
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