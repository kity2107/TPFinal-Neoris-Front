import React, { useEffect, useState } from "react";

import { DateTimePicker } from "@material-ui/pickers";

import { DivTop, Tag } from "./styleJornada";
import { useDispatch, useSelector } from "react-redux";
import { listandoJornadas, regJornada } from "../../../actions/jornadas";

import moment from "moment";

import Swal from "sweetalert2";
import RegTipoJornada from "./RegTipoJornada/RegTipoJornada";

const Jornadas = () => {
  const [actualiza, setActualiza] = useState(false);
  const [startDateIngreso, setStartDateIngreso] = useState(new Date());
  const [startDateSalida, setStartDateSalida] = useState(new Date());
  const { operador } = useSelector(state => state.login);
  const [turno, setTurno] = useState("");
  const dispatch = useDispatch();
  const { name, email } = useSelector(state => state.login);
  const { tipoJornada } = useSelector(state => state.jornada);

  useEffect(() => {
    dispatch(listandoJornadas());
    setActualiza(false);
  }, [dispatch, actualiza]);

  const handleSubmit = e => {
    e.preventDefault();
    const dateIngreso = moment(startDateIngreso);
    const dateSalida = moment(startDateSalida);
    const ahora = moment(new Date());

    if (dateIngreso < dateSalida) {
      if (dateSalida <= ahora) {
        dispatch(regJornada(dateIngreso, dateSalida, turno, email, name));
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: `El Hs Salida debe ser menos a la Hs Actual`,
          showConfirmButton: true,
        });
      }
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `El Hs Ingreso debe ser menos al Hs salida`,
        showConfirmButton: true,
      });
    }
  };

  return (
    <div>
      {operador ? (
        ""
      ) : (
        <div>
          <br />
          <RegTipoJornada actualiza={actualiza} setActualiza={setActualiza} />
          <br />
          <br />
        </div>
      )}
      <DivTop>
        <form onSubmit={handleSubmit}>
          <div>
            <Tag>HS </Tag>
            <Tag>Ingreso:</Tag>
            <DateTimePicker
              minDateMessage
              maxDateMessage
              disablePast
              disableFuture
              format="dd/MM/y H:mm"
              value={startDateIngreso}
              onChange={setStartDateIngreso}
            />
            <br />{" "}
          </div>

          <div>
            <br />
            <Tag>HS </Tag>
            <Tag>Salida:</Tag>

            <DateTimePicker
              minDateMessage
              maxDateMessage
              disablePast
              disableFuture
              format="dd/MM/y H:mm"
              value={startDateSalida}
              onChange={setStartDateSalida}
            />
          </div>
          <br />
          <div>
            <Tag>Tipo de jornada:</Tag>
          </div>
          <div>
            <div style={{ width: "35%" }}>
              <select onChange={e => setTurno(e.target.value)}>
                <option value={-1}>seleccione una jornada</option>
                {tipoJornada.map(data => (
                  <option key={data._id} value={data.tipoJornada}>
                    {data.tipoJornada}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button>Cargar</button>
        </form>
      </DivTop>
    </div>
  );
};
export default Jornadas;
