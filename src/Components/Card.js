import React, { useState } from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Shareicon from "../Assets/Images/share.png";
import Hideicon from "../Assets/Images/Hide.png";
import Deleteicon from "../Assets/Images/delete.png";
import rateicon from "../Assets/Images/rate.png";
import { Image } from "./Image";
import { Divider, ListItemIcon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Modal from "@mui/material/Modal";
import AddModal from "./AddModal";
import ShareModal from "./ShareModal";

const CardBlock = styled.div.attrs({ className: "playlist-cards" })`
  position: relative;
  width: -webkit-fill-available;
  max-width: 20vw;
  height: min-content;
  margin-bottom: 1vw;
  cursor: pointer;
  @media (max-width: 880px) {
    max-width: 100%;
  }
`;

const Thumbnail = styled.img.attrs({
  alt: "",
})`
  width: 100%;
`;

const RatingBox = styled.div`
  position: absolute;
  background-color: #000;
  right: 0.5vw;
  top: 9.5vw;
  width: 3vw;
  height: 1.4vw;
  display: flex;
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

const CardMenu = styled(Menu).attrs({
  id: "video_menu_btn",
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

export const Card = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [addmodalOpen, setaddmodalOpen] = useState(false);
  const [shareModalOpen, setshareModalOpen] = useState(false);
  const menuopen = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleHide = () => {
    setAnchorEl(null);
    props.hide(props.data.Id, !props.data.Hide);
  };
  const deletePlaylist = () => {
    setAnchorEl(null);
    props.delete(props.data.Id);
  };
  const handleopenvideoplayer = () => {
    if (props.videoPlayer) {
      if (props.viewCount) {
        props.viewCounter(props.data.Id, props.data.Views + 1);
      }
      navigate(`/watch/${props.data.Id}/${props.data.Items[0].id}`);
    }
  };
  const convertview = (views) => {
    let view;
    if ((views > 999) & (views <= 999999)) {
      view = (views / 1000).toFixed(0).toString() + "k";
    } else if ((views > 999999) & (views < 999999999)) {
      view = (views / 1000000).toFixed(0).toString() + "M";
    } else if ((views > 999999999) & (views < 999999999999)) {
      view = (views / 1000000000).toFixed(0).toString() + "B";
    } else {
      return views;
    }
    return view;
  };

  const handleaddModalOpen = () => setaddmodalOpen(true);
  const handleaddModalClose = () => setaddmodalOpen(false);

  const handleshareModalOpen = () => {
    setshareModalOpen(true);
    setAnchorEl(null);
  };

  const handleshareModalClose = () => setshareModalOpen(false);

  const AddModalPop = React.forwardRef((props, ref) => (
    <AddModal {...props} innerRef={ref} />
  ));

  const SocialShareModal = React.forwardRef((props, ref) => (
    <ShareModal {...props} innerRef={ref} />
  ));

  return (
    <>
      <CardBlock>
        <Thumbnail src={props.data.Thumbnail} onClick={handleopenvideoplayer} />
        <RatingBox>
          <span>4.2</span>
          <img src={rateicon} alt="" />
        </RatingBox>
        <BottomArea>
          <TitleArea>
            <Title>{props.data.Title}</Title>
            <NameText>{props.data.UserName}</NameText>
            <ViewText>
              {convertview(props.data.Views)} views
              <li>
                <span> {props.data.Items.length} items</span>
              </li>
            </ViewText>
          </TitleArea>
          {props.hascontrol && (
            <>
              {props.menuControl ? (
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
                      {props.data.Hide ? "Public" : "Private"}
                    </MenuItem>
                    <Divider style={{ margin: "0px" }} />
                    <MenuItem
                      onClick={deletePlaylist}
                      style={{ color: "#D32F2F" }}
                    >
                      <ListItemIcon>
                        <Image src={Deleteicon} />
                      </ListItemIcon>
                      Delete
                    </MenuItem>
                  </CardMenu>
                  <Modal open={shareModalOpen} onClose={handleshareModalClose}>
                    <SocialShareModal
                      data={props.data}
                      close={handleshareModalClose}
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
                    <AddModalPop
                      data={props.data.Id}
                      close={handleaddModalClose}
                    />
                  </Modal>
                </>
              )}
            </>
          )}
        </BottomArea>
      </CardBlock>
    </>
  );
};
