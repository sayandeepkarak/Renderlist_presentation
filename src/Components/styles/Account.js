import styled from "styled-components";

export const AccountScreenArea = styled.div`
  border-radius: 5px;
  width: -webkit-fill-available;
  width: -moz-available;
  max-width: calc(100vw - 73px);
  max-height: calc(100vh - 78px);
  height: calc(100vh - 78px);
  background-color: #f9f9f9;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

export const TitleArea = styled.div`
  display: flex;
  width: -webkit-fill-available;
  width: -moz-available;
  min-height: 200px;
  padding: 0px 3%;
  align-items: center;
  gap: 18px;
  margin: 0px 17px;
  border-bottom: 2px solid rgba(0, 0, 0, 0.32);
  @media (max-width: 1140px) {
    min-height: 150px;
    padding: 0px 2%;
    margin: 0px 10px;
  }
  @media (max-width: 770px) {
    min-height: 130px;
    border-width: 1px;
  }
  @media (max-width: 600px) {
    margin: 0;
    padding: 14px 2%;
    min-height: 150px;
    gap: 10px;
    flex-direction: column;
  }
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const NameText = styled.p`
  color: #adadad;
  font-family: "Poppins", sans-serif;
  font-size: 24px;
  @media (max-width: 1140px) {
    font-size: 20px;
  }
  @media (max-width: 770px) {
    font-size: 18px;
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const MiniText = styled(NameText)`
  font-size: 18px;
  @media (max-width: 1140px) {
    font-size: 14px;
  }
  @media (max-width: 770px) {
    font-size: 12px;
  }
`;
