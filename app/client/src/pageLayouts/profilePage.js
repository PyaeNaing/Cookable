import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import ClippedDrawer from '../components/commonDrawer.js';

const paddingStyleforResponsiveDrawer = {
	paddingTop: 100,
};

class ProfilePage extends Component {
	
	// IMPLEMENT CONSTRUCTOR IF NEEDED
	
	render() {
		const renderClippedDrawer = (
			<ClippedDrawer />
		);


		return (
			<div>
			<div style={paddingStyleforResponsiveDrawer}>
				<br />
			</div>
			<div>
				{renderClippedDrawer}
			</div>
			</div>
		);
	}
}

export default ProfilePage;