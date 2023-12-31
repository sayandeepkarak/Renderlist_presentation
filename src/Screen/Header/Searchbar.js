import React, { useState } from "react";
import { AvailableBlock } from "../../Components/styles/Div";
import {
  BackButton,
  ButtonIcon,
  SearchBarArea,
  SearchButton,
  SearchInput,
} from "../../Components/styles/Search";
import searchicon from "../../Assets/Images/searchicon.png";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useCrudContext } from "../../Context/CrudContext";

const Searchbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const { searchValue, setupsearch } = useCrudContext();
  const handleOpenSearch = () => setOpenSearch(!openSearch);
  const handleSearch = (e) => setupsearch(e.target.value);
  return (
    <>
      <AvailableBlock open={openSearch}>
        <BackButton open={openSearch} onClick={handleOpenSearch}>
          <ArrowBackOutlinedIcon />
        </BackButton>
        <SearchBarArea open={openSearch}>
          <SearchInput
            value={searchValue}
            onInput={handleSearch}
            autoComplete="off"
          />
          <SearchButton open={openSearch} onClick={handleOpenSearch}>
            <ButtonIcon src={searchicon} />
          </SearchButton>
        </SearchBarArea>
      </AvailableBlock>
    </>
  );
};
export default Searchbar;
