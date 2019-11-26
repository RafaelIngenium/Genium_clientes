import React from "react";
import { ReactComponent as MagnifyingGlass } from "../../assets/images/magnifying-glass.svg";

const SearchBar = ({ extraClasses }) => {
  return (
    <div className={`search ${extraClasses}`}>
      <input className="search__input" placeholder="Busca" />
      <div className="search__btn">
        <MagnifyingGlass />
      </div>
    </div>
  );
};

export default SearchBar;
