import React from "react";
import { RoundedButton } from "../../Components/Button";
import { SideBarArea } from "../../Components/Sidebar";
import { Image } from "../../Components/Image";
import homeicon from "../../Assets/Images/home.png";
import listicon from "../../Assets/Images/list.png";
import saveicon from "../../Assets/Images/save.png";

const SideBar = () => {
  return (
    <>
      <SideBarArea>
        <RoundedButton to="/home">
          <Image src={homeicon} />
        </RoundedButton>
        <RoundedButton to="/playlists">
          <Image src={listicon} />
        </RoundedButton>
        <RoundedButton to="/save">
          <Image src={saveicon} />
        </RoundedButton>
      </SideBarArea>
    </>
  );
};

export default SideBar;
