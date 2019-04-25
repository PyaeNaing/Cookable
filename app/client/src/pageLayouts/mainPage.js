import React, { Component } from "react";
import MainNavBar from '../components/mainNavBar.js';
import LoginPage from './loginPage.js';
import RegisterPage from './registerPage.js';
import RecommendationsPage from './recommendationsPage.js';
import ProfilePage from './profilePage.js';
import RecipeDisplayPage from './recipeDisplayPage.js';
import CreateRecipePage from './createRecipePage.js';

class MainPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loginStatus: false,
			// Change currentPage for testing only, change it back to 'recommendationsPage'
			currentPage: 'recommendationsPage',
			loginRegisterSubpage: 'login',
			searchResult: [],
		};
	}

	handleLogin = (status) => {
		this.setState({ loginStatus: status });
	}

	handleLogout = (status) => {
		this.setState({ loginStatus: status });
	}

	handlePageChange = (page) => {
		this.setState({ currentPage: page });
	}

	render() {

		// Must lift up loginRegisterSubpage state from MainNavBar
		const renderLoginPage = (
			<LoginPage handleLoginStatus={this.handleLogin}/>
		);

		const renderRegisterPage = (
			<RegisterPage />
		);

		const renderRecommendationsPage = (
			<RecommendationsPage />
		);

		// Must lift up profileSubpage state from MainNavBar
		const renderProfilePage = (
			<ProfilePage />
		);

		// Must lift up searchResult state from MainNavBar
		const renderRecipeDisplayPage = (
			<RecipeDisplayPage searchResult={this.state.searchResult} />
		);

		const renderCreateRecipePage = (
			// Change true to this.state.loginStatus
			<CreateRecipePage isLoggedIn={true} />
		);

		return (
			<div>
				<MainNavBar
					isLoggedIn={this.state.loginStatus} 
					handleLogout={this.handleLogout}
					handlePageChange={this.handlePageChange}
				/>
				{(this.state.currentPage === 'recommendationsPage') ? renderRecommendationsPage : undefined }
				{(this.state.currentPage === 'loginPage') ? renderLoginPage : undefined }
				{(this.state.currentPage === 'registerPage') ? renderRegisterPage : undefined }
				{(this.state.currentPage === 'profilePage') ? renderProfilePage : undefined }
				{(this.state.currentPage === 'recipeDisplayPage') ? renderRecipeDisplayPage : undefined }
				{(this.state.currentPage === 'createRecipePage') ? renderCreateRecipePage : undefined }
			</div>
		);
	}
}

export default MainPage;