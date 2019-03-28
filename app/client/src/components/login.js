import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from "axios";
import '../styles/login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      accountCreationStatus: "",
    };
  }

  handleAccountCreation = e => {
    this.setState({ accountCreationStatus: e });
  };

  createUser = e => {
    axios({
      method: "POST",
      url: '/createUser',
      data: {
        user: this.state.email,
        password: this.state.password
      }
    })
      .then(res => {
        console.log(res);
        this.handleAccountCreation(res.data.status);
        console.log(this.state.accountCreationStatus);
      })
      .catch(e => {
        console.log(e);
      });
    this.setState({
      email: "",
      password: ""
    });
  };

  getAdmins = e => 
  {
    axios.get("/v1/admins").then(function(res){
      console.log(res.data);
    })
  };


  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      
      <div className="Login">
          <Button
            block
            bsSize="large"
            onClick={this.getAdmins}
          >
            GetAdmins
          </Button>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="email" bsSize="large">
            <Form.Control
              autoFocus
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="password" bsSize="large">
            <Form.Control
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </Form.Group>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            onClick={this.createUser}
          >
            CreateUser
          </Button>
          
        </Form>
      </div>
    );
  }
}

export default Login;