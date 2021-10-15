import React, { useState } from "react";
import { Titulo } from "./styleRegistrar";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { startRegister } from "../../../actions/register";

const RegistrarUsuarios = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [isOperador, setIsOperador] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (password !== password2)
      return Swal.fire("Error", "Las password deben coincidir", "error");
    try {
      dispatch(startRegister(name, email, password, isOperador));
      setName("");
      setEmail("");
      setPassword("");
      setPassword2("");
      setIsOperador(true);
    } catch (e) {
      console.log("Error");
    }
  };

  return (
    <>
      <Titulo>Registrar usuarios</Titulo>
      <hr />
      <br />
      <form onSubmit={handleSubmit}>
        <h3>
          <label>Nombre:</label>
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <br />
        </h3>
        <h3>
          <label>Email:</label>
          <input
            type="text"
            placeholder="ejemplo@mail.com"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <br />
        </h3>
        <h3>
          <label>Password:</label>
          <input
            type="password"
            placeholder="******"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <br />
        </h3>
        <h3>
          <label>Password:</label>
          <input
            type="password"
            placeholder="******"
            value={password2}
            onChange={({ target }) => setPassword2(target.value)}
          />
          <br />
        </h3>
        <h3>
          <label>Operador:</label>
          <input
            type="checkbox"
            checked
            onChange={({ target }) => setIsOperador(target.checked)}
          />
        </h3>

        <hr />
        <br />
        <button>Registrar</button>
      </form>
    </>
  );
};
export default RegistrarUsuarios;
