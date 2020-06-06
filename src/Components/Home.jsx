import React, { Component } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import ReimbursementsList from "./ReimbursementsList";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.user(),
    };
  }

  render() {
    if (this.state.currentUser) {
      return (
        <>
          <h1>Welcome {this.state.currentUser.firstname}!</h1>
          <Profile currentUser={this.state.currentUser}></Profile>
          {this.props.currentReimbursements ? (
            <ReimbursementsList
              userReimbursements={this.props.currentReimbursements}
            ></ReimbursementsList>
          ) : (
            <div>This user has no reimbursements</div>
          )}

          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </>
      );
    } else {
      return (
        <>
          <div>Please login to view homePage</div> <Link to="/">Login</Link>
        </>
      );
    }
  }
}

export default Home;
