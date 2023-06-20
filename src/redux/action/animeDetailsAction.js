import {
  FETCH_ANIME_DETAILS_REQUEST,
  FETCH_ANIME_DETAILS_SUCCESS,
} from "../types";

import axios from "axios";

function fetchAnimeDetails(id) {
  return async function (dispatch) {
    dispatch({ type: FETCH_ANIME_DETAILS_REQUEST });
    const res = await axios(`https://api.jikan.moe/v4/anime/${id}`);
    dispatch({
      type: FETCH_ANIME_DETAILS_SUCCESS,
      payload: res.data,
    });
  };
}
export default fetchAnimeDetails;
