import React from "react";
import { RoundedButton } from "../../Components/styles/Button";
import { RoundedButtonIcon, SideBarArea } from "../styles/Sidebar";
import homeicon from "../../Assets/Images/home.png";
import listicon from "../../Assets/Images/list.png";
import saveicon from "../../Assets/Images/save.png";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const SideBar = () => {
  return (
    <>
      <SideBarArea>
        <RoundedButton to="/home">
          <HomeOutlinedIcon />
          <RoundedButtonIcon src={homeicon} />
        </RoundedButton>
        <RoundedButton to="/playlists">
          <ListOutlinedIcon />
          <RoundedButtonIcon src={listicon} />
        </RoundedButton>
        <RoundedButton to="/save">
          <SaveOutlinedIcon />
          <RoundedButtonIcon src={saveicon} />
        </RoundedButton>
      </SideBarArea>
    </>
  );
};

export default SideBar;
