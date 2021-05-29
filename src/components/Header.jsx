import React, { useContext, useEffect, useRef, useState } from "react";
import { HomepageContext } from "../Context/HomepageContext";
function Header() {
  const searchInputs = useRef(null);
  const headerRef = useRef(null);
  const searchOnClick = () => {
    if (searchInputs.current.classList.contains("opacity-0")) {
      searchInputs.current.classList.remove(
        "transform",
        "-translate-y-8",
        "opacity-0"
      );
    } else {
      searchInputs.current.classList.add(
        "transform",
        "-translate-y-8",
        "opacity-0"
      );
    }
  };
  const { toggleSidebar, setToggleSidebar } = useContext(HomepageContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    if (position > 380) {
      headerRef.current.classList.remove("-translate-y-24");
    } else if (position < 380) {
      headerRef.current.classList.add("-translate-y-24");
    }
  };

  const onClickToggle = () => {
    toggleSidebar ? setToggleSidebar(false) : setToggleSidebar(true);
  };
  useEffect(() => {
    window.addEventListener("onload", handleScroll, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      ref={headerRef}
      className="fixed w-full header transition-all duration-700 ease-in-out transform -translate-y-24 z-10"
    >
      <div className="main-header border-b-2 pl-4 border-lightblue pr-4 h-12 md:h-16 lg:h-20 w-full flex flex-wrap bg-secondary text-white header justify-items-center content-center z-10">
        <div className="menubar flex flex-wrap flex-1 justify-start content-center flex-1 md:hidden">
          <svg
            className="w-6 h-6 cursor-pointer"
            onClick={onClickToggle}
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
        <div className="brandname transition-all duration-700 ease-in-out flex-1 text-xl md:text-primSize lg:text-xxl font-body flex justify-center cursort-pointer">
          <span>Z</span>
          <span className="text-orange">-</span>
          <span className="text-lightblue">AnimeIndex</span>
        </div>
        <div className="search flex flex-wrap flex-1 justify-end items-center gap-1">
          <input
            className="rounded hidden md:block p-1 text-black"
            type="text"
            name="search"
            placeholder="Search Anime or Manga"
          />
          <svg
            onClick={searchOnClick}
            className="w-6 h-6 cursor-pointer"
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
      <div className="search text-white bg-transparent flex gap-1 items-center">
        <input
          ref={searchInputs}
          id="searchInp"
          className="rounded bg-red-700 w-full md:block p-1 text-black transition-all duration-300 ease-in-out transform -translate-y-24 opacity-0 z-0"
          type="text"
          name="search"
          placeholder="Search Anime or Manga"
        />
      </div>
    </div>
  );
}
export default Header;
