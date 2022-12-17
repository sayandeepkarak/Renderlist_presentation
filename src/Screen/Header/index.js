import React from "react";
import { Navbar, ToolArea } from "../../Components/styles/Navbar";
import Searchbar from "./Searchbar";
import NavBarButtonBlock from "./NavBarButtonBlock";
import Logo from "../../Assets/Images/Logo.png";
import { LogoImage } from "../../Components/styles/Image";
import { LogoText } from "../../Components/styles/Text";
import { LogoTextArea } from "../../Components/styles/Div";

const Header = () => {
  const jumpTohome = () =>
    (window.location.href = "https://renderlist.logonetek.com/home");
  return (
    <Navbar>
      <ToolArea>
        <LogoImage onClick={jumpTohome} src={Logo} />
        <LogoTextArea>
          <LogoText>Render</LogoText>
          <LogoText>List</LogoText>
        </LogoTextArea>
        <Searchbar />
        <NavBarButtonBlock />
      </ToolArea>
    </Navbar>
  );
};

export default Header;
