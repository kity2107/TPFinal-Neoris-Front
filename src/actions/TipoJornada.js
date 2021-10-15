import Swal from "sweetalert2";

import { fetchSinToken } from "../helper/fetch";

const TipoJornada = tipoJornada => {
  return async dispatch => {
    const resp = await fetchSinToken("tipojornada", { tipoJornada }, "POST");
    const body = await resp.json();

    if (body.ok) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Tipo Jornada Registrada`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire("Error", body.msg, "error");
    }
  };
};
export default TipoJornada;
