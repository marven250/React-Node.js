import React, { Component } from "react";
import {
  login,
  getPendingReimbursements,
  getApprovedReimbursements,
  getDeclinedReimbursements,
  getCurrentUserReimbursements,
} from "../api/infoClient";
import { Link } from "react-router-dom";
import history from "../history";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      passWord: "",
    };
  }

  handleNameChange = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };
  handlePassChange = (e) => {
    this.setState({
      passWord: e.target.value,
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loggedInUser = await login(
        this.state.userName,
        this.state.passWord
      );

      //console.log("propsssssssssssssssssss", this.props);
      this.props.updateUser(loggedInUser);
      getPendingReimbursements();
      getApprovedReimbursements();
      getDeclinedReimbursements();
      getCurrentUserReimbursements();
      console.log(history);
      // this.setState({
      //   username: "",
      //   password: "",
      // });
    } catch (e) {
      console.error("!!!!!!!!", e.message);
    }
  };

  componentDidUpdate() {
    history.push("/home");
  }

  render() {
    return (
      <div className="box">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="inputbox">
            <input
              onChange={this.handleNameChange}
              type="text"
              name=""
              required
            />
            <label>Username</label>
          </div>
          <div className="inputbox">
            <input
              onChange={this.handlePassChange}
              type="password"
              name=""
              required
            />
            <label>Password</label>
          </div>
          <input id="submitButton" type="submit" name="" value="Submit" />
        </form>
        <Link to="/about">take me to about</Link>
        <br></br>
        <Link to="/reimbursements">take me to my reimbursements</Link>
      </div>
    );
  }
}

export default Login;