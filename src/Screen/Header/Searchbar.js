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
import { fetchallplaylists, searchfilter } from "../../App/allDataSlice";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";

const Searchbar = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.searchValueReducers.value);
  const allPlaylists = useSelector((state) => state.allPlayListReducers.value);

  const [openSearch, setOpenSearch] = useState(false);
  const handleOpenSearch = () => {
    setOpenSearch(!openSearch);
  };

  const handleSearch = async (e) => {
    dispatch(setSearchValue(e.target.value));
    if (e.target.value.length === 0) {
      try {
        const data = await getDocs(collection(db, "Playlists"));
        dispatch(fetchallplaylists(data.docs));
      } catch (err) {
        console.error(err);
      }
    } else {
      dispatch(
        searchfilter(
          allPlaylists.filter((data) =>
            data.Title.toLowerCase().includes(searchValue.toLowerCase())
          )
        )
      );
    }
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
