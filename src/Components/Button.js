import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Button = styled.button`
  height: 46px;
  min-width: 125px;
  width: auto;
  padding: 0px 15px;
  white-space: nowrap;
  background-color: ${(props) => props.bg};
  border: none;
  font-size: 24px;
  color: white;
  text-transform: capitalize;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  transform: translate(-4px, -4px);
  filter: drop-shadow(4px 4px 0px ${(props) => props.shadow});
  transition: all 0.1s linear;
  &:hover {
    transform: translate(-0px, -0px);
    filter: drop-shadow(0px 0px 0px ${(props) => props.shadow});
  }
`;

export const RoundedButton = styled(NavLink)`
  background-color: red;
  height: 56px;
  width: 56px;
  background-color: rgba(0, 0, 0, 0.32);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.1s linear;
  &:hover {
    background-color: #000;
  }
  &.active {
    background-color: #1e88e5;
  }
`;
