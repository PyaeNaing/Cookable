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