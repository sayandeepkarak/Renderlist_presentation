import React, { useState } from "react";
import styled from "styled-components";
import thumb from "../Assets/Images/Thumbnail.png";
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

const CardBlock = styled.div`
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
  top: 10.5vw;
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
    top: 10.4vw;
  }
  @media (max-width: 880px) {
    top: 60%;
    right: 0.4vw;
    width: 3.5vw;
    height: 1.6vw;
  }
  @media (max-width: 600px) {
    top: 64%;
    right: 1vw;
    width: 5vw;
    height: 2.5vw;
    span {
      font-size: 1.4vw;
    }
  }
  @media (max-width: 530px) {
    top: 70%;
    right: 10px;
    width: 38px;
    height: 20px;
    span {
      font-size: 10px;
    }
  }
  @media (max-width: 530px) {
    top: 70%;
  }
  @media (max-width: 450px) {
    top: 68%;
  }
  @media (max-width: 430px) {
    top: 66%;
  }
  @media (max-width: 400px) {
    top: 66%;
    right: 7px;
    width: 36px;
    height: 17px;
  }
  @media (max-width: 365px) {
    top: 65%;
    width: 34px;
  }
  @media (max-width: 355px) {
    top: 63%;
    width: 34px;
  }
`;

const BottomArea = styled.div`
  margin-top: 0.2vw;
  width: 100%;
  height: auto;
  padding-left: 2%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
`;

const TitleArea = styled.div`
  width: 100%;
  height: min-content;
  display: flex;
  align-items: start;
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
  line-height: 1.3vw;
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
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const handleopenvideoplayer = () => {
    navigate("/watch");
  };

  return (
    <>
      <CardBlock>
        <Thumbnail src={thumb} onClick={handleopenvideoplayer} />
        <RatingBox>
          <span>4.2</span>
          <img src={rateicon} alt="" />
        </RatingBox>
        <BottomArea>
          <TitleArea>
            <Title>
              How to Customize Windows Without Rainmeter and Third Party Skin
              Packs
            </Title>
            {props.hascontrol && (
              <>
                <IconButton
                  size="small"
                  id="video_menu_btn"
                  aria-controls={open ? "video_menu_btn" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <MoreVertIcon size="small" />
                </IconButton>
                <CardMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Image src={Shareicon} />
                    </ListItemIcon>
                    Share
                  </MenuItem>
                  {props.hasfullcontrol && (
                    <MenuItem onClick={handleClose}>
                      <ListItemIcon>
                        <Image src={Hideicon} />
                      </ListItemIcon>
                      Hide
                    </MenuItem>
                  )}
                  <Divider style={{ margin: "0px" }} />
                  <MenuItem onClick={handleClose} style={{ color: "#D32F2F" }}>
                    <ListItemIcon>
                      <Image src={Deleteicon} />
                    </ListItemIcon>
                    Delete
                  </MenuItem>
                </CardMenu>
              </>
            )}
          </TitleArea>
          <NameText>nova_master</NameText>
          <ViewText>
            12K views
            <li>
              <span>10 items</span>
            </li>
          </ViewText>
        </BottomArea>
      </CardBlock>
    </>
  );
};
