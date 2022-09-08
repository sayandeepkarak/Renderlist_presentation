import React from "react";
import {
  CreateButton,
  ModalBlock,
  Input,
  PopUpHead,
  PopUpTitle,
  RowFlex,
} from "./Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const ShareModal = (props) => {
  const handleClose = () => props.close();
  const shareData = {
    url: `https://renderlist.logonetek.com/watch/${props.data.Id}/${props.data.Items[0].id}`,
    title: `Explore and share your video experience with RenderList \nPlaylist -> ${props.data.Title}\n`,
  };

  const handleCopy = () => navigator.clipboard.writeText(shareData.url);

  return (
    <>
      <ModalBlock>
        <PopUpHead>
          <PopUpTitle>
            <span>Share Playlist</span>
          </PopUpTitle>
          <IconButton size="large" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </PopUpHead>
        <RowFlex>
          <FacebookShareButton url={shareData.url} title={shareData.title}>
            <FacebookIcon lightingColor="white" round={true}></FacebookIcon>
          </FacebookShareButton>
          <WhatsappShareButton url={shareData.url} title={shareData.title}>
            <WhatsappIcon lightingColor="white" round={true}></WhatsappIcon>
          </WhatsappShareButton>
          <LinkedinShareButton url={shareData.url} title={shareData.title}>
            <LinkedinIcon lightingColor="white" round={true}></LinkedinIcon>
          </LinkedinShareButton>
          <TwitterShareButton url={shareData.url} title={shareData.title}>
            <TwitterIcon lightingColor="white" round={true}></TwitterIcon>
          </TwitterShareButton>
        </RowFlex>
        <RowFlex>
          <Input name="url" value={shareData.url} disabled={true} />
          <CreateButton bg="#242560" shadow="#a3abed" onClick={handleCopy}>
            <span>Copy</span>
          </CreateButton>
        </RowFlex>
      </ModalBlock>
    </>
  );
};

export default ShareModal;
