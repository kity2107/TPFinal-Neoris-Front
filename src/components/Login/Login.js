import React, { useState } from "react";
import {
  Boton,
  Caja,
  Container,
  LogoContainer,
  Menu,
  MenuItem,
  MobileIcon,
  Wrapper,
} from "./styleLogin";
//import history from "../../history";

import { FaCertificate, FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { startLogin } from "../../actions/login";

function Login() {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);
  const dispatch = useDispatch();
  const { name } = useSelector(state => state.login);

  const handleSubmit = async e => {
    e.preventDefault();
    dispatch(startLogin(Email, password));
  };

  return (
    <Container>
      <Wrapper>
        <LogoContainer>
          {/* //el icono es un svg */}
          <FaCertificate />
          <p>logo</p>
        </LogoContainer>

        <MobileIcon>
          <FaBars />
        </MobileIcon>

        <Menu>
          {login ? (
            <form onSubmit={handleSubmit}>
              <MenuItem>
                <Boton>Login</Boton>

                <Caja>
                  <h4>
                    Email:
                    <input
                      type="text"
                      value={Email}
                      name="Email"
                      placeholder="Email"
                      onChange={({ target }) => setEmail(target.value)}
                    />
                    Contraseña:
                    <input
                      type="password"
                      value={password}
                      name="password"
                      placeholder="password"
                      onChange={({ target }) => setPassword(target.value)}
                    />
                  </h4>
                </Caja>
              </MenuItem>
            </form>
          ) : (
            <MenuItem>
              <h3>El sr. {name} ah iniciado sesion!</h3>
              <Boton
                onClick={() => {
                  setLogin(true);
                  localStorage.clear();
                  // history.push("/");
                }}
              >
                Logout
              </Boton>
            </MenuItem>
          )}
        </Menu>
      </Wrapper>
    </Container>
  );
}

export default Login;
