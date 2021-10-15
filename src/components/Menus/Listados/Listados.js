import React, { useState } from "react";
import { DivColRight, DivColLeft, Content } from "./styleListado";
import Calendario from "./Calendario/Calendario";
import { Otro } from "./Otro/Otro";

const Listados = () => {
  const [cargar, setCargar] = useState("");

  return (
    <div>
      <Content>
        <DivColLeft>
          {" "}
          <ul>
            <li>
              <button onClick={() => setCargar("listar")}>
                Listar empleados
              </button>
            </li>
            <li>
              <button onClick={() => setCargar("otro")}>otro Listado</button>
            </li>
          </ul>
        </DivColLeft>
        <DivColRight>{cargar === "listar" ? <Calendario /> : ""}</DivColRight>
        <DivColRight>{cargar === "otro" ? <Otro /> : ""}</DivColRight>
      </Content>
    </div>
  );
};
export default Listados;
