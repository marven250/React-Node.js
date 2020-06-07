import React, { Component } from "react";
import { Link } from "react-router-dom";

export class SingleReimbursement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aReimbursement: [],
    };
  }

  componentDidMount() {
    // console.log(
    //   "this is upstae session reimbursess",
    //   JSON.parse(sessionStorage.getItem("aReimbursement"))
    // );
    this.setState({
      aReimbursement: JSON.parse(sessionStorage.getItem("aReimbursement")),
    });
  }

  render() {
    console.log("this sReimburse state", this.state.aReimbursement);
    return (
      <>
        <span className="singleReimburseTitle">
          <h2 className="singleTitle">
            {this.state.aReimbursement[0] &&
              this.state.aReimbursement[0].author}
            's Reimbursements
          </h2>
        </span>

        {this.state.aReimbursement.map((aReimbursement) => {
          return (
            <>
              <ul className="cardFormat">
                <label>
                  {" "}
                  Id:
                  <li>{aReimbursement.id}</li>
                </label>
                <label>
                  {" "}
                  Amount:
                  <li>{aReimbursement.amount}</li>
                </label>
                <label>
                  {" "}
                  DateSubmitted:
                  <li>{aReimbursement.datesubmitted}</li>
                </label>
                <label>
                  {" "}
                  DateResolved:
                  <li>{aReimbursement.dateresolved}</li>
                </label>
                <label>
                  {" "}
                  Author:
                  <li>{aReimbursement.author}</li>
                </label>
                <label>
                  {" "}
                  Description:
                  <li>{aReimbursement.description}</li>
                </label>
                <label>
                  {" "}
                  Resolver:
                  <li>{aReimbursement.resolver}</li>
                </label>
                <label>
                  {" "}
                  Type:
                  <li>{aReimbursement.rtype}</li>
                </label>
                <label>
                  {" "}
                  Status:
                  <li>{aReimbursement.status}</li>
                </label>
              </ul>
            </>
          );
        })}
      </>
    );
  }
}

export default SingleReimbursement;
