import React, { useContext, useEffect, useRef } from "react";
import { HomepageContext } from "../Context/HomepageContext";
function Sidebar() {
  const sidebarRef = useRef(null);
  const { toggleSidebar, setToggleSidebar } = useContext(HomepageContext);
  useEffect(() => {
    if (toggleSidebar) {
      sidebarRef.current.classList.remove("-translate-x-full");
    } else {
      sidebarRef.current.classList.add("-translate-x-full");
    }
  }, [toggleSidebar]);
  const onClickToggle = () => {
    toggleSidebar ? setToggleSidebar(false) : setToggleSidebar(true);
  }
  return (
    <div
      ref={sidebarRef}
      className="sidebar fixed bg-secondary border-r border-lightblue text-white grid content-center transition-all transform duration-700 ease-in-out w-3/6 h-screen z-10 -translate-x-full"
    >
      <div className="close-bar absolute top-4 right-3">
        <svg
        onClick={onClickToggle}
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
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="main text-center grid gap-y-4 ">
        <h1>Trending</h1>
        <h1>Season Now</h1>
        <h1>Genre</h1>
      </div>
    </div>
  );
}

export default Sidebar;
