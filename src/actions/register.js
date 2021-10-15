import Swal from "sweetalert2";

import { fetchSinToken } from "../helper/fetch";
import { types } from "../types/types";

const register = user => ({
  type: types.regEmail,
  payload: user,
});

//isAdmin se tranforma en operador, asi es el nombre en la base
export const startRegister = (name, email, password, operador) => {
  return async dispatch => {
    const resp = await fetchSinToken(
      "auth/new",
      { name, email, password, operador },
      "POST"
    );
    const body = await resp.json();

    if (body.ok) {
      dispatch(
        register({
          email: body.email,
        })
      );
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Usuario ${email} registrado`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};
