import React, { useState, forwardRef } from "react";
import { Button, CreatePlaylistButton } from "../../Components/styles/Button";
import { MiniDiv, NavButtonArea } from "../../Components/styles/Div";
import Modal from "@mui/material/Modal";
import CreateModal from "../../Components/Modals/CreateModal";
import {
  AvatarBadge,
  NameTitle,
  ResponsivePopOver,
  ResponvidePopOverBlock,
  RoundedIconButton,
} from "../../Components/styles/Navbar";
import AddIcon from "@mui/icons-material/Add";
import { useAuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const NavBarButton = () => {
  const navigate = useNavigate();
  const { currentuser, handleLogout } = useAuthContext();
  const [state, setstate] = useState({
    open: false,
    anchorEl: null,
    userPopOver: null,
  });
  const handleOpen = () => {
    setstate({ ...state, open: true });
  };
  const handleClose = () => {
    setstate({ ...state, open: false });
  };
  const handleopenResponsivePopOver = (event) => {
    setstate({ ...state, anchorEl: event.currentTarget });
  };
  const handlecloseResponsivePopOver = () => {
    setstate({ ...state, anchorEl: null });
  };
  const handleopenuserpopover = (event) => {
    setstate({ ...state, userPopOver: event.currentTarget });
  };
  const handlecloseuserpopover = (event) => {
    setstate({ ...state, userPopOver: null });
  };

  const logout = () => {
    setstate({ ...state, userPopOver: null });
    handleLogout();
  };
  const openresponsivepopover = Boolean(state.anchorEl);
  const res_pop_Id = state.open ? "responive-popover" : undefined;
  const openuserpopover = Boolean(state.userPopOver);
  const user_pop_Id = state.open ? "user-popover" : undefined;
  const CreateModalPop = forwardRef((props, ref) => (
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
                anchorEl={state.anchorEl}
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
            <Modal open={state.open} onClose={handleClose}>
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
              anchorEl={state.userPopOver}
              open={openuserpopover}
              onClose={handlecloseuserpopover}
              style={{ display: "block" }}
            >
              <ResponvidePopOverBlock>
                <NameTitle>{currentuser.name}</NameTitle>
                <NameTitle>{currentuser.email}</NameTitle>
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
