import { Avatar, Toolbar } from "@mui/material";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";

export const Navbar = styled.div`
  min-height: 78px;
  max-height: 78px;
  width: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 790px) {
    min-height: 68px;
    max-height: 68px;
  }
`;

export const ToolArea = styled(Toolbar).attrs({
  sx: {
    width: "100%",
  },
})``;

export const RoundedIconButton = styled(IconButton).attrs({
  sx: {
    p: 0,
    width: "50px",
    height: "50px",
    div: {
      width: "38px",
      height: "38px",
    },
  },
})``;

export const AvatarBadge = styled(Avatar).attrs({
  alt: "x",
  sx: { width: 45, height: 45 },
})``;

export const ResponsivePopOver = styled(Popover).attrs({
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "right",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "right",
  },
  sx: {
    display: "none",
    "@media(max-width: 790px)": {
      display: "block",
    },
  },
})``;

export const ResponvidePopOverBlock = styled.div`
  width: min-content;
  padding: 23px;
  display: flex;
  flex-direction: column;
  gap: 17px;
`;
