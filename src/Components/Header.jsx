import React, { Component } from "react";
import history from "../history";

export class Header extends Component {
  logout = () => {
    // console.log("in logout func");
    sessionStorage.clear();
    this.props.updatePage();
    history.push("/");
  };

  render() {
    if (this.props.user) {
      return (
        <React.Fragment>
          <nav id="navBar">
            <h1>Expense Reimbursement System</h1>
            <button onClick={this.logout}>Logout</button>
          </nav>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <nav id="navBar">
            <h1>Expense Reimbursement System</h1>
          </nav>
        </React.Fragment>
      );
    }
  }
}

export default Header;
