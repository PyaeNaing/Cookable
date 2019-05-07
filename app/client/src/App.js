import React, { Component } from "react";
import axios from "axios";
import "./styles/App.css";
import MainPage from './pageLayouts/mainPage.js';

class App extends Component {

  // Need to add user info from Authorization request.
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: false,
      user: {
        userID: '',
        userName: '',
        emailAddress: '',
      }
    };
  }

  componentWillMount() {
    this.handleSessionAuthorization();
  }

  handleLogin = (status) => {
    this.setState({ loginStatus: status });
  }

  handleLogout = (status) => {
    this.setState({ loginStatus: status })
    localStorage.removeItem("token");
  }

  handleUser = (user) => {
    this.setState({ user: user });
  }

  handleSessionAuthorization = () => {
    
    const token = localStorage.token;

    const headers = {
      'Authorization': 'Bearer ' + token,
    };

    if(token) {
      axios.get('/v2/protected', {
            headers:  headers,
        })
        .then((response) => {
            console.log(response);
            this.setState({ loginStatus: true });
        })
        .catch((error) => {
            console.log(error);
        });
    }
  }

  render() {
    return (
      <div className="App">
        <MainPage 
          loginStatus={this.state.loginStatus}
          user={this.state.user}
          handleLogin={this.handleLogin}
          handleLogout={this.handleLogout} 
          handleUser={this.handleUser}
        />
      </div>
    );
  }
}

export default App;