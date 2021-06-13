import { FETCH_ANIME_DETAILS } from "../types";
import axios from "axios";

function fetchAnimeDetails(id) {
  return async function (dispatch) {
    const res = await axios(`https://api.jikan.moe/v3/anime/${id}`);
    dispatch({
      type: FETCH_ANIME_DETAILS,
      payload: res.data,
    });
  };
}
export default fetchAnimeDetails;
