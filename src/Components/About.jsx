import React, { Component } from "react";
import { Link } from "react-router-dom";

export class About extends Component {
  render() {
    // console.log("This is supposed to be our user", this.props.user());
    return (
      <>
        <div>
          This is our about for {this.props.user().username}. We'll be able to
          update user here
        </div>
        <Link to="/reimbursements">Reimbursements</Link>
      </>
    );
  }
}

export default About;
