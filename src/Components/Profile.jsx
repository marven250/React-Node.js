import React, { Component } from "react";
import { getCurrentUserReimbursements } from "../api/infoClient";
import { Link } from "react-router-dom";

export class Profile extends Component {
  // displayReimbursements = () => {
  //   while (this.state.reimbursements.length < 0) {
  //     return <div>Reimbursements loading......</div>;
  //   }

  //   if (this.state.reimbursements.length > 0) {
  //     this.state.reimbursements.map((reimburse) => {
  //       return <div>{reimburse.amount}</div>;
  //     });
  //   }
  // };
  render() {
    let user = this.props.currentUser;
    return (
      <>
        <div id="profileArea">
          <h2>Personal Info</h2>
          <Link to="/about">Change info</Link>
          <ul>
            <label>
              {" "}
              Firstname:
              <li>{user.firstname}</li>
            </label>
            <label>
              {" "}
              Lastname:
              <li>{user.lastname}</li>
            </label>
            <label>
              {" "}
              Email:
              <li>{user.email}</li>
            </label>
            <label>
              {" "}
              Password:
              <li>{user.password}</li>
            </label>
            <label>
              {" "}
              Role:
              <li>{user.role}</li>
            </label>
          </ul>
        </div>
        <div id="reimbursementArea"></div>
      </>
    );
  }
}

export default Profile;
