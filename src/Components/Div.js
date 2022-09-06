import styled from "styled-components";

export const FlexBlock = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const LogoTextArea = styled.div`
  margin-left: 3px;
  height: 78px;
  padding-right: 18px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-right: 1px solid rgba(0, 0, 0, 0.25);
  @media (max-width: 790px) {
    height: 68px;
  }
`;

export const AvailableBlock = styled.div`
  align-items: center;
  height: 73px;
  width: -webkit-fill-available;
  margin-left: 62px;
  display: flex;
  @media (max-width: 1024px) {
    margin-left: 38px;
  }
  @media (max-width: 790px) {
    ${(props) => props.open && "display: flex"};
    ${(props) => props.open && "position: absolute"};
    ${(props) => props.open && "background-color: white"};
    ${(props) => props.open && "width: -webkit-fill-available"};
    ${(props) => props.open && "left: 0"};
    ${(props) => props.open && "z-index: 1"};
    ${(props) => (!props.open ? "width: auto" : "padding: 0px 4px")};
    justify-content: space-evenly;
    margin-left: ${(props) => (!props.open ? " auto" : "0")};
  }
`;
export const MiniDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 1024px) {
    gap: 17px;
  }
  @media (max-width: 790px) {
    gap: 14px;
    margin-left: 12px;
  }
`;

export const NavButtonArea = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 1024px) {
    gap: 17px;
  }
  @media (max-width: 790px) {
    gap: 14px;
  }
`;

export const CardArea = styled.div`
  width: -webkit-fill-available;
  max-width: calc(100vw - 73px);
  max-height: calc(100vh - 78px);
  height: calc(100vh - 78px);
  padding: 2% 4%;
  background-color: #f9f9f9;
  overflow-y: scroll;
  display: grid;
  gap: 2%;
  grid-template-columns: auto auto auto auto;
  grid-template-rows: max-content;
  flex-wrap: wrap;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1024px) {
    max-width: 100%;
  }
  @media (max-width: 880px) {
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 768px) {
    padding-bottom: 73px !important;
  }
  @media (max-width: 600px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 530px) {
    grid-template-columns: auto;
    padding: 0;
  }
  @media (max-width: 330px) {
    max-height: none;
    height: auto;
    gap: 10px;
  }
`;
