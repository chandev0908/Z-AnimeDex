import { FETCH_SEARCH } from "../types";
const initState = {
  items: [],
  item: {},
};
export default (state = initState, action) => {
  switch (action.type) {
    case FETCH_SEARCH:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
