import {
  FETCH_SEASON_ANIME_REQUEST,
  FETCH_SEASON_ANIME_SUCCESS,
  FETCH_TOP_ANIME_REQUEST,
  FETCH_TOP_ANIME_SUCCESS,
} from "../../redux/types";
import React, { useEffect } from "react";

import AnimeRow from "./AnimeRow";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createLoadingSelector } from "../../redux/reducer/selectors";
import fetchAnimeSeason from "../../redux/action/animeSeasonAction";
import fetchTopAnime from "../../redux/action/topAnimeAction";

function SectionTwo({ animes, actionCreators }) {
  useEffect(() => {
    actionCreators.fetchTopAnime();
    actionCreators.fetchAnimeSeason();
  }, [actionCreators]);
  return (
    <section className="section-two w-full h-auto bg-secondary pt-6 pb-6">
      <AnimeRow
        category="Top Anime"
        animes={animes?.topAnime}
        loader={animes?.loadingReducer.GET_FETCH_TOPS_ANIME}
      />
      <AnimeRow
        category="Season Now"
        animes={animes?.animeSeason}
        loader={animes?.loadingReducer.GET_FETCH_SEASON_ANIME}
      />
    </section>
  );
}
const loadingSelector = createLoadingSelector([
  FETCH_TOP_ANIME_SUCCESS,
  FETCH_TOP_ANIME_REQUEST,
  FETCH_SEASON_ANIME_SUCCESS,
  FETCH_SEASON_ANIME_REQUEST,
]);
const mapStateToProps = (state) => {
  return {
    animes: {
      topAnime: state.topAnime.items,
      animeSeason: state.animeSeason.items,
      loadingReducer: state.loadingReducer,
    },
  };
};
function mapDispatchToProps(dispatch) {
  const actionCreators = {
    ...bindActionCreators(
      {
        fetchTopAnime,
        fetchAnimeSeason,
      },
      dispatch
    ),
  };
  return {
    actionCreators,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SectionTwo);
