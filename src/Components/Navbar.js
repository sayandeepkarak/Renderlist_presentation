import { Toolbar } from "@mui/material";
import styled from "styled-components";

export const Navbar = styled.div`
  min-height: 99px;
  max-height: 99px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 0.5%;
`;

export const ToolArea = styled(Toolbar).attrs({
  sx: {
    width: "100%",
  },
})``;
