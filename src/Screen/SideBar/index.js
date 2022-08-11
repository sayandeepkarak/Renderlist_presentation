import React from "react";
import { RoundedButton } from "../../Components/Button";
import { RoundedButtonIcon, SideBarArea } from "../../Components/Sidebar";
import homeicon from "../../Assets/Images/home.png";
import listicon from "../../Assets/Images/list.png";
import saveicon from "../../Assets/Images/save.png";

const SideBar = () => {
  return (
    <>
      <SideBarArea>
        <RoundedButton to="/home">
          <RoundedButtonIcon src={homeicon} />
        </RoundedButton>
        <RoundedButton to="/playlists">
          <RoundedButtonIcon src={listicon} />
        </RoundedButton>
        <RoundedButton to="/save">
          <RoundedButtonIcon src={saveicon} />
        </RoundedButton>
      </SideBarArea>
    </>
  );
};

export default SideBar;
