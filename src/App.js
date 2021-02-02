import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./component/sidebar/index";
import LoginView from "./component/login";
class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Sidebar} />
            <Route path="/login" component={LoginView} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
