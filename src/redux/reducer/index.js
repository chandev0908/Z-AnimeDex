import { combineReducers } from "redux";
import topAnime from "./topAnimeReducer";
import topManga from "./topMangaReducer";
import animeDetails from "./animeDetailsReducer";
import animeSeason from "./animeSeasonReducer";
import searchQuery from "./searchReducer";
import animeCharacters from "./characterStaffReducer";
export default combineReducers({
  topAnime,
  topManga,
  animeDetails,
  animeSeason,
  searchQuery,
  animeCharacters,
});
