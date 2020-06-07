import React, { Component } from "react";
import { Link } from "react-router-dom";

export class ReimbursementsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all: true,
      pending: false,
      denied: false,
      approved: false,
    };
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
    if (this.state.all) {
      this.ReimbursementModule = this.props.userReimbursements.map(
        (oneReimbursement) => {
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
      );
    }

    if (this.state.approved) {
      this.ReimbursementModule = this.props.userReimbursements.map(
        (oneReimbursement) => {
          if (oneReimbursement.status === "Approved") {
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
      this.ReimbursementModule = this.props.userReimbursements.map(
        (oneReimbursement) => {
          if (oneReimbursement.status === "Pending") {
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
      this.ReimbursementModule = this.props.userReimbursements.map(
        (oneReimbursement) => {
          if (oneReimbursement.status === "Denied") {
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
    //console.log("reimburses in list:", this.props.userReimbursements);
    return (
      <div className="reimbursementArea">
        <div>This is our reimbursements info</div>
        <Link to="/reimbursements">New reimbursement</Link>
        <button onClick={this.onPendingStatusChange}>Pending</button>
        <button onClick={this.onApprovedStatusChange}>Approved</button>
        <button onClick={this.onDeclinedStatusChange}>Declined</button>
        <button onClick={this.onAllStatusChange}>All</button>
        {this.ReimbursementModule}
      </div>
    );
  }
}

export default ReimbursementsList;
