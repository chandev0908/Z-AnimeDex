import { combineReducers } from "redux";
import topAnime from "./topAnimeReducer";
import animeDetails from "./animeDetailsReducer";
import animeSeason from "./animeSeasonReducer";
import searchQuery from "./searchReducer";
import animeCharacters from "./characterStaffReducer";
import {loadingReducer} from "./loadingReducer";
export default combineReducers({
  topAnime,
  animeDetails,
  animeSeason,
  searchQuery,
  animeCharacters,
  loadingReducer,
});
