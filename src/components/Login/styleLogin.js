import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #23394d;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;

  p {
    &:nth-child(2) {
      color: #fff;
      font-weight: 500;
      font-size: 1.5rem;
    }
  }

  svg {
    //color del logo //el icono es un svg
    fill: #fff;
    margin-right: 0.5rem;
  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

export const MenuItem = styled.li`
  height: 100%;
  height: 70px;
  display: flex;
  justify-content: ce;
  align-items: center;
  h3 {
    color: #fff;
    margin-right: 0.5rem;
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  color: #64b2ff;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    color: #fff;
    background-color: #64b2ff;
    transition: 0.5s all ease;
  }
`;

export const MobileIcon = styled.div`
  display: none;
`;

export const Caja = styled.div`
  h4 {
    color: #fff;
  }
`;

export const Boton = styled.button`
  color: #0099cc;
  background: transparent;
  border: 2px solid #0099cc;
  border-radius: 7px;
  margin-right: 1.5rem;

  color: white;
  padding: 12px 28px;
  text-align: center;

  &:hover {
    background-color: #008cba;
    color: white;
  }
`;
