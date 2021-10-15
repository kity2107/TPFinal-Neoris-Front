import Swal from "sweetalert2";
import { types } from "../types/types";
import { fetchSinToken } from "../helper/fetch";

export const regJornada = (
  dateIngreso,
  dateSalida,
  tipoJornada,
  email,
  name
) => {
  return async dispatch => {
    const resp = await fetchSinToken(
      "jornada",
      { dateIngreso, dateSalida, tipoJornada, email, name },
      "POST"
    );
    const body = await resp.json();

    if (body.ok) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Jornada Registrada`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};

export const listandoJornadas = () => {
  return async dispatch => {
    try {
      const resp = await fetchSinToken("tipojornada");
      const jornadas = await resp.json();
      dispatch(jornadasListadas(jornadas));
    } catch (e) {
      console.log(e);
    }
  };
};

const jornadasListadas = jornadas => ({
  type: types.listJornada,
  payload: jornadas,
});

export const jornadasEmp = () => {
  return async dispatch => {
    try {
      const resp = await fetchSinToken("jornada");
      const jornadas = await resp.json();
      dispatch(jornadasEmpleados(jornadas));
    } catch (e) {
      console.log(e);
    }
  };
};

const jornadasEmpleados = empleados => ({
  type: types.jornadaEmpleados,
  payload: empleados,
});
