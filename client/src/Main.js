import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      loggedIn: false,
      email: "",
      password: ""
    };
  }

  render() {
    return <h1>Main Component</h1>;
  }
}

export default Main;
