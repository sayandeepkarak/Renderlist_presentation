import React, { useState } from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Shareicon from "../../Assets/Images/share.png";
import Hideicon from "../../Assets/Images/Hide.png";
import Deleteicon from "../../Assets/Images/delete.png";
import rateicon from "../../Assets/Images/rate.png";
import { Image } from "../styles/Image";
import { Divider, ListItemIcon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Modal from "@mui/material/Modal";
import AddModal from "../Modals/AddModal";
import ShareModal from "../Modals/ShareModal";
import Skeleton from "@mui/material/Skeleton";
import DeleteModal from "../Modals/DeleteModal";
import { useFunctionContext } from "../../Context/FunctionContext";

const CardBlock = styled.div.attrs({ className: "playlist-cards" })`
  position: relative;
  width: -webkit-fill-available;
  width: -moz-available;
  max-width: 20vw;
  height: min-content;
  margin-bottom: 1vw;
  cursor: pointer;
  @media (max-width: 880px) {
    max-width: 26vw;
  }
  @media (max-width: 790px) {
    max-width: 30vw;
  }
  @media (max-width: 600px) {
    max-width: 49%;
  }
  @media (max-width: 530px) {
    max-width: 100%;
  }
`;

const Thumbnail = styled.img.attrs({
  alt: "",
})`
  width: 100%;
  @media (min-width: 530px) {
    border-radius: 5px;
  }
`;

const RatingBox = styled.div`
  position: absolute;
  background-color: #000;
  right: 0.5vw;
  top: 9.5vw;
  width: 3vw;
  height: 1.4vw;
  display: flex;
  border-radius: 4px;
  justify-content: space-evenly;
  align-items: center;
  span {
    font-size: 0.8vw;
    font-family: "Poppins", sans-serif;
    color: #fff;
  }
  img {
    width: 28%;
  }
  @media (max-width: 1100px) {
    right: 0.3vw;
  }
  @media (max-width: 1024px) {
    top: 9.4vw;
  }
  @media (max-width: 880px) {
    top: 12.5vw;
    right: 0.6vw;
    width: 3.5vw;
    height: 1.6vw;
  }
  @media (max-width: 790px) {
    top: 14.5vw;
    right: 0.6vw;
    width: 3.5vw;
    height: 1.6vw;
  }
  @media (max-width: 600px) {
    top: 22vw;
    right: 1vw;
    width: 5vw;
    height: 2.5vw;
    span {
      font-size: 1.4vw;
    }
  }
  @media (max-width: 530px) {
    top: 51vw;
    right: 10px;
    width: 38px;
    height: 20px;
    span {
      font-size: 10px;
    }
  }
  @media (max-width: 425px) {
    top: 50vw;
    right: 7px;
    width: 36px;
    height: 17px;
  }
  @media (max-width: 330px) {
    top: 160px;
    width: 34px;
  }
`;

const BottomArea = styled.div`
  margin-top: 0.2vw;
  width: 100%;
  height: auto;
  padding-left: 2%;
  display: flex;
  align-items: start;
  justify-content: center;
`;

const TitleArea = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  align-items: start;
  flex-direction: column;
`;

export const Title = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 0.9vw;
  font-weight: bold;
  opacity: 0.9;
  line-height: 1.1vw;
  display: block;
  display: -webkit-box;
  height: min-content;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  @media (max-width: 880px) {
    font-size: 1.3vw;
    line-height: 1.6vw;
  }
  @media (max-width: 600px) {
    font-size: 1.8vw;
    line-height: 2.1vw;
  }
  @media (max-width: 530px) {
    font-size: 13px;
    line-height: 18px;
  }
  @media (max-width: 378px) {
    font-size: 12px;
    line-height: 16px;
  }
`;

export const NameText = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 0.75vw;
  text-transform: capitalize;
  color: #888888;
  line-height: 1.1vw;
  @media (max-width: 880px) {
    font-size: 1.1vw;
    line-height: 1.6vw;
  }
  @media (max-width: 600px) {
    font-size: 1.4vw;
    line-height: 1.8vw;
  }
  @media (max-width: 530px) {
    font-size: 10px;
    line-height: 14px;
  }
  @media (max-width: 378px) {
    font-size: 9px;
    line-height: 13px;
  }
`;

const ViewText = styled(NameText)`
  font-size: 0.89vw;
  width: inherit;
  display: flex;
  gap: 1%;
  li span {
    position: relative;
    left: -14%;
  }
  @media (max-width: 880px) {
    font-size: 1.2vw;
  }
  @media (max-width: 600px) {
    font-size: 1.6vw;
  }
  @media (max-width: 530px) {
    font-size: 11px;
  }
  @media (max-width: 378px) {
    font-size: 10px;
  }
`;

export const CardMenu = styled(Menu).attrs({
  id: "video_menu",
  MenuListProps: {
    "aria-labelledby": "video_menu_btn",
  },
})`
  ul {
    padding: 0;
    width: 10vw;
    li {
      font-family: "Poppins", sans-serif;
      color: #757575;
      @media (max-width: 600px) {
        min-height: 39px;
      }
    }
    @media (max-width: 1440px) {
      width: 166px;
    }
  }
`;

export const Card = ({
  hide,
  data,
  remove,
  editaccess,
  videoPlayer,
  viewCount,
  viewCounter,
  loading,
  hascontrol,
  menuControl,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [addmodalOpen, setaddmodalOpen] = useState(false);
  const [shareModalOpen, setshareModalOpen] = useState(false);
  const [deleteModalOpen, setdeleteModalOpen] = useState(false);
  const menuopen = Boolean(anchorEl);
  const navigate = useNavigate();
  const { convertview } = useFunctionContext();
  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleHide = () => {
    setAnchorEl(null);
    hide(data.Id, !data.Hide);
  };
  const deletePlaylist = () => {
    setAnchorEl(null);
    remove(data.Id);
  };
  const handleopenvideoplayer = () => {
    editaccess && navigate(`/save/${data.Id}`);
    if (videoPlayer) {
      if (viewCount) {
        viewCounter(data.userId, data.Id, data.Views + 1);
      }
      navigate(`/watch/${data.Id}/${data.Items[0].id}`);
    }
  };

  const handleaddModalOpen = () => setaddmodalOpen(true);
  const handleaddModalClose = () => setaddmodalOpen(false);

  const handleshareModalOpen = () => {
    setshareModalOpen(true);
    setAnchorEl(null);
  };

  const handledeleteModalOpen = () => {
    setdeleteModalOpen(true);
  };

  const handleshareModalClose = () => setshareModalOpen(false);
  const handledeleteModalClose = () => setdeleteModalOpen(false);

  const AddModalPop = React.forwardRef((props, ref) => (
    <AddModal {...props} innerRef={ref} />
  ));

  const SocialShareModal = React.forwardRef((props, ref) => (
    <ShareModal {...props} innerRef={ref} />
  ));

  const DeletePlaylistModal = React.forwardRef((props, ref) => (
    <DeleteModal {...props} innerRef={ref} />
  ));

  return (
    <>
      {loading ? (
        <>
          <CardBlock>
            <Skeleton
              variant="rectangular"
              width="100%"
              sx={{
                maxWidth: "410px",
                borderRadius: "5px",
                height: "180px",
                "@media(max-width:600px)": {
                  maxWidth: "unset",
                },
              }}
            />
            <Skeleton
              height={30}
              width="100%"
              sx={{
                mt: "5px",
                borderRadius: "5px",
                maxWidth: "410px",
                "@media(max-width:600px)": {
                  maxWidth: "unset",
                },
              }}
            />
            <Skeleton width="60%" />
          </CardBlock>
        </>
      ) : (
        <CardBlock>
          <Thumbnail src={data.Thumbnail} onClick={handleopenvideoplayer} />
          <RatingBox>
            <span>4.2</span>
            <img src={rateicon} alt="" />
          </RatingBox>
          <BottomArea>
            <TitleArea>
              <Title>{data.Title}</Title>
              <NameText>{data.UserName}</NameText>
              <ViewText>
                {convertview(data.Views)} views
                <li>
                  <span> {data.Items.length} videos</span>
                </li>
              </ViewText>
            </TitleArea>
            {hascontrol && (
              <>
                {menuControl ? (
                  <>
                    <IconButton
                      size="small"
                      id="video_menu_btn"
                      aria-controls={menuopen ? "video_menu_btn" : undefined}
                      aria-haspopup="true"
                      aria-expanded={menuopen ? "true" : undefined}
                      onClick={handleClick}
                      sx={{ ml: "auto" }}
                    >
                      <MoreVertIcon size="small" />
                    </IconButton>
                    <CardMenu
                      anchorEl={anchorEl}
                      open={menuopen}
                      onClose={handleClose}
                    >
                      <MenuItem onClick={handleshareModalOpen}>
                        <ListItemIcon>
                          <Image src={Shareicon} />
                        </ListItemIcon>
                        Share
                      </MenuItem>
                      <MenuItem onClick={handleHide}>
                        <ListItemIcon>
                          <Image src={Hideicon} />
                        </ListItemIcon>
                        {data.Hide ? "Public" : "Private"}
                      </MenuItem>
                      <Divider style={{ margin: "0px" }} />
                      <MenuItem
                        onClick={handledeleteModalOpen}
                        style={{ color: "#D32F2F" }}
                      >
                        <ListItemIcon>
                          <Image src={Deleteicon} />
                        </ListItemIcon>
                        Delete
                      </MenuItem>
                    </CardMenu>
                    <Modal
                      open={shareModalOpen}
                      onClose={handleshareModalClose}
                    >
                      <SocialShareModal
                        data={data}
                        close={handleshareModalClose}
                      />
                    </Modal>
                    <Modal
                      open={deleteModalOpen}
                      onClose={handledeleteModalClose}
                    >
                      <DeletePlaylistModal
                        title={data.Title}
                        remove={deletePlaylist}
                        close={handledeleteModalClose}
                      />
                    </Modal>
                  </>
                ) : (
                  <>
                    <IconButton
                      size="small"
                      sx={{ ml: 1 }}
                      onClick={handleaddModalOpen}
                    >
                      <ControlPointIcon />
                    </IconButton>
                    <Modal open={addmodalOpen} onClose={handleaddModalClose}>
                      <AddModalPop data={data.Id} close={handleaddModalClose} />
                    </Modal>
                  </>
                )}
              </>
            )}
          </BottomArea>
        </CardBlock>
      )}
    </>
  );
};
