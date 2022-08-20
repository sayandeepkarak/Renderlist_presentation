import React, { useState } from "react";
import { AvailableBlock } from "../../Components/Div";
import {
  BackButton,
  ButtonIcon,
  SearchBarArea,
  SearchButton,
  SearchInput,
} from "../../Components/Search";
import searchicon from "../../Assets/Images/searchicon.png";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const Searchbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const handleOpenSearch = () => {
    setOpenSearch(!openSearch);
    console.log(openSearch);
  };
  return (
    <>
      <AvailableBlock open={openSearch}>
        <BackButton open={openSearch} onClick={handleOpenSearch}>
          <ArrowBackOutlinedIcon />
        </BackButton>
        <SearchBarArea open={openSearch}>
          <SearchInput />
          <SearchButton open={openSearch} onClick={handleOpenSearch}>
            <ButtonIcon src={searchicon} />
          </SearchButton>
        </SearchBarArea>
      </AvailableBlock>
    </>
  );
};
export default Searchbar;
