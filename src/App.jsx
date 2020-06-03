import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import About from "./Components/About";
import Header from "./Components/Header";
import Reimbursements from "./Components/Reimbursements";
import Home from "./Components/Home";
import history from "./history";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null,
      toDashboard: false,
    };
  }

  updateUser = (user) => {
    sessionStorage.setItem("user", JSON.stringify(user));
    this.setState({
      loggedInUser: user,
    });
    history.push("/home");
  };

  updatePage = () => {
    // console.log("//////////", this.props.history);
    this.setState({ toDashboard: true });
  };

  // componentDidUpdate = () => {
  //   localStorage.setItem("user", this.state.user);
  // };

  myUser = () => {
    return JSON.parse(sessionStorage.getItem("user"));
  };
  // componentDidUpdate() {
  //   if (this.state.toDashboard) {
  //     history.push("/home");
  //   }
  //   // if (this.state.loggedInUser) {
  //   //   return <Redirect to="/about" />;
  //   // }

  //   // if (this.state.loggedInUser) {
  //   //   // console.log("got our user: ", JSON.parse(localStorage.getItem("user")));
  //   //   history.push("/home");
  //   // }
  // }

  render() {
    if (!this.myUser()) {
      return (
        <Route
          path="/"
          render={(props) => <Login {...props} updateUser={this.updateUser} />}
        />
      );
    }

    if (this.state.loggedInUser || this.myUser()) {
      //  history.push("/home");
      return (
        <>
          <Header updatePage={this.updatePage} user={this.myUser} />
          <Switch>
            <Route
              path="/home"
              render={(props) => <Home {...props} user={this.myUser} />}
            />
            <Route
              path="/about"
              render={(props) => <About {...props} user={this.myUser} />}
            />
            <Route
              path="/reimbursements"
              render={(props) => (
                <Reimbursements {...props} user={this.myUser} />
              )}
            />
          </Switch>
        </>
      );
    }
  }
}

export default App;
