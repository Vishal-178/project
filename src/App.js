import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginView from "./component/login";
import MainPage from "./MainPage/index";
class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/login" component={LoginView} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
