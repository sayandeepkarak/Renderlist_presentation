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

export const CreatePlaylistButton = styled(Button)`
  margin-left: 12px;
  span {
    display: block;
  }
  svg {
    display: none;
    font-size: x-large !important;
  }
  @media (max-width: 790px) {
    color: ${(props) => props.bg};
    background: transparent;
    filter: none;
    min-width: min-content;
    display: flex;
    align-items: center;
    padding: 0px;
    span {
      display: none;
    }
    svg {
      display: inline-block;
    }
  }
`;

export const RoundedButton = styled(NavLink)`
  height: 42px;
  width: 42px;
  background-color: rgba(0, 0, 0, 0.32);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 3px;
  transition: all 0.1s linear;
  color: #000;
  &:hover {
    background-color: #000;
  }
  &.active {
    background-color: #c94d4d;
  }
  @media (max-width: 790px) {
    background-color: #fff;
    &:hover {
      background-color: none;
    }
    &.active {
      box-shadow: inset 9px -3px 18px -18px rgb(0 0 0 / 56%),
        inset -4px 5px 18px -18px rgb(0 0 0 / 56%);
      background-color: transparent;
      color: #c94d4d;
    }
  }
`;
