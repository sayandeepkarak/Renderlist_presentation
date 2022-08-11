import styled from "styled-components";

export const SearchBarArea = styled.div`
  background-color: white;
  border: 1px solid #7e7e7e;
  height: 35px;
  width: 500px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  transform: translate(-3px, -3px);
  filter: drop-shadow(3px 3px 0px rgba(0, 0, 0, 0.25));
  transition: all 0.1s linear;
`;

export const SearchInput = styled.input.attrs({
  type: "text",
  placeholder: "Search Playlist",
})`
  width: -webkit-fill-available;
  font-size: 18px;
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
  display: grid;
  place-items: center;
`;

export const ButtonIcon = styled.img.attrs({ alt: "" })`
  width: 86%;
`;
