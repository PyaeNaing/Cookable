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
			// Change currentPage for testing only, change it back to 'recommendationsPage'
			currentPage: 'recommendationsPage',
			profileSubpage: 'profileSettings',
			loginRegisterSubpage: 'login',
			searchResult: [],
		};
	}

	handleLogin = (status) => {
		this.props.handleLogin(status);
	}

	handleLogout = (status) => {
		this.props.handleLogout(status);
	}

	handleUser = (user) => {
		this.props.handleUser(user);
	}

	handlePageChange = (page) => {
		this.setState({ currentPage: page });
	}

	handleProfileSubpageChange = (page) => {
		this.setState({ profileSubpage: page });
	}

	handleSearchResult = (result) => {
		this.setState({ searchResult: result });
	}

	render() {

		// Must lift up loginRegisterSubpage state from MainNavBar
		const renderLoginPage = (
			<LoginPage handleLoginStatus={this.handleLogin} handleUser={this.handleUser}/>
		);

		const renderRegisterPage = (
			<RegisterPage />
		);

		const renderRecommendationsPage = (
			<RecommendationsPage handlePageChange={this.handlePageChange}/>
		);

		// Must lift up profileSubpage state from MainNavBar
		const renderProfilePage = (
			<ProfilePage subpage={this.state.profileSubpage} loginStatus={this.props.loginStatus} user={this.props.user}/>
		);

		// Must lift up searchResult state from MainNavBar
		const renderRecipeDisplayPage = (
			<RecipeDisplayPage searchResult={this.state.searchResult}/>
		);

		const renderCreateRecipePage = (
			// Change true to this.state.loginStatus
			<CreateRecipePage loginStatus={this.props.loginStatus}/>
		);

		return (
			<div>
				<MainNavBar
					isLoggedIn={this.props.loginStatus} 
					username={this.props.user.username}
					handleLogout={this.handleLogout}
					handlePageChange={this.handlePageChange}
					handleProfileSubpageChange={this.handleProfileSubpageChange}
					handleSearch={this.handleSearchResult}
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