import React, { Component } from "react";
import "./App.css";
import Login from "./Login";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";

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
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        // Render the newly fetched data inside of this.state.data
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

export default App;
