import React, { Component } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import ReimbursementsList from "./ReimbursementsList";
import reimbursementsArea from "./reimbursementsArea";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserReimbursements: [],
    };
  }

  render() {
    // console.log("this is our user", this.props.user());
    return (
      <>
        <h1>Welcome {this.props.user().username}!</h1>
        <Profile></Profile>
        <ReimbursementsList></ReimbursementsList>
        <Link to="/about">About</Link>
        <Link to="/reimbursements">Reimbursement</Link>
        <reimbursementsArea></reimbursementsArea>
      </>
    );
  }
}

export default Home;
