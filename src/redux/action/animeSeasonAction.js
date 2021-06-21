import {FETCH_SEASON_ANIME_REQUEST, FETCH_SEASON_ANIME_SUCCESS} from '../types';
import axios from 'axios';

function fetchAnimeSeason () {
    return async function(dispatch){
        dispatch({type: FETCH_SEASON_ANIME_REQUEST})
        const res = await axios(`https://api.jikan.moe/v3/season`);
        dispatch({
            type: FETCH_SEASON_ANIME_SUCCESS,
            payload: res.data.anime
        })
    }
}
export default fetchAnimeSeason;