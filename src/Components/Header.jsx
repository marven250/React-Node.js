import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
export class Header extends Component {
  logout = () => {
    console.log("in logout func");
    this.props.updatePage();
  };

  render() {
    console.log("this is props user in header:", this.props.user());
    if (this.props.user() && this.props.user().role === "reg-user") {
      return (
        <React.Fragment>
          <nav id="navBar">
            <h1>Expense Reimbursement System</h1>
            <Link to="/about">Change info</Link>
            <button onClick={this.logout}>Logout</button>
            <Link to="/reimbursements">New reimbursement</Link>
          </nav>
        </React.Fragment>
      );
    } else if (this.props.user()) {
      return (
        <>
          <React.Fragment>
            <nav id="navBar">
              <h1>Expense Reimbursement System</h1>
              <button onClick={this.logout}>Logout</button>
            </nav>
          </React.Fragment>
        </>
      );
    } else {
      return (
        <>
          <Redirect to="/"></Redirect>
          <React.Fragment>
            <nav id="navBar">
              <h1>Expense Reimbursement System</h1>
            </nav>
          </React.Fragment>
        </>
      );
    }
  }
}

export default Header;
