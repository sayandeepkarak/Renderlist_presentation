import styled from "styled-components";

export const SideBarArea = styled.div`
  max-width: 85px;
  min-width: 85px;
  background-color: #fff;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 36px;
  padding: 25px 0px;
  a {
    svg {
      display: none;
      font-size: x-large !important;
    }
    img {
      display: block;
    }
  }
  @media (max-width: 1024px) {
    max-width: min-content;
    padding: 10px 10px;
  }
  @media (max-width: 790px) {
    position: fixed;
    z-index: 1;
    bottom: 0;
    max-width: -webkit-fill-available;
    width: -webkit-fill-available;
    height: min-content;
    flex-direction: row;
    box-shadow: 0px -7px 23px -2px rgb(0 0 0 / 45%);
    gap: 24px;
    a {
      svg {
        display: inline-block;
      }
      img {
        display: none;
      }
    }
  }
`;

export const RoundedButtonIcon = styled.img.attrs({
  alt: "",
})`
  width: 56%;
`;
