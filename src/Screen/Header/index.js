import React from "react";
import { Navbar, ToolArea } from "../../Components/Navbar";
import Searchbar from "./Searchbar";
import NavBarButton from "./NavBarButton";
import Logo from "../../Assets/Images/Logo.png";
import { LogoImage } from "../../Components/Image";
import { LogoText } from "../../Components/Text";
import { LogoTextArea } from "../../Components/Div";

const Header = () => {
  return (
    <Navbar>
      <ToolArea>
        <LogoImage src={Logo} />
        <LogoTextArea>
          <LogoText>Render</LogoText>
          <LogoText>List</LogoText>
        </LogoTextArea>
        <Searchbar />
        <NavBarButton />
      </ToolArea>
    </Navbar>
  );
};

export default Header;
