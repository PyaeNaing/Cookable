import React, { Component } from "react";
import "./styles/App.css";
import Login from "./components/login.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from './pageLayouts/mainPage.js';

class App extends Component {
  state = {
    user: null,
    password: null
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch("/express_backend");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/login" exact component={Login} />
        </Router>
        <MainPage />
      </div>
    );
  }
}

export default App;