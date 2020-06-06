import React, { Component } from "react";
import { getCurrentUserReimbursements } from "../api/infoClient";

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
    return (
      <>
        <div>
          This is our profile info for {this.props.currentUser.username}
        </div>
        {/* {this.state.reimbursements ? (
          <ObjectTable objects={this.state.books} />
        ) : (
          <div>No rimbursements yet</div>
        )} */}
        {/* {this.displayReimbursements()} */}
      </>
    );
  }
}

export default Profile;
