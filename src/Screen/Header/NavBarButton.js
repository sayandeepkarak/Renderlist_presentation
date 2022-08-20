import { Avatar } from "@mui/material";
import React from "react";
import { Button } from "../../Components/Button";
import IconButton from "@mui/material/IconButton";
import { NavButtonArea } from "../../Components/Div";
import Profile from "../../Assets/Images/Avatar.png";
import { useState } from "react";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const NavBarButton = () => {
  const [viewdemo, setviewdemo] = useState(false);
  const handleclick = () => setviewdemo(!viewdemo);
  return (
    <>
      <NavButtonArea>
        {!viewdemo ? (
          <>
            <Button
              bg="#FF1744"
              shadow="rgba(255, 23, 68, 0.25)"
              onClick={handleclick}
            >
              <span>signup</span>
              <HowToRegOutlinedIcon />
            </Button>
            <Button
              bg="#3d5afe"
              shadow="rgba(61, 90, 254, 0.5)"
              onClick={handleclick}
            >
              <span>login</span>
              <LoginOutlinedIcon />
            </Button>
          </>
        ) : (
          <>
            <Button
              bg="#3d5afe"
              shadow="rgba(61, 90, 254, 0.5)"
              onClick={handleclick}
            >
              <span>create playlist</span>
              <AddOutlinedIcon />
            </Button>
            <IconButton sx={{ p: 0, width: "50px", height: "50px" }}>
              <Avatar alt="x" src={Profile} sx={{ width: 48, height: 48 }} />
            </IconButton>
          </>
        )}
      </NavButtonArea>
    </>
  );
};

export default NavBarButton;
