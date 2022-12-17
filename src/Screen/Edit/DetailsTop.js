import React, { useRef, useState } from "react";
import {
  ButtonBlock,
  EditInput,
  EditInputBlock,
  EditTitleBlock,
  TitleText,
} from "../../Components/styles/EditScreen";
import { CreateButton } from "../../Components/styles/Modal";
import IconButton from "@mui/material/IconButton";
import { useCrudContext } from "../../Context/CrudContext";
import { useAuthContext } from "../../Context/AuthContext";
import rateicon from "../../Assets/Images/rate.png";
import { useSnackbar } from "notistack";
import EditIcon from "@mui/icons-material/Edit";
import { TitleBottomtexts } from "../../Components/styles/Video";
import { useFunctionContext } from "../../Context/FunctionContext";
import { useSelector } from "react-redux";

const DetailsTop = () => {
  const activeplaylist = useSelector(
    (state) => state.activePlayListReducers.value
  );
  const { enqueueSnackbar } = useSnackbar();
  const { convertview } = useFunctionContext();
  const { currentuser, handleFetchuserData } = useAuthContext();
  const { miniUpdate } = useCrudContext();
  const [editMode, setEditMode] = useState(false);
  const editInputValue = useRef();

  const handleeditopen = () => setEditMode(true);
  const handleeditclose = () => setEditMode(false);

  const handleupdatetitle = async () => {
    try {
      let inputVal = editInputValue.current.value;
      if (inputVal.length > 0 && inputVal !== activeplaylist.Title) {
        await miniUpdate(currentuser.id, activeplaylist.Id, {
          Title: editInputValue.current.value,
        });
        handleFetchuserData(currentuser.id);
        enqueueSnackbar("Successfully updated playlist Title", {
          variant: "success",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setEditMode(false);
    }
  };

  return (
    <>
      {editMode ? (
        <EditInputBlock>
          <EditInput
            ref={editInputValue}
            defaultValue={activeplaylist.Title}
            autoComplete="off"
          />
          <ButtonBlock>
            <CreateButton
              bg="#c94d4d"
              shadow="#f7ccd3"
              onClick={handleeditclose}
            >
              Cancle
            </CreateButton>
            <CreateButton
              bg="#242560"
              shadow="#a3abed"
              onClick={handleupdatetitle}
            >
              Save
            </CreateButton>
          </ButtonBlock>
        </EditInputBlock>
      ) : (
        <EditTitleBlock>
          <TitleText>{activeplaylist.Title}</TitleText>
          <IconButton onClick={handleeditopen}>
            <EditIcon />
          </IconButton>
        </EditTitleBlock>
      )}
      <TitleBottomtexts
        style={{
          cursor: "default",
        }}
      >
        <p>5.1</p>
        <img src={rateicon} alt="x" />
        <li>
          <span>{convertview(activeplaylist.Views)} Views</span>
        </li>
        <li>
          <span>{activeplaylist.UserName}</span>
        </li>
      </TitleBottomtexts>
    </>
  );
};

export default DetailsTop;
