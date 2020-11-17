import React, { useState, useRef } from "react";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";

import {
  StyledSearchBar,
  StyledSearchBarContent,
} from "../styles/StyledSearchBar";
import RatingsFilter from "./RatingsFilter";

const SearchBar = ({ callback }) => {
  const [state, setState] = useState("");
  const timeOut = useRef(null);

  const doSearch = (event) => {
    const { value } = event.target;
    clearTimeout(timeOut.current);
    setState(value);

    timeOut.current = setTimeout(() => {
      callback(value);
    }, 1000);
  };

  return (
    <>
      <StyledSearchBar>
        <StyledSearchBarContent>
          <FontAwesome className="fa-search" name="search" size="2x" />
          <input
            type="text"
            placeholder="search e.g. Captain Marvel"
            onChange={doSearch}
            value={state}
          />
        </StyledSearchBarContent>
        {state === "" && <RatingsFilter />}
      </StyledSearchBar>
    </>
  );
};

SearchBar.propTypes = {
  callback: PropTypes.func,
};

export default SearchBar;
