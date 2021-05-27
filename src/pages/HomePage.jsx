import React from "react";
import SearchBar from "../components/searchBar";

function landingPage() {
  return (
    <div className="homepage m-auto bg-primary h-screen grid grid-flow-row place-content-center gap-y-2">
      <div className="brandname flex-1 font-body text-white text-center text-xxl z-10">
        <span>Z</span>
        <span className="text-orange">-</span>
        <span className="text-lightblue">AnimeIndex</span>
      </div>
      <SearchBar></SearchBar>
      <div className="scroll-down grid grid-flow-row place-items-center text-white pt-40 animate-bounce">
        <h4>Scroll Down</h4>
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
            d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}

export default landingPage;
