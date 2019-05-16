import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import blue from '@material-ui/core/colors/blue';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import DialogContent from '@material-ui/core/DialogContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

const styles = theme => ({
	card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  }
});

class Recipe extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			expanded: false,
		};
	};

	handleClose = () => {
    this.props.onClose(this.props.selectedValue);
    this.setState({ expanded: false });
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };
	
	render() {
    const { classes, onClose, selectedValue, ...other } = this.props;
    
    return (
      <Dialog scroll="paper" onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogContent>
           <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              action={
                <IconButton>
                  <FavoriteIcon />
                </IconButton>
              }
              title={selectedValue.recipeName}
            />
            <CardMedia
              className={classes.media}
              image={((selectedValue.recipeImages && selectedValue.recipeImages.length > 0) ? selectedValue.recipeImages[0].recipeImageDir : "No Image")}
              title={selectedValue.recipeName}
            />
            <CardContent>
              <Typography component="p">
                {selectedValue.description}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography paragraph>Ingredients:</Typography>
              {(selectedValue.ingredientsListFulls && selectedValue.ingredientsListFulls.length > 0) ?
                (<ul>
                  {selectedValue.ingredientsListFulls.map(ingredient => (
                    <li key={ingredient.ingredientsListFullID}>
                      <Typography component="p">
                        {ingredient.ingredientsFull}
                      </Typography>
                    </li>
                  ))}
                </ul>) :
                undefined
              }
            </CardContent>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              {(selectedValue.instructions && selectedValue.instructions.length > 0) ?
                (<ol>
                  {selectedValue.instructions.map(step => (
                    <li key={step.instructionKeyID}>
                      <Typography component="p">
                        {step.instruction}
                      </Typography>
                    </li>
                  ))}
                </ol>) :
                undefined
              }
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    );
  }
}

Recipe.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func,
  selectedValue: PropTypes.object,
};

export default withStyles(styles)(Recipe);