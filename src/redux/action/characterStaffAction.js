import { FETCH_ANIME_CHARACTERS } from "../types";
import axios from "axios";

function fetchAnimeCharacters(id) {
  return async function (dispatch) {
    const res = await axios(`/anime/${id}/characters_staff`);
    dispatch({
      type: FETCH_ANIME_CHARACTERS,
      payload: res.data.characters,
    });
  };
}
export default fetchAnimeCharacters;