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
  margin-top: 78px;
  @media (max-width: 790px) {
    margin-top: 68px;
    position: fixed;
    z-index: 1;
    bottom: 0;
    max-width: -webkit-fill-available;
    width: -webkit-fill-available;
    height: min-content;
    flex-direction: row;
    box-shadow: 0px -7px 23px -2px rgb(0 0 0 / 6%);
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
