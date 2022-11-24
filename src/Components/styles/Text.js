import styled from "styled-components";

export const LogoText = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1;
  cursor: default;
  user-select: none;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

export const Errortext = styled.p`
  font-family: "Poppins", sans-serif;
  color: #c94d4d;
  font-size: 14px;
  text-transform: capitalize;
`;
