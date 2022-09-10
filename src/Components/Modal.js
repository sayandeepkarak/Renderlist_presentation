import styled from "styled-components";

export const ModalBlock = styled.form`
  height: auto;
  width: 500px;
  gap: 16px;
  position: absolute;
  top: 16%;
  left: 50%;
  border-radius: 4px;
  transform: translate(-50%, -0%);
  background-color: white;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 16px;
  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const PopUpHead = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    svg {
      font-size: x-large !important;
    }
  }
`;

export const PopUpTitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1px;
  opacity: 0.9;
`;

export const RowFlex = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 16px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  border: none;
  outline: none;
  color: #979797;
  border-bottom: 1px solid #979797;
  padding: 5px;
`;

export const CreateButton = styled.button`
  align-self: flex-end;
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
  margin-top: 16px;
  margin-bottom: 5px;
  border-radius: 4px;
`;
