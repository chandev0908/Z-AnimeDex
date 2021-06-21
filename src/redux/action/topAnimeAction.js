import {
  FETCH_TOP_ANIME_REQUEST,
  FETCH_TOP_ANIME_SUCCESS,
} from "../types";
import axios from "axios";

function fetchTopAnime() {
  return async function (dispatch) {
    dispatch({ type: FETCH_TOP_ANIME_REQUEST });
    const res = await axios(`https://api.jikan.moe/v3/top/anime`);
    await dispatch({
      type: FETCH_TOP_ANIME_SUCCESS,
      payload: res.data.top,
    });
  };
}
export default fetchTopAnime;
