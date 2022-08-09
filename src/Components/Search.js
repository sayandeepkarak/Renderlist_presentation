import styled from "styled-components";

export const SearchBarArea = styled.div`
  background-color: white;
  border: 1px solid #7e7e7e;
  height: 50px;
  width: 687px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  ${(props) => !props.shadow && "transform: translate(-4px, -4px)"};
  ${(props) =>
    !props.shadow && "filter: drop-shadow(4px 4px 0px rgba(0, 0, 0, 0.25))"};
  transition: all 0.1s linear;
`;

export const SearchInput = styled.input.attrs({
  type: "text",
  placeholder: "Search Playlist",
})`
  width: -webkit-fill-available;
  font-size: 25px;
  font-family: "Poppins", sans-serif;
  border: none;
  outline: none;
  color: #979797;
  &::placeholder {
    color: #979797;
  }
`;

export const SearchButton = styled.button`
  width: auto;
  padding: 5px 10px;
  background: transparent;
  border: none;
  cursor: pointer;
`;
