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
  @media (max-width: 1024px) {
    width: 75%;
  }
  @media (max-width: 790px) {
    width: 90%;
    ${(props) => !props.open && "transform: none"};
    ${(props) => !props.open && "filter: none"};
    ${(props) => !props.open && "padding: 0"};
    ${(props) => !props.open && "border: none"};
    input {
      ${(props) => !props.open && "display: none;"}
    }
  }
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
  @media (max-width: 790px) {
    ${(props) => !props.open && "margin-bottom: 5px"};
    ${(props) => props.open && "display: none"};
  }
`;

export const BackButton = styled(SearchButton)`
  display: none;
  svg {
    font-size: x-large !important;
  }
  @media (max-width: 790px) {
    ${(props) => props.open && "display: grid"};
  }
`;

export const ButtonIcon = styled.img.attrs({ alt: "" })`
  width: 86%;
`;
