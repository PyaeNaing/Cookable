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
		this.handleLogin = this.handleLogin.bind(this);
		this.handlePageChange = this.handlePageChange.bind(this);
		this.state = {
			loginStatus: false,
			//for testing only, change it back to recommendations
			currentPage: 'profilePage',
			loginRegisterSubpage: 'login',
			searchResult: [],
		};
	}

	handleLogin(status) {
		this.setState({ loginStatus: status, });
	}

	handlePageChange(page) {
		this.setState({ currentPage: page });
		// console.log(this.state.currentPage);
	}

	render() {
		const loginStatus = this.state.loginStatus;

		// Must lift up loginRegisterSubpage state from MainNavBar
		const renderLoginPage = (
			<LoginPage />
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
			<CreateRecipePage />
		);

		return (
			<div>
				<MainNavBar
					isLoggedIn={loginStatus} 
					handleLogin={this.handleLogin}
					handlePageChange={this.handlePageChange}
				/>
				{(this.state.currentPage === 'recommendations') ? renderRecommendationsPage : undefined }
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