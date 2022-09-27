import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";
import { ListItemBlock, ListText } from "../../Components/Modal";
import { useAuthContext } from "../../Context/AuthContext";
import { useCrudContext } from "../../Context/CrudContext";

const AddVideoList = (props) => {
  const { addVideo } = useCrudContext();
  const { handleFetchuserData, currentuser } = useAuthContext();
  const [existvideo, setexistvideo] = useState(false);
  useEffect(() => {
    props.data.Items.map((e) => {
      return e.id === props.videoId && setexistvideo(true);
    });
  }, []);
  const handleadd = () => {
    addVideo(currentuser.id, props.videoId, props.data.Id, props.videourl);
    handleFetchuserData(currentuser.id);
  };
  return (
    <>
      <ListItemBlock>
        <ListText>{props.data.Title}</ListText>
        <IconButton disabled={existvideo} size="medium" onClick={handleadd}>
          {existvideo ? <CheckIcon /> : <AddIcon />}
        </IconButton>
      </ListItemBlock>
    </>
  );
};

export default AddVideoList;
