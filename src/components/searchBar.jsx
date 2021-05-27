import React from "react";

function searchBar() {
  return ( 
    <div className="text-white search flex flex-wrap flex-1 justify-center items-center gap-1 z-10">
      <input
        className="rounded p-1.5 text-black w-64 border-1 border-lightblue focus:border-lightblue"
        type="text"
        name="search"
        id="searchId"
        placeholder="Search for your favorite anime or manga"
      />
      <svg
        className="w-6 h-6"
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
    </div>
  );
}

export default searchBar;
