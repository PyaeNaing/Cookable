import React, { Component } from "react";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class Ingredient extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		id: this.props.id,
      		name: this.props.name,
      		type: this.props.type,
    	};
    }

    render() {
    	return (
    		<div>
    			<Paper p='60px' elevation={2} square={true}>
    				<Typography variant="h5" component="h3">
          				Thank you for using Cookable!
        			</Typography>
        			<Typography component="p">
          				The ingredient you searched was {this.props.name}, 
          				The ingredient ID in the MySQL database: {this.props.id}, 
          				The ingredient Type in the MySQL database: {this.props.type}
        			</Typography>
    			</Paper>
    		</div>
    	);
    }
}

export default Ingredient;