import styled from "styled-components";

export const Image = styled.img.attrs({
  alt: "",
})``;

export const LogoImage = styled.img.attrs({ alt: "" })`
  height: 42px;
  cursor: pointer;
  @media (max-width: 790px) {
    height: 38px;
  }
`;
