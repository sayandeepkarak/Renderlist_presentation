import React from "react";
import { EditScreenArea, ItemsBlock } from "../../Components/styles/EditScreen";
import EditPlaylistItem from "./EditPlaylistItem";
import { useSelector } from "react-redux";
import { useAuthContext } from "../../Context/AuthContext";
import { useCrudContext } from "../../Context/CrudContext";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import DetailsBlock from "./DetailsBlock";

const Edit = () => {
  const activeplaylist = useSelector(
    (state) => state.activePlayListReducers.value
  );
  const { currentuser, handleFetchuserData } = useAuthContext();
  const { miniUpdate, searchValue } = useCrudContext();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleplay = (videoId) => {
    navigate(`/watch/${activeplaylist.Id}/${videoId}`);
  };

  const deletevideo = async (videoId) => {
    try {
      const readyitems = activeplaylist.Items.filter((e) => e.id !== videoId);
      const thumb =
        readyitems.length > 0
          ? readyitems[readyitems.length - 1].thumbnail
          : "https://i.ytimg.com/vi/jCY6DH8F4oc/maxresdefault.jpg";
      await miniUpdate(currentuser.id, activeplaylist.Id, {
        Thumbnail: thumb,
        Items: readyitems,
      });
      handleFetchuserData(currentuser.id);
      enqueueSnackbar("Deleted Successfully", {
        variant: "success",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <EditScreenArea>
        <DetailsBlock playlist={activeplaylist} play={handleplay} />
        <ItemsBlock>
          {activeplaylist.Items.filter((e) => {
            return e["videoTitle"].toLowerCase().includes(searchValue);
          }).map((element) => {
            return (
              <EditPlaylistItem
                key={element.id}
                data={element}
                jump={handleplay}
                remove={deletevideo}
              />
            );
          })}
        </ItemsBlock>
      </EditScreenArea>
    </>
  );
};

export default Edit;
