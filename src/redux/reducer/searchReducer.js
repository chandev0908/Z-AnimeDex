import { FETCH_SEARCH_SUCCESS } from "../types";
const initState = {
  items: [],
  item: {},
};
export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
