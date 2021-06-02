import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SectionTwo from "../components/Homepage/SectionTwo";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import { HomepageContext } from "../Context/HomepageContext";
function HomePage() {
  useEffect(() => {
    document.title = "Z-Animedex";
  });
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <HomepageContext.Provider value={{ toggleSidebar, setToggleSidebar }}>
      <div className="homepage font-body">
        <Header active={false} />
        <div className="main m-auto bg-primary h-screen grid grid-flow-row place-content-center gap-y-3">
          <div className="transition-all duration-700 ease-in-out brandname flex-1 font-body text-white text-center text-xxl md:text-xxxl lg:text-xxxxl z-10">
            <span>Z</span>
            <span className="text-orange">-</span>
            <span className="text-lightblue">AnimeIndex</span>
          </div>
          <SearchBar></SearchBar>
          <div className="scroll-down grid grid-flow-row place-items-center text-white pt-44 md:pt-48 lg:pt-52 animate-bounce">
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
          <Sidebar />
        </div>
        <SectionTwo />
      </div>
    </HomepageContext.Provider>
  );
}

export default HomePage;
