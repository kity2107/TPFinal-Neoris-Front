import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import Public from "./Public.Routes";
import Private from "./Private.Routes";
import Login from "../components/Login/Login";

const Routes = () => {
  const { uid, operador } = useSelector(state => state.login);

  return (
    <Router>
      <Switch>
        <Public
          exact
          path="/login"
          component={Login}
          isLogin={!!uid}
          isOper={operador}
        />
        <Private exact path="/" isLogin={!!uid} isOper={operador} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
