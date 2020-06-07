import React, { Component } from "react";
import { getAUserReimbursement } from "../api/infoClient";
import { Link } from "react-router-dom";
import history from "../history";

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

  constructor(props) {
    super(props);
    this.state = {
      singleReimbursement: [],
      singlePersonId: 0,
    };
  }

  getSingleReimbursement = async (authorId) => {
    try {
      const responseReimbursement = await getAUserReimbursement(authorId);
      //console.log("This our response reimbursmnet", responseReimbursement);
      sessionStorage.setItem(
        "aReimbursement",
        JSON.stringify(responseReimbursement)
      );
      history.push("/singleReimbursements");
    } catch (e) {
      console.error(e.message);
    }
  };
  handleFormChange = (e) => {
    this.setState({
      singlePersonId: e.target.value,
    });
  };

  render() {
    let user = this.props.currentUser;
    let allUsers = this.props.allUsers;

    if (user.role === "finance-manager") {
      return (
        <>
          <input onChange={this.handleFormChange} type="text" />
          <button
            onClick={this.getSingleReimbursement(this.state.singlePersonId)}
          >
            Submitt
          </button>
          <h2>These are all our users</h2>
          {allUsers.map((aUser) => {
            return (
              <>
                <ul className="cardFormat">
                  <label>
                    {" "}
                    Id:
                    <li>{aUser.id}</li>
                  </label>
                  <label>
                    {" "}
                    Firstname:
                    <li>{aUser.firstname}</li>
                  </label>
                  <label>
                    {" "}
                    Lastname:
                    <li>{aUser.lastname}</li>
                  </label>
                  <label>
                    {" "}
                    Email:
                    <li>{aUser.email}</li>
                  </label>
                  <label>
                    {" "}
                    Password:
                    <li>{aUser.password}</li>
                  </label>
                  <label>
                    {" "}
                    Role:
                    <li>{aUser.role}</li>
                  </label>
                </ul>
              </>
            );
          })}
        </>
      );
    } else {
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
        </>
      );
    }
  }
}

export default Profile;
