import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Button = styled.button`
  height: 32px;
  min-width: 86px;
  width: auto;
  padding: 0px 15px;
  white-space: nowrap;
  background-color: ${(props) => props.bg};
  border: none;
  font-size: 16px;
  color: white;
  text-transform: capitalize;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transform: translate(-3px, -3px);
  filter: drop-shadow(3px 3px 0px ${(props) => props.shadow});
  transition: all 0.1s linear;
`;

export const RoundedButton = styled(NavLink)`
  background-color: red;
  height: 42px;
  width: 42px;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 3px;
  transition: all 0.1s linear;
  &:hover {
    background-color: rgba(0, 0, 0, 0.32);
  }
  &.active {
    background-color: #1e88e5;
  }
`;
