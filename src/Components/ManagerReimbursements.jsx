import React, { Component } from "react";
import {
  getPendingReimbursements,
  getDeclinedReimbursements,
  getApprovedReimbursements,
} from "../api/infoClient";

export class ManagerReimbursements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all: false,
      pending: true,
      denied: false,
      approved: false,
      pendingReimbursements: [],
      approvedReimbursements: [],
      deniedReimbursements: [],
      resolvedReimbursements: [],
    };
  }

  async componentDidMount() {
    this.setState({
      pendingReimbursements: await getPendingReimbursements(),
      approvedReimbursements: await getApprovedReimbursements(),
      deniedReimbursements: await getDeclinedReimbursements(),
    });
  }

  onPendingStatusChange = () => {
    this.setState({
      pending: true,
      all: false,
      denied: false,
      approved: false,
    });
    console.log("pendning status");
  };

  onApprovedStatusChange = () => {
    this.setState({
      pending: false,
      all: false,
      denied: false,
      approved: true,
    });
    console.log("apporve status");
  };
  onDeclinedStatusChange = () => {
    this.setState({
      pending: false,
      all: false,
      denied: true,
      approved: false,
    });
    console.log("adeclined status");
  };

  onAllStatusChange = () => {
    this.setState({
      pending: false,
      all: true,
      denied: false,
      approved: false,
    });
    console.log("all status");
  };
  ReimbursementModule;

  componentDidUpdate() {
    console.log("this is prized state", this.state);

    if (this.state.approved) {
      this.ReimbursementModule = this.state.approvedReimbursements.map(
        (oneReimbursement) => {
          if (oneReimbursement.status === "Approved") {
            return (
              <ul key={oneReimbursement.id}>
                <label>
                  Id:
                  <li>{oneReimbursement.id}</li>
                </label>
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
                  Description:
                  <li>{oneReimbursement.description}</li>
                </label>
                <label>
                  Resolver:
                  <li>{oneReimbursement.resolver}</li>
                </label>
                <label>
                  Type:
                  <li>{oneReimbursement.rtype}</li>
                </label>
                <label>
                  Status:
                  <li>{oneReimbursement.status}</li>
                </label>
              </ul>
            );
          }
        }
      );
    }

    if (this.state.pending) {
      this.ReimbursementModule = this.state.pendingReimbursements.map(
        (oneReimbursement) => {
          if (oneReimbursement.status === "Pending") {
            return (
              <ul key={oneReimbursement.id}>
                <label>
                  Id:
                  <li>{oneReimbursement.id}</li>
                </label>
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
                  Description:
                  <li>{oneReimbursement.description}</li>
                </label>
                <label>
                  Resolver:
                  <li>{oneReimbursement.resolver}</li>
                </label>
                <label>
                  Type:
                  <li>{oneReimbursement.rtype}</li>
                </label>
                <label>
                  Status:
                  <li>{oneReimbursement.status}</li>
                </label>
              </ul>
            );
          }
        }
      );
    }

    if (this.state.denied) {
      this.ReimbursementModule = this.state.deniedReimbursements.map(
        (oneReimbursement) => {
          if (oneReimbursement.status === "Denied") {
            return (
              <ul key={oneReimbursement.id}>
                <label>
                  Id:
                  <li>{oneReimbursement.id}</li>
                </label>
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
                  Description:
                  <li>{oneReimbursement.description}</li>
                </label>
                <label>
                  Resolver:
                  <li>{oneReimbursement.resolver}</li>
                </label>
                <label>
                  Type:
                  <li>{oneReimbursement.rtype}</li>
                </label>
                <label>
                  Status:
                  <li>{oneReimbursement.status}</li>
                </label>
              </ul>
            );
          }
        }
      );
    }
  }

  render() {
    return (
      <div className="reimbursementArea">
        <div>This is Manager reimbursements info</div>
        <button onClick={this.onPendingStatusChange}>Pending</button>
        <button onClick={this.onApprovedStatusChange}>Approved</button>
        <button onClick={this.onDeclinedStatusChange}>Denied</button>
        <button onClick={this.onAllStatusChange}>All</button>
        {this.ReimbursementModule}
      </div>
    );
  }
}

export default ManagerReimbursements;
