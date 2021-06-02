import React from "react";
import { useHistory } from "react-router";

function SearchBar() {
  const history = useHistory();
  const search = (e) => {
    history.push(`/search/${e.target["search"].value}`);
  };
  
  return (
      <form action="" onSubmit={search} className="flex flex-wrap flex-1 justify-center items-center gap-1 text-white">
        <input
          className="transition-all duration-700 ease-in-out rounded p-1.5 md:p-2 lg:p-3 text-black w-64 md:w-80 lg:w-96 border-1 border-lightblue focus:border-lightblue"
          type="text"
          name="search"
          id="searchId"
          placeholder="Search for your favorite anime or manga"
        />
        <svg
          className="transition-all duration-5000 ease-in-out w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 cursor-pointer"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </form>
  );
}

export default SearchBar;
