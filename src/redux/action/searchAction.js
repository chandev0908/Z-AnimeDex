import { FETCH_SEARCH_REQUEST, FETCH_SEARCH_SUCCESS } from "../types";

import axios from "axios";

const fetchSearch = (query) => async (dispatch) => {
  dispatch({ type: FETCH_SEARCH_REQUEST });
  const res = await axios(`https://api.jikan.moe/v4/anime?q=${query}`);
  dispatch({
    type: FETCH_SEARCH_SUCCESS,
    payload: res.data.data,
  });
};
export default fetchSearch;
