import React from "react";
import { Navbar, ToolArea } from "../../Components/Navbar";
import Searchbar from "./Searchbar";
import NavBarButton from "./NavBarButton";
import { LogoText } from "../../Components/Text";

const Header = () => {
  return (
    <Navbar>
      <ToolArea>
        <LogoText>RenderList</LogoText>
        <Searchbar />
        <NavBarButton />
      </ToolArea>
    </Navbar>
  );
};

export default Header;
