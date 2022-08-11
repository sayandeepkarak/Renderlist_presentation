import React from "react";
import { AvailableBlock } from "../../Components/Div";
import {
  ButtonIcon,
  SearchBarArea,
  SearchButton,
  SearchInput,
} from "../../Components/Search";
import searchicon from "../../Assets/Images/searchicon.png";

const Searchbar = () => {
  return (
    <>
      <AvailableBlock>
        <SearchBarArea>
          <SearchInput />
          <SearchButton>
            <ButtonIcon src={searchicon} />
          </SearchButton>
        </SearchBarArea>
      </AvailableBlock>
    </>
  );
};
export default Searchbar;
