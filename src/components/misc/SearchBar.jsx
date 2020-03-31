import React, { useState } from "react";
import { ReactComponent as MagnifyingGlass } from "../../build/images/magnifying-glass.svg";

const SearchBar = ({ extraClasses }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    console.log(searchValue);
  };

  return (
    <div className={`search ${extraClasses}`}>
      <input
        className="search__input"
        onKeyDown={event => (event.key === "Enter" ? handleSearch() : null)}
        onChange={event => setSearchValue(event.target.value)}
        placeholder="Busca"
      />
      <div className="search__btn">
        <MagnifyingGlass onClick={handleSearch} />
      </div>
    </div>
  );
};

export default SearchBar;
