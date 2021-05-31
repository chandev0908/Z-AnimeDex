import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchTopAnime from "../../redux/action/topAnimeAction";
import fetchAnimeSeason from "../../redux/action/animeSeasonAction";
import fetchTopManga from "../../redux/action/topMangaAction";
import AnimeRow from "./AnimeRow";

function SectionTwo({ animes, actionCreators }) {
  useEffect(() => {
    actionCreators.fetchTopAnime();
    actionCreators.fetchAnimeSeason();
    actionCreators.fetchTopManga();
  }, [actionCreators]);
  return (
    <div className="section-two w-full h-auto bg-secondary pt-6 pb-6">
      <AnimeRow category="Top Anime" animes={animes?.topAnime} />
      <AnimeRow category="Season Now" animes={animes?.animeSeason} />
      <AnimeRow category="Top Manga" animes={animes?.topManga} />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    animes: {
      topAnime: state.topAnime.items,
      animeSeason: state.animeSeason.items,
      topManga: state.topManga.items
    },
  };
};
function mapDispatchToProps(dispatch) {
  const actionCreators = {
    ...bindActionCreators(
      {
        fetchTopAnime,
        fetchAnimeSeason,
        fetchTopManga
      },
      dispatch
    ),
  };
  return {
    actionCreators,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SectionTwo);
