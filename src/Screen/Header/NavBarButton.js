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

const NavBarButton = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { currentuser } = useAuthContext();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleopenResponsivePopOver = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlecloseResponsivePopOver = () => {
    setAnchorEl(null);
  };

  const openresponsivepopover = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
                aria-describedby={id}
                onClick={handleopenResponsivePopOver}
              >
                <AvatarBadge sx={{ height: 38, width: 38 }} />
              </RoundedIconButton>
              <ResponsivePopOver
                id={id}
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
            <RoundedIconButton>
              <AvatarBadge src={currentuser.photoUrl} />
            </RoundedIconButton>
          </>
        )}
      </NavButtonArea>
    </>
  );
};

export default NavBarButton;
