import styled from "styled-components";

export const li = styled.li`
  display: block;
  float: left;
  padding: 0 10px;
`;

export const ul = styled.ul`
  margin: 0;
  padding: 0;
`;



export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #3386FF;
`;


export const Menu = styled.ul`
  height: 100%;
  display: flex;
 
  list-style: none;
`;

export const MenuItem = styled.li`
  height: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
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


