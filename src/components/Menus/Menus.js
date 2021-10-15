import React, { useState } from "react";

import { Container, MenuItemLink, MenuItem, Menu } from "./styleMenus";

import {} from "react-icons/fa";
import Listados from "./Listados/Listados";
import RegistrarUsuarios from "./RegistrarUsuarios/RegistrarUsuarios";
import Jornadas from "./Jornadas/Jornadas";

const Menus = isOper => {
  const [muestro, setMuestro] = useState("");
  const [oper] = useState(isOper.isOper);

  return (
    <div>
      <Container>
        <Menu>
          <MenuItem>
            {oper ? (
              ""
            ) : (
              <MenuItemLink onClick={() => setMuestro("Registrar")}>
                Usuarios
              </MenuItemLink>
            )}
          </MenuItem>
          <MenuItem>
            <MenuItemLink onClick={() => setMuestro("Jornadas")}>
              Jornadas
            </MenuItemLink>
          </MenuItem>
          <MenuItem>
            {oper ? (
              ""
            ) : (
              <MenuItemLink onClick={() => setMuestro("Listados")}>
                Listados
              </MenuItemLink>
            )}
          </MenuItem>
        </Menu>
      </Container>
      {muestro === "Listados" ? <Listados /> : ""}
      {muestro === "Jornadas" ? <Jornadas /> : ""}
      {muestro === "Registrar" ? <RegistrarUsuarios /> : ""}
    </div>
  );
};

export default Menus;
