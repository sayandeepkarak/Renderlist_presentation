import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import { ListItemBlock, ListText } from "../../../Components/styles/Modal";
import { useAuthContext } from "../../../Context/AuthContext";
import { useCrudContext } from "../../../Context/CrudContext";

const AddVideoList = ({ data, videoId, videourl }) => {
  const { addVideo } = useCrudContext();
  const { handleFetchuserData, currentuser } = useAuthContext();
  const [existvideo, setexistvideo] = useState(false);
  useEffect(() => {
    data.Items.map((e) => e.id === videoId && setexistvideo(true));
  });
  const handleadd = () => {
    addVideo(currentuser.id, videoId, data.Id, videourl).then(() => {
      handleFetchuserData(currentuser.id);
    });
  };

  return (
    <>
      <ListItemBlock>
        <ListText>{data.Title}</ListText>
        <IconButton disabled={existvideo} size="medium" onClick={handleadd}>
          {existvideo ? <CheckIcon /> : <AddIcon />}
        </IconButton>
      </ListItemBlock>
    </>
  );
};

export default AddVideoList;
