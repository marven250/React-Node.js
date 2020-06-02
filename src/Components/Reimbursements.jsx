import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Reimbursements extends Component {
  render() {
    return (
      <div>
        <h1>This is our Reimbursements Page where we update reimbursements</h1>
        <Link to="/about">About</Link>
      </div>
    );
  }
}

export default Reimbursements;
