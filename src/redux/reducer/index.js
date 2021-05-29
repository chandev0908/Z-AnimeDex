import {combineReducers} from 'redux';
import topAnime from './topAnimeReducer';
import topManga from './topMangaReducer';
import animeDetails from './animeDetailsReducer';
import animeSeason from './animeSeasonReducer'
export default combineReducers({
    topAnime,
    topManga,
    animeDetails,
    animeSeason
});