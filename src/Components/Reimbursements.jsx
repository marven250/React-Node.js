import React, { Component } from "react";
import { Link } from "react-router-dom";
import { submitReimbursement } from "../api/infoClient";

export class Reimbursements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      description: "",
      type: "",
    };
  }

  handleAmountChange = (e) => {
    this.setState({
      amount: e.target.value,
    });
  };
  handleDescriptionChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  };
  handleTypeChange = (e) => {
    this.setState({
      type: e.target.value,
    });
  };
  handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const newReimbursement = await submitReimbursement(
        this.state.amount,
        this.state.description,
        this.state.type
      );
      console.log("this is patched reimbursement: ", newReimbursement);
    } catch (e) {
      console.error(e.message);
    }
  };

  render() {
    if (this.props.user()) {
      return (
        <div>
          <h1>
            This is our Reimbursements Page where we update reimbursements
          </h1>
          <Link to="/about">About</Link>
          <Link to="/home">Home</Link>
          <form onSubmit={this.handleSubmit}>
            {" "}
            <input
              onChange={this.handleAmountChange}
              type="text"
              name="Amount"
              placeholder="Amount"
            />
            <input
              onChange={this.handleDescriptionChange}
              type="text"
              name="Description"
              placeholder="Description"
            />
            <input
              onChange={this.handleTypeChange}
              type="text"
              name="Type"
              placeholder="Type"
            />
            <input type="submit" value="submit" />
          </form>
        </div>
      );
    } else {
      return (
        <>
          <div>Please login to submit a reimbursement</div>
          <Link to="/">Login</Link>
        </>
      );
    }
  }
}

export default Reimbursements;
