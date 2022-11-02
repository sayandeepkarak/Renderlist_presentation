import styled from "styled-components";

export const AutoSizeDiv = styled.div`
  max-height: calc(100vh - 78px);
  height: calc(100vh - 78px);
  overflow-y: scroll;
  width: 100%;
  background-color: #f9f9f9;
  margin-top: 78px;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 790px) {
    margin-top: 68px;
  }
  @media (max-width: 330px) {
    max-height: none;
    height: auto;
    gap: 10px;
  }
`;

export const FlexBlock = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const FlexCenter = styled(FlexBlock)`
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: -webkit-fill-available;
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
  display: flex;
  justify-content: flex-start;
  width: -webkit-fill-available;
  max-width: calc(100vw - 73px);
  padding: 2% 4%;
  background-color: #f9f9f9;
  gap: 2%;
  flex-wrap: wrap;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 1140px) {
    padding: 2% 3%;
  }
  @media (max-width: 1024px) {
    max-width: 100%;
  }
  @media (max-width: 900px) {
    padding: 2% 4%;
    gap: 1%;
  }
  @media (max-width: 880px) {
    padding: 2% 4%;
    gap: 3%;
  }
  @media (max-width: 870px) {
    gap: 2%;
  }
  @media (max-width: 790px) {
    padding: 2% 3%;
    padding-bottom: 73px !important;
  }
  @media (max-width: 530px) {
    padding: 0;
    gap: 10px;
  }
  @media (max-width: 330px) {
    max-height: none;
    height: auto;
  }
`;

export const AuthBlock = styled.div`
  height: calc(100vh - 64px);
  width: 100%;
  display: grid;
  place-items: center;
  @media (max-width: 600px) {
    height: calc(100vh - 56px);
  }
`;

export const AuthViewArea = styled.div`
  height: 400px;
  width: min-content;
  border-radius: 5px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  box-shadow: 1px 3px 15px 7px rgb(0 0 0 / 12%);
  @media (max-width: 600px) {
    margin-bottom: 100px;
  }
`;

export const AuthButtonArea = styled.div`
  margin-bottom: 54px;
  margin-top: 32%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const AuthJumpLink = styled.div`
  font-family: "Poppins", sans-serif;
  cursor: default;
  font-size: 14px;
`;
