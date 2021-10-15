import Swal from "sweetalert2";
import { types } from "../types/types";

import { fetchSinToken } from "../helper/fetch";

const login = user => ({
  type: types.loginSignIn,
  payload: user,
});

export const startLogin = (email, password) => {
  return async dispatch => {
    const resp = await fetchSinToken("auth", { email, password }, "POST");
    const body = await resp.json();

    if (body.ok) {
      localStorage.setItem("token", body.token);

      dispatch(
        login({
          uid: body.uid,
          name: body.name,
          operador: body.operador,
          email: body.email,
        })
      );
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};

export const startLogout = () => {
  return dispatch => {
    localStorage.clear();
    dispatch(logout());
  };
};

const logout = () => ({
  type: types.loginLogout,
});
