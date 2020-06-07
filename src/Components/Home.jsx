import React, { Component } from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile";
import ReimbursementsList from "./ReimbursementsList";
import ManagerReimbursements from "./ManagerReimbursements";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.user(),
      allUsers: this.props.allUsers,
      singleReimbursement: [],
    };
  }

  render() {
    console.log("this is user state", this.state.currentUser);
    if (this.state.currentUser && this.state.currentUser.role === "reg-user") {
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
    } else if (!this.state.currentUser) {
      return (
        <>
          <div>Please login to view homePage</div> <Link to="/">Login</Link>
        </>
      );
    } else {
      return (
        <>
          <h1>Welcome Manager {this.state.currentUser.firstname}!</h1>
          <div>This is our manager HomePage</div>
          <Profile
            currentUser={this.state.currentUser}
            allUsers={this.state.allUsers}
          ></Profile>
          <br></br>
          <br></br>
          <ManagerReimbursements></ManagerReimbursements>

          <br></br>
          <br></br>
        </>
      );
    }
  }
}

export default Home;
