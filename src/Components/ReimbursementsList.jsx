import React, { Component } from "react";

export class ReimbursementsList extends Component {
  render() {
    console.log("reimburses in list:", this.props.userReimbursements);
    return (
      <>
        {this.props.userReimbursements.map((oneReimbursement) => {
          return (
            <ul key={oneReimbursement.id}>
              <label>
                Amount:
                <li>{oneReimbursement.amount}</li>
              </label>
              <label>
                DateSubmitted:
                <li>{oneReimbursement.datesubmitted}</li>
              </label>
              <label>
                dateResolved:
                <li>{oneReimbursement.dateresolved}</li>
              </label>
              <label>
                author:
                <li>{oneReimbursement.author}</li>
              </label>
            </ul>
          );
        })}
        <div>This is our reimbursements info</div>
      </>
    );
  }
}

export default ReimbursementsList;
