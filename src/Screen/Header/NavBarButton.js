import React, { useState } from "react";
import { Button, CreatePlaylistButton } from "../../Components/Button";
import { MiniDiv, NavButtonArea } from "../../Components/Div";
import Modal from "@mui/material/Modal";
import CreateModal from "./CreateModal";
import {
  AvatarBadge,
  ResponsivePopOver,
  ResponvidePopOverBlock,
  RoundedIconButton,
} from "../../Components/Navbar";
import AddIcon from "@mui/icons-material/Add";
import { useAuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { PopUpTitle } from "../../Components/Modal";

const NavBarButton = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [userPopOver, setuserPopOver] = useState(null);
  const { currentuser, handleLogout } = useAuthContext();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleopenResponsivePopOver = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlecloseResponsivePopOver = () => {
    setAnchorEl(null);
  };

  const handleopenuserpopover = (event) => {
    setuserPopOver(event.currentTarget);
  };
  const handlecloseuserpopover = (event) => {
    setuserPopOver(null);
  };

  const logout = () => {
    setuserPopOver(null);
    handleLogout();
  };

  const openresponsivepopover = Boolean(anchorEl);
  const res_pop_Id = open ? "responive-popover" : undefined;

  const openuserpopover = Boolean(userPopOver);
  const user_pop_Id = open ? "user-popover" : undefined;

  const CreateModalPop = React.forwardRef((props, ref) => (
    <CreateModal {...props} innerRef={ref} />
  ));

  return (
    <>
      <NavButtonArea>
        {currentuser === null ? (
          <>
            <MiniDiv id="auth_main_box">
              <Button
                bg="#c94d4d"
                shadow="#f7ccd3"
                onClick={() => navigate("/Signup")}
              >
                <span>signup</span>
              </Button>
              <Button
                bg="#242560"
                shadow="#a3abed"
                onClick={() => navigate("/Login")}
              >
                <span>login</span>
              </Button>
            </MiniDiv>

            <MiniDiv id="auth_responsive_box">
              <RoundedIconButton
                aria-describedby={res_pop_Id}
                onClick={handleopenResponsivePopOver}
              >
                <AvatarBadge sx={{ height: 38, width: 38 }} />
              </RoundedIconButton>
              <ResponsivePopOver
                id={res_pop_Id}
                open={openresponsivepopover}
                anchorEl={anchorEl}
                onClose={handlecloseResponsivePopOver}
              >
                <ResponvidePopOverBlock>
                  <Button
                    bg="#c94d4d"
                    shadow="#f7ccd3"
                    onClick={() => navigate("/Signup")}
                  >
                    <span>signup</span>
                  </Button>
                  <Button
                    bg="#242560"
                    shadow="#a3abed"
                    onClick={() => navigate("/Login")}
                  >
                    <span>login</span>
                  </Button>
                </ResponvidePopOverBlock>
              </ResponsivePopOver>
            </MiniDiv>
          </>
        ) : (
          <>
            <CreatePlaylistButton
              bg="#242560"
              shadow="#a3abed"
              onClick={handleOpen}
            >
              <span>create playlist</span>
              <AddIcon />
            </CreatePlaylistButton>
            <Modal open={open} onClose={handleClose}>
              <CreateModalPop close={handleClose} />
            </Modal>
            <RoundedIconButton
              aria-describedby={user_pop_Id}
              onClick={handleopenuserpopover}
            >
              <AvatarBadge src={currentuser.photoUrl} />
            </RoundedIconButton>
            <ResponsivePopOver
              id={user_pop_Id}
              anchorEl={userPopOver}
              open={openuserpopover}
              onClose={handlecloseuserpopover}
              style={{ display: "block" }}
            >
              <ResponvidePopOverBlock>
                <PopUpTitle>{currentuser.name}</PopUpTitle>
                <PopUpTitle>{currentuser.email}</PopUpTitle>
                <Button
                  bg="#242560"
                  shadow="#a3abed"
                  style={{ width: "min-content", alignSelf: "end" }}
                  onClick={logout}
                >
                  <span>Logout</span>
                </Button>
              </ResponvidePopOverBlock>
            </ResponsivePopOver>
          </>
        )}
      </NavButtonArea>
    </>
  );
};

export default NavBarButton;
