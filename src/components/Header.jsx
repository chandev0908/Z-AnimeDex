import React from "react";

function Header() {
  return (
    <div className="pl-4 pr-4 h-12 md:h-16 lg:h-20 flex flex-wrap bg-primary text-white header justify-items-center content-center">
      <div className="menubar flex flex-wrap flex-1 justify-start content-center flex-1 md:hidden">
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
            d="M4 6h16M4 12h16M4 18h7"
          />
        </svg>
      </div>
      <div className="brandname flex-1 text-xl sm:text-xl font-body">
        <span>Z</span>
        <span className="text-orange">-</span>
        <span className="text-lightblue">AnimeIndex</span>
      </div>
      <div className="search flex flex-wrap flex-1 justify-end items-center gap-1">
        <input
          className="rounded hidden md:block p-1 text-black"
          type="text"
          name="search"
          id="searchId"
          placeholder="text"
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
    </div>
  );
}
export default Header;
