import { Avatar } from "@mui/material";
import React from "react";
import { Button } from "../../Components/Button";
import IconButton from "@mui/material/IconButton";
import { NavButtonArea } from "../../Components/Div";
import Profile from "../../Assets/Images/Avatar.png";
import { useState } from "react";

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
              signup
            </Button>
            <Button
              bg="#3d5afe"
              shadow="rgba(61, 90, 254, 0.5)"
              onClick={handleclick}
            >
              login
            </Button>
          </>
        ) : (
          <>
            <Button
              bg="#3d5afe"
              shadow="rgba(61, 90, 254, 0.5)"
              onClick={handleclick}
            >
              create playlist
            </Button>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt="x" src={Profile} sx={{ width: 56, height: 56 }} />
            </IconButton>
          </>
        )}
      </NavButtonArea>
    </>
  );
};

export default NavBarButton;
