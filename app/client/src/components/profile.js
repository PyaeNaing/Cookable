import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = {
  card: {
    minWidth: 275,
    textAlign: 'center',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 26,
  },
  pos: {
    marginBottom: 12,
  },
};

class Profile extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.name,
			role: this.props.role,
			isLoading: false
		};
	}

	componentDidMount() {
    	this.setState({ isLoading: true });
  	}

  	componentWillUnmount() {
    	this.setState({ isLoading: false });
  	}
	
	render() {
		const {isLoading} = this.state;

		if(isLoading) {
			return (
				<paper square={false} elevation={10}>
					<Card style={styles.card}>
						<CircularProgress />
					</Card>
				</paper>
			)
		}

		return (
			<div>
				<Paper square={false} elevation={10}>
					<Card style={styles.card}>
						<h style={styles.title}>
							{this.props.name}
						</h>
						<CardContent>
							My name is {this.props.name + ' '} 
						    and my role on Team 5 is {this.props.role}!
						</CardContent>
					</Card>
				</Paper>
			</div>
		);
	}
}

export default Profile;