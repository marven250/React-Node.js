import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./Components/Login";
import About from "./Components/About";
import Header from "./Components/Header";
import Reimbursements from "./Components/Reimbursements";
import Home from "./Components/Home";
import history from "./history";
import { getCurrentUserReimbursements } from "./api/infoClient";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      toDashboard: false,
      cUserReimbursements: [],
    };
  }

  updateUser = (user) => {
    sessionStorage.setItem("user", JSON.stringify(user));
    this.setState({
      loggedInUser: user,
    });
    history.push("/home");
    // history.push("/home");
  };

  // componentDidMount = async () => {
  //   try {
  //     const currentReimbursements = await getCurrentUserReimbursements();
  //     console.log("these are new reimbursementssss", currentReimbursements);
  //     this.setState({
  //       cUserReimbursements: currentReimbursements,
  //     });
  //   } catch (e) {
  //     console.error(e.message);
  //   }
  // };

  updateReimbursements = async () => {
    try {
      const newCurrentReimbursements = await getCurrentUserReimbursements();
      // console.log("these are new reimbursementssss", newCurrentReimbursements);
      this.setState({
        cUserReimbursements: newCurrentReimbursements,
      });
    } catch (e) {
      console.error(e.message);
    }
  };

  updatePage = () => {
    // console.log("//////////", this.props.history);
    sessionStorage.clear();
    this.setState({ toDashboard: true });
  };

  myUser = () => {
    return JSON.parse(sessionStorage.getItem("user"));
  };

  render() {
    //console.log("these are reimbursements:", this.state.cUserReimbursements);
    return (
      <>
        <Redirect from="*" to="/home" />
        <Header updatePage={this.updatePage} user={this.myUser} />
        <Switch>
          <Route
            path="/home"
            render={(props) => (
              <Home
                {...props}
                currentReimbursements={this.state.cUserReimbursements}
                user={this.myUser}
              />
            )}
          />
          <Route
            path="/about"
            render={(props) => (
              <About
                {...props}
                updateUser={this.updateUser}
                user={this.myUser}
              />
            )}
          />
          <Route
            path="/reimbursements"
            render={(props) => (
              <Reimbursements
                {...props}
                updateReimbursements={this.updateReimbursements}
                user={this.myUser}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={(props) => (
              <Login
                {...props}
                user={this.myUser}
                updateUser={this.updateUser}
                updateReimbursements={this.updateReimbursements}
              />
            )}
          />
        </Switch>
      </>
    );

    // return (
    //   <>
    //     <Route
    //       render={(props) => (
    //         <Login {...props} user={this.myUser} updateUser={this.updateUser} />
    //       )}
    //     />
    //   </>
    // );
  }
}

export default App;
