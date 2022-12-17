import React, { forwardRef, useState } from "react";
import { BottomBlock, BottomChild } from "../../Components/styles/EditScreen";
import { AvatarBadge, RoundedIconButton } from "../../Components/styles/Navbar";
import { useAuthContext } from "../../Context/AuthContext";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import MenuBox from "./MenuBox";
import AddModal from "../../Components/Modals/AddModal";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";

const DetailsBottom = () => {
  const activeplaylist = useSelector(
    (state) => state.activePlayListReducers.value
  );
  const navigate = useNavigate();
  const { currentuser } = useAuthContext();
  const [addModalOpen, setaddModalOpen] = useState(false);

  const handleaddmodalopen = () => setaddModalOpen(true);
  const handleaddmodalclose = () => setaddModalOpen(false);

  const AddModalPop = forwardRef((props, ref) => (
    <AddModal {...props} innerRef={ref} />
  ));
  return (
    <>
      <BottomBlock>
        <BottomChild>
          <RoundedIconButton>
            <AvatarBadge src={currentuser.photoUrl} />
          </RoundedIconButton>
          <span
            onClick={() => navigate("/profile")}
            style={{
              cursor: "pointer",
            }}
          >
            {activeplaylist.UserName}
          </span>
        </BottomChild>
        <BottomChild>
          <IconButton onClick={handleaddmodalopen}>
            <AddIcon />
          </IconButton>
          <MenuBox activeplaylist={activeplaylist} />
        </BottomChild>
      </BottomBlock>

      <Modal open={addModalOpen} onClose={handleaddmodalclose}>
        <AddModalPop data={activeplaylist.Id} close={handleaddmodalclose} />
      </Modal>
    </>
  );
};

export default DetailsBottom;
