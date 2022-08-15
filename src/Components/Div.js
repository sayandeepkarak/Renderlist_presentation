import styled from "styled-components";

export const FlexBlock = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const AvailableBlock = styled.div`
  height: auto;
  width: -webkit-fill-available;
  margin-left: 62px;
`;

export const NavButtonArea = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  gap: 30px;
`;


export const CardArea = styled.div`
  width: -webkit-fill-available;
  max-width: calc(100vw - 73px);
  max-height: calc(100vh - 78px);
  height: calc(100vh - 78px);
  background-color: #f9f9f9;
  padding: 3% 5%;
  overflow-y: scroll;
  display: grid;
  gap: 2%;
  grid-template-columns: auto auto auto auto;
  flex-wrap: wrap;
  &::-webkit-scrollbar {
    display: none;
  }

`;
