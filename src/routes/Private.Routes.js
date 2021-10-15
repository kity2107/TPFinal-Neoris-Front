import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
import Operarios from "../components/Operarios/Operarios";
import Administrador from "../components/Administrador/Administrador";

const Private = ({ isOper, isLogin, ...rest }) => {
  const Component = isOper ? Operarios : Administrador;
  return (
    <Route
      {...rest}
      component={props =>
        isLogin ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

Private.propTypes = {
  isLogin: PropTypes.bool,
  component: PropTypes.func,
};
export default Private;
