import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { listandoJornadas } from "../../../../actions/jornadas";
const ListarJornada = () => {
  const dispatch = useDispatch();
  const { tipoJornada } = useSelector(state => state.jornada);

  useEffect(() => {
    dispatch(listandoJornadas());
  }, [dispatch]);
  return (
    <div>
      <ul>
        {tipoJornada.map(data => (
          <li key={data._id}>{data.tipoJornada}</li>
        ))}
      </ul>
    </div>
  );
};
export default ListarJornada;
