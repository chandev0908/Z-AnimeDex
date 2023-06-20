import React, { useEffect, useRef } from "react";
import { useHistory, useRouteMatch } from "react-router";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { connect } from "react-redux";
import { createLoadingSelector } from "../redux/reducer/selectors";
import fetchSearch from "../redux/action/searchAction";
import { motion } from "framer-motion";

const searchResultsVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: "0",
    transition: {
      type: "tween",
      duration: 0.4,
    },
  },
  exit: {
    x: "100vw",
    transition: {
      type: "tween",
      duration: 0.4,
    },
  },
};
function SearchPage({ searchQuery, fetchSearch, loadingReducer }) {
  const infoRef = useRef([]);
  const cardRef = useRef([]);
  const history = useHistory();
  const match = useRouteMatch();
  const hoverCard = (index) => {
    infoRef.current[index].classList.replace("opacity-0", "opacity-80");
  };
  const hoverCardLeave = (index) => {
    infoRef.current[index].classList.replace("opacity-80", "opacity-0");
  };
  useEffect(() => {
    document.title = "Search Results...";
    fetchSearch(match.params.query);
    console.log(searchQuery)
  }, [fetchSearch, match.params.query]);
  console.log(loadingReducer.GET_FETCH_SEARCH);
  return (
    <div className="search-main w-full h-auto bg-primary">
      <Header active={true} />
      <Sidebar />
      <div className="search-results h-full w-full pt-14 md:pt-20 lg:pt-24 pb-6"></div>

      <h1 className="text-titleSizeS md:text-titleSizeM lg:text-titleSizeL text-center text-lightblue">
        Search results of {match.params.query}...
      </h1>

      <div className="results-container w-11/12 h-full bg-secondary m-auto p-1 grid-flow-row grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-0.5 text-white text-center overflow-hidden">
        {loadingReducer.GET_FETCH_SEARCH_SUCCESS ? (
          <div className="loader col-start-2 sm:col-start-3 sm:col-end-5">
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : searchQuery !== 0 ? (
          searchQuery.data.map((results, index) => {
            return (
              <motion.div
                key={results.mal_id}
                className="overflow-hidden"
                variants={searchResultsVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div
                  index={index}
                  ref={(el) => (cardRef.current[index] = el)}
                  className="result-card w-full h-full grid place-items-center content-start p-1 rounded bg-primary rounded-xl overflow-hidden text-animeTitle sm:text-animeTitleS md:text-animeTitleM lg:text-animeTitleL"
                >
                  <img
                    src={results.images.jpg.image_url}
                    className="w-full h-full rounded-xl"
                  />
                  <h1>{results.title}</h1>
                  <div
                    index={index}
                    onMouseLeave={() => hoverCardLeave(index)}
                    onMouseEnter={() => hoverCard(index)}
                    onClick={() => history.push(`/anime/${results.mal_id}`)}
                    ref={(el) => (infoRef.current[index] = el)}
                    className="info text-titleSize sm:text-titleSizeS md:text-titleSizeM lg:text-titleSizeL p-2 absolute w-full h-full bg-secondary rounded-xl transition-all duration-700 ease-in-out opacity-0"
                  >
                    <h1>{results.title}</h1>
                    <h1 className="flex justify-center items-center">
                      <svg
                        className="w-4 h-4 text-lightblue"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>{" "}
                      {results.score}
                    </h1>
                    <h1>{results.synopsis}</h1>
                  </div>
                </div>
              </motion.div>
            );
          })
        ) : (
          <h1>Cant Find Anything</h1>
        )}
      </div>
    </div>
  );
}
const loadingSelector = createLoadingSelector(["GET_FETCH_SEARCH_SUCCESS"]);
const mapStateToProps = (state) => ({
  searchQuery: state.searchQuery.items,
  loadingReducer: state.loadingReducer,
});
export default connect(mapStateToProps, { fetchSearch })(SearchPage);
