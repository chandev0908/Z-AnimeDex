import React, { useContext, useEffect, useRef } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { HomepageContext } from "../Context/HomepageContext";
function Header(bool) {
  const history = useHistory();
  const searchInputs = useRef(null);
  const hRef = useRef(null);
  const searchOnClick = () => {
    if (searchInputs.current.classList.contains("opacity-0")) {
      searchInputs.current.classList.remove(
        "transform",
        "-translate-y-20",
        "opacity-0",
        "hidden"
      );
    } else {
      searchInputs.current.classList.add(
        "transform",
        "-translate-y-20",
        "opacity-0",
        "hidden"
      );
    }
  };
  const { toggleSidebar, setToggleSidebar } = useContext(HomepageContext);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 280) {
      hRef.current.classList.replace("-translate-y-24", "-translate-y-0");
    } else if (position < 280) {
      hRef.current.classList.replace("-translate-y-0", "-translate-y-24");
    }
  };

  const onClickToggle = () => {
    toggleSidebar ? setToggleSidebar(false) : setToggleSidebar(true);
  };
  const search = (e) => {
    e.preventDefault();
    history.push(`/search/${e.target["search"].value}`);
    searchOnClick();
  };
  useEffect(() => {
    searchInputs.current.focus();
    if (bool.active) {
      hRef.current.classList.replace("-translate-y-24", "-translate-y-0");
    } else {
      window.addEventListener("onload", handleScroll, { passive: true });
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("onload", handleScroll);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [bool.active, handleScroll]);
  return (
    <div
      ref={hRef}
      className="fixed w-full header transition-all duration-700 ease-in-out transform z-20 -translate-y-24 overflow-hidden"
    >
      <div className="main-header border-b-2 pl-4 border-lightblue pr-4 h-12 md:h-16 lg:h-20 w-full flex flex-wrap bg-secondary text-white header justify-items-center content-center">
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
          <Link to="/">
            <span>Z</span>
            <span className="text-orange">-</span>
            <span className="text-lightblue">AnimeIndex</span>
          </Link>
        </div>
        <div className="search flex flex-wrap flex-1 justify-end items-center gap-1">
          <form
            action=""
            onSubmit={search}
            autoComplete="off"
            className="flex flex-wrap flex-1 justify-end items-center gap-1"
          >
            <input
              className="rounded w-2/4 hidden md:block p-1 text-black"
              type="text"
              name="search"
              placeholder="Search Anime or Manga"
              minLength="3"
            />
            <svg
              onClick={searchOnClick}
              className="w-6 h-6 cursor-pointer md:hidden"
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
        </div>
      </div>
      <div className="search text-white bg-transparent">
        <form action="" onSubmit={search} autoComplete="off">
          <input
            ref={searchInputs}
            id="searchInp"
            minLength="3"
            className="rounded bg-red-700 w-full md:block p-1 text-black transition-all duration-300 ease-in-out transform -translate-y-20 opacity-0 z-0 border-4 hidden"
            type="text"
            name="search"
            placeholder="Search Anime or Manga"
          />
        </form>
      </div>
    </div>
  );
}
export default Header;
