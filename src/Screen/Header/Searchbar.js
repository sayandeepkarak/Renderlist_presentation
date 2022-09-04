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
import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../App/searchValueSlice";
// import { searchfilter } from "../../App/allDataSlice";

const Searchbar = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.searchValueReducers.value);
  // const allPlaylists = useSelector((state) => state.allPlayListReducers.value);

  const [openSearch, setOpenSearch] = useState(false);
  const handleOpenSearch = () => {
    setOpenSearch(!openSearch);
    console.log(openSearch);
  };

  const handleSearch = (e) => {
    dispatch(setSearchValue(e.target.value));
    // if (searchValue !== "") {
    //   dispatch(
    //     searchfilter(
    //       allPlaylists.filter((data) => data.Title.includes(searchValue))
    //     )
    //   );
    // } else {
    //   dispatch(searchfilter(allPlaylists));
    // }
  };

  return (
    <>
      <AvailableBlock open={openSearch}>
        <BackButton open={openSearch} onClick={handleOpenSearch}>
          <ArrowBackOutlinedIcon />
        </BackButton>
        <SearchBarArea open={openSearch}>
          <SearchInput value={searchValue} onChange={handleSearch} />
          <SearchButton open={openSearch} onClick={handleOpenSearch}>
            <ButtonIcon src={searchicon} />
          </SearchButton>
        </SearchBarArea>
      </AvailableBlock>
    </>
  );
};
export default Searchbar;
