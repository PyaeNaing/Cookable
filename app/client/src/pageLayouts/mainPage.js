import React, { Component } from "react";
import MainNavBar from '../components/mainNavBar.js';

class MainPage extends Component {
	constructor(props) {
		super(props);
		this.handleLogin = this.handleLogin.bind(this);
		this.state = {
			loginStatus: false,
		};
	}

	handleLogin(status) {
		this.setState({ loginStatus: status, });
	}

	render() {
		const loginStatus = this.state.loginStatus;

		return (
			<div>
				<MainNavBar
					isLoggedIn={loginStatus} 
					handleLogin={this.handleLogin}
				/>
			</div>
		);
	}
}

export default MainPage;