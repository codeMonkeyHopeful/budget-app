import React, { Component } from "react";
import axios from "axios";

// import NavBar from './components/NavBar.jsx';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      loggedIn: false,
      email: "",
      password: ""
    };
  }

  setEmail(email) {
    this.setState({ email });
  }
  setPassword(password) {
    this.setState({ password });
  }

  getUser(email, password) {
    axios
      .post("/users/login", { email, password })
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          name="email"
          onChange={e => {
            this.setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          name="password"
          onChange={e => {
            this.setPassword(e.target.value);
          }}
        />

        <input
          type="submit"
          value="Submit"
          onClick={e => {
            e.preventDefault();
            this.getUser(this.state.email, this.state.password);
          }}
        />
      </div>
    );
  }
}

export default Main;
