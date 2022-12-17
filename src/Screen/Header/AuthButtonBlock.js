import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Components/styles/Button";
import { MiniDiv } from "../../Components/styles/Div";
import {
  AvatarBadge,
  ResponsivePopOver,
  ResponvidePopOverBlock,
  RoundedIconButton,
} from "../../Components/styles/Navbar";

const AuthButtonBlock = () => {
  const [anchorEl, setanchorEl] = useState(null);
  const navigate = useNavigate();

  const navigateLogin = () => navigate("/Login");
  const navigateSignup = () => navigate("/Signup");

  const handleOpen = (event) => setanchorEl(event.currentTarget);
  const handleClose = () => setanchorEl(null);

  const open = Boolean(anchorEl);
  const id = open ? "responive-popover" : undefined;

  return (
    <>
      <MiniDiv id="auth_main_box">
        <Button bg="#c94d4d" shadow="#f7ccd3" onClick={navigateSignup}>
          <span>signup</span>
        </Button>
        <Button bg="#242560" shadow="#a3abed" onClick={navigateLogin}>
          <span>login</span>
        </Button>
      </MiniDiv>

      <MiniDiv id="auth_responsive_box">
        <RoundedIconButton aria-describedby={id} onClick={handleOpen}>
          <AvatarBadge sx={{ height: 38, width: 38 }} />
        </RoundedIconButton>
        <ResponsivePopOver
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
        >
          <ResponvidePopOverBlock>
            <Button bg="#c94d4d" shadow="#f7ccd3" onClick={navigateSignup}>
              <span>signup</span>
            </Button>
            <Button bg="#242560" shadow="#a3abed" onClick={navigateLogin}>
              <span>login</span>
            </Button>
          </ResponvidePopOverBlock>
        </ResponsivePopOver>
      </MiniDiv>
    </>
  );
};

export default AuthButtonBlock;
