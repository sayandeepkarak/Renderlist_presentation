import { Toolbar } from "@mui/material";
import styled from "styled-components";

export const Navbar = styled.div`
  min-height:78px;
  max-height: 78px;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ToolArea = styled(Toolbar).attrs({
  sx: {
    width: "100%",
  },
})``;
