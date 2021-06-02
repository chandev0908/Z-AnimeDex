import { FETCH_SEARCH } from "../types";
import axios from "axios";

const fetchSearch = (query) => async (dispatch) => {
  const res = await axios(`/search/anime?q=${query}`);
  dispatch({
    type: FETCH_SEARCH,
    payload: res.data.results,
  });
};
export default fetchSearch;
