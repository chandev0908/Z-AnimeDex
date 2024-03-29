import React, { useEffect } from "react";

import Header from "../components/Header";
import ReactPlayer from "react-player";
import Sidebar from "../components/Sidebar";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createLoadingSelector } from "../redux/reducer/selectors";
import fetchAnimeCharacters from "../redux/action/characterStaffAction";
import fetchAnimeDetails from "../redux/action/animeDetailsAction";
import { motion } from "framer-motion";
import { useRouteMatch } from "react-router";

const previewVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

function Preview({ details, previewed }) {
  const match = useRouteMatch();
  const { animeDetails, animeCharacters } = previewed;

  useEffect(() => {
    details.fetchAnimeDetails(match.params.id);
    details.fetchAnimeCharacters(match.params.id);
    document.title = previewed.animeDetails.title + " - Z-Animedex";
  }, [details, match.params.id]);
  setTimeout(() => {}, 5000);

  return (
    <div className="preview-main w-full bg-primary font-body">
      <Header active={true} />
      <Sidebar />
      <motion.div
        className="preview pt-16 md:pt-20 lg:pt-24 pl-6 pr-6 text-white text-center text-titleSizeS md:text-titleSizeM lg:text-titleSizeL"
        variants={previewVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {previewed.loadingReducer.GET_FETCH_ANIME_DETAILS &&
        previewed.loadingReducer.GET_FETCH_ANIME_CHARACTERS ? (
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <div className="full-details grid grid-flow-row md:grid-flow-col gap-2">
            <div className="img-info">
              <img
                className="m-auto"
                src={animeDetails?.images?.jpg?.image_url}
                alt={animeDetails?.title}
              />
              <h1 className="text-animeTitle mt-4 sm:text-animeTitleS md:text-animeTitleM lg:text-animeTitleL">
                {previewed?.animeDetails?.title}
              </h1>
              <h1>
                Genre:{" "}
                {animeDetails.genres &&
                  animeDetails.genres
                    .map((genre) => genre.name)
                    .join(", ")
                    .replace(/(.*),(.*)$/, "$1 &$2")}
              </h1>
            </div>
            <div className="main-details grid grid-flow-row gap-y-4">
              <div className="ratings bg-secondary md:h-24 lg:h-20 p-4 rounded-lg text-animeTitle sm:text-animeTitleS md:text-animeTitleM lg:text-animeTitleL grid grid-flow-cols grid-cols-2 md:grid-cols-4 place-items-center gap-4">
                <h1>Score: {animeDetails.score}</h1>
                <h1>Ranked: {animeDetails.rank}</h1>
                <h1>Popularity: {animeDetails.popularity}</h1>
                <h1>Status: {animeDetails.status}</h1>
              </div>

              <h1>Trailer</h1>
              {animeDetails?.trailer?.embed_url ? (
                <div className="trailer w-full h-60 md:h-72 grid justify-items-center">
                  <ReactPlayer
                    width="75%"
                    height="100%"
                    url={animeDetails?.trailer?.embed_url}
                    controls={true}
                  />
                </div>
              ) : (
                ""
              )}
              <div className="synopsis-main pl-6 pr-6">
                <h1 className="text-animeTitle m-4 sm:text-animeTitleS md:text-animeTitleM lg:text-animeTitleL">
                  {animeDetails.title}
                </h1>
                <h1>{animeDetails.synopsis}</h1>
              </div>
              <h1 className="text-animeTitle m-4 sm:text-animeTitleS md:text-animeTitleM lg:text-animeTitleL">
                Characters & Voice Actors
              </h1>

              <div className="characters-main grid grid-flow-row w-full sm:grid-cols-2 gap-2 mb-12">
                {animeCharacters.length >= 4
                  ? animeCharacters.slice(0, 4).map((charac) => {

                      return (
                        <div
                          className="charac-container flex h-20 w-full bg-secondary"
                          key={charac.character.mal_id}
                        >
                          <div className="characters flex-1 flex justify-start items-center space-x-2">
                            <img
                              className="h-full"
                              src={charac.character.images?.jpg?.image_url}
                              alt={charac.character.name}
                            />
                            <h1 className="name">{charac.character.name}</h1>
                          </div>
                          <div className="voice-actor flex-1 flex justify-end items-center space-x-2">
                            <h1>{charac.character?.voice_actors?.name}</h1>
                            <img
                              className="h-full"
                              src={charac.character?.voice_actors?.image_url}
                              alt={charac.character?.voice_actors}
                            />
                          </div>
                        </div>
                      );
                    })
                  : animeCharacters.map((charac) => {
                      return (
                        <div
                          className="charac-container flex h-20 w-full bg-secondary"
                          key={charac.mal_id}
                        >
                          <div className="characters flex-1 flex justify-start items-center space-x-2">
                            <img
                              className="h-full"
                              src={charac.image_url}
                              alt={charac.name}
                            />
                            <h1 className="name">{charac.name}</h1>
                          </div>
                          <div className="voice-actor flex-1 flex justify-end items-center space-x-2">
                            <h1>{charac?.voice_actors[0]?.name}</h1>
                            <img
                              className="h-full"
                              src={charac?.voice_actors[0]?.image_url}
                              alt={charac?.voice_actors}
                            />
                          </div>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
const loadingSelector = createLoadingSelector([
  "GET_FETCH_ANIME_CHARACTERS",
  "GET_FETCH_ANIME_DETAILS",
]);
const mapStateToProps = (state) => {
  return {
    previewed: {
      loadingReducer: state.loadingReducer,
      animeDetails: state.animeDetails.item,
      animeCharacters: state.animeCharacters.items,
    },
  };
};
const mapDispatchToProps = (dispatch) => {
  const details = {
    ...bindActionCreators(
      {
        fetchAnimeDetails,
        fetchAnimeCharacters,
      },
      dispatch
    ),
  };
  return {
    details,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Preview);
