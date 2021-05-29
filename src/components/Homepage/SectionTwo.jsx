import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import fetchTopAnime from "../../redux/action/topAnimeAction";
import AnimeRow from "./AnimeRow";

function SectionTwo({ animes, actionCreators }) {
  useEffect(() => {
    actionCreators.fetchTopAnime();
  }, [actionCreators]);
  console.log(animes?.topAnime);
  return (
    <div className="section-two w-full h-screen bg-secondary">
      {/* <AnimeRow animes={animes?.topAnime} category="Top Anime"/> */}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    animes: {
      topAnime: state.topAnime.items,
    },
  };
};
function mapDispatchToProps(dispatch) {
  const actionCreators = {
    ...bindActionCreators(
      {
        fetchTopAnime,
      },
      dispatch
    ),
  };
  return {
    actionCreators,
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SectionTwo);
