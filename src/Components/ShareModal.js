import React, { useState } from "react";
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
  const [copy, setCopy] = useState(false);
  const shareData = {
    url: `https://renderlist.logonetek.com/watch/${props.data.Id}/${props.data.Items[0].id}`,
    title: `Share your youtube video collections with others\nShare your learning Roadmap with your friends\nJoin renderlist now\nDeveloped by -> Sayandeep Karak\nPlaylist -> ${props.data.Title}\n`,
  };

  const handleCopy = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(shareData.url);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 6000);
  };

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
          <CreateButton
            disabled={copy}
            bg="#242560"
            shadow="#a3abed"
            onClick={handleCopy}
          >
            <span>{copy ? "Copied" : "Copy"}</span>
          </CreateButton>
        </RowFlex>
      </ModalBlock>
    </>
  );
};

export default ShareModal;
