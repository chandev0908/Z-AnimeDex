import { FETCH_ANIME_CHARACTERS_REQUEST, FETCH_ANIME_CHARACTERS_SUCCESS } from "../types";

import axios from "axios";

function fetchAnimeCharacters(id) {
  return async function (dispatch) {
    dispatch({type: FETCH_ANIME_CHARACTERS_REQUEST})
    const res = await axios(`https://api.jikan.moe/v4/anime/${id}/characters`);
    dispatch({
      type: FETCH_ANIME_CHARACTERS_SUCCESS,
      payload: res.data.data,
    });
  };
}
export default fetchAnimeCharacters;
