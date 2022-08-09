import React, { useState } from "react";
import { AvailableBlock } from "../../Components/Div";
import {
  SearchBarArea,
  SearchButton,
  SearchInput,
} from "../../Components/Search";
import { Image } from "../../Components/Image";
import searchicon from "../../Assets/Images/searchicon.png";

const Searchbar = () => {
  const [focusinput, setfocusinput] = useState(false);
  const handlefocus = () => setfocusinput(!focusinput);

  return (
    <>
      <AvailableBlock>
        <SearchBarArea shadow={focusinput}>
          <SearchInput onClick={handlefocus} onBlur={handlefocus} />
          <SearchButton>
            <Image src={searchicon} />
          </SearchButton>
        </SearchBarArea>
      </AvailableBlock>
    </>
  );
};
export default Searchbar;
