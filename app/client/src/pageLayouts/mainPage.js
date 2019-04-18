import React, { Component } from "react";
import MainNavBar from '../components/mainNavBar.js';
import LoginRegisterPage from './loginRegisterPage.js';
import RecommendationsPage from './recommendationsPage.js';
import ProfilePage from './profilePage.js';
import RecipeDisplayPage from './recipeDisplayPage.js';
import CreateRecipePage from './createRecipePage.js';

class MainPage extends Component {
	constructor(props) {
		super(props);
		this.handleLogin = this.handleLogin.bind(this);
		this.state = {
			loginStatus: false,
			currentPage: 'recommendations',
			profileSubpage: 'profile',
			loginRegisterSubpage: 'login',
			searchResult: [],
		};
	}

	handleLogin(status) {
		this.setState({ loginStatus: status, });
	}

	render() {
		const loginStatus = this.state.loginStatus;

		// Must lift up loginRegisterSubpage state from MainNavBar
		const renderLoginRegisterPage = (
			<LoginRegisterPage subpage={this.state.loginRegisterSubpage}  />
		);

		const renderRecommendationsPage = (
			<RecommendationsPage />
		);

		// Must lift up profileSubpage state from MainNavBar
		const renderProfilePage = (
			<ProfilePage subpage={this.state.profileSubpage} />
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
				{(this.state.currentPage === 'loginRegisterPage') ? renderLoginRegisterPage : undefined }
				{(this.state.currentPage === 'profile') ? renderProfilePage : undefined }
				{(this.state.currentPage === 'recipeDisplayPage') ? renderRecipeDisplayPage : undefined }
				{(this.state.currentPage === 'createRecipePage') ? renderCreateRecipePage : undefined }
			</div>
		);
	}
}

export default MainPage;