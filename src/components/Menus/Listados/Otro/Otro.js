import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { jornadasEmp } from "../../../../actions/jornadas";

export const Otro = () => {
  const dispatch = useDispatch();
  const { jornadas } = useSelector(state => state.jornadas);

  useEffect(() => {
    dispatch(jornadasEmp());
  }, [dispatch]);
  return (
    <div>
      <ul>
        {jornadas.map(data => (
          <li key={data._id}>
            {data.name} Ingreso: {data.dateIngreso} Salida{data.dateSalida}
          </li>
        ))}
      </ul>
    </div>
  );
};
