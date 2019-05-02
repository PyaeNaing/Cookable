import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import CommonDrawer from '../components/commonDrawer.js';

const paddingStyleforResponsiveDrawer = {
	paddingTop: 100,
};

class ProfilePage extends Component {
	
	// IMPLEMENT CONSTRUCTOR IF NEEDED
	
	render() {
		const renderCommonDrawer = (
			<CommonDrawer />
		);


		return (
			<div>
			<div style={paddingStyleforResponsiveDrawer}>
				<br />
			</div>
			<div>
				{renderCommonDrawer}
			</div>
			</div>
		);
	}
}

export default ProfilePage;