import React, { Component } from "react";
import { Link } from "react-router-dom";
import { patchUser } from "../api/infoClient";

export class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
  }

  handleFirstNameChange = (e) => {
    this.setState({
      firstname: e.target.value,
    });
  };
  handleLastNameChange = (e) => {
    this.setState({
      lastname: e.target.value,
    });
  };
  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const patchedUser = await patchUser(
        this.state.id,
        this.state.firstname,
        this.state.lastname,
        this.state.password,
        this.state.email
      );
      this.props.updateUser(patchedUser);
      console.log("this is patched user: ", patchedUser);
    } catch (e) {
      console.error(e.message);
    }
  };

  render() {
    if (this.props.user()) {
      return (
        <>
          <div>
            This is our about for {this.props.user().firstname}. We'll be able
            to update user here
          </div>
          <form onSubmit={this.handleSubmit}>
            {" "}
            <input
              onChange={this.handleFirstNameChange}
              type="text"
              name="firstname"
              placeholder="firstname"
            />
            <input
              onChange={this.handleLastNameChange}
              type="text"
              name="lastname"
              placeholder="lastname"
            />
            <input
              onChange={this.handleEmailChange}
              type="text"
              name="email"
              placeholder="email"
            />
            <input
              onChange={this.handlePasswordChange}
              type="text"
              name="password"
              placeholder="password"
            />
            <input type="submit" value="submit" />
          </form>
          <Link to="/reimbursements">Reimbursements</Link>
          <Link to="/home">Home</Link>
        </>
      );
    } else {
      return (
        <>
          <div>Please login to change personal info</div>
          <Link to="/">Login</Link>
        </>
      );
    }
  }
}

export default About;
