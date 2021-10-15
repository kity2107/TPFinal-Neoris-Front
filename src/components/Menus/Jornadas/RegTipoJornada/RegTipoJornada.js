import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Swal from "sweetalert2";
import { Content, DivColLeft, DivColRight } from "./styleRegTipoJornada";
import TipoJornada from "../../../../actions/TipoJornada";
import ListarJornada from "../ListarJornada/ListarJornada";

const RegTipoJornada = ({ actualiza, setActualiza }) => {
  const [state, setState] = useState("");
  const dispach = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (state !== "") {
      dispach(TipoJornada(state));
      setState("");
      setActualiza(true);
    } else {
      Swal.fire("Error", "No se pudo refistrar", "error");
    }
  };

  return (
    <Content>
      <DivColLeft>
        <form onSubmit={handleSubmit}>
          <p>Registrar Nuevo Tipo de jornada:</p>
          <br />
          <input
            type="text"
            value={state}
            placeholder="Descripcion"
            onChange={({ target }) => setState(target.value)}
          />
          <button>Registrar</button>
        </form>
      </DivColLeft>
      <DivColRight>
        <p>Listado de jornadas:</p>
        <ListarJornada />
      </DivColRight>
    </Content>
  );
};
export default RegTipoJornada;
