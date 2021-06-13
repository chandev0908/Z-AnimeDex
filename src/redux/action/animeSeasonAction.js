import {FETCH_SEASON_ANIME} from '../types';
import axios from 'axios';

function fetchAnimeSeason (year, season) {
    if(year){
        if(season){
            return async function(dispatch){
                const res = await axios(`https://api.jikan.moe/v3/season/${season}`);
                dispatch({
                    type: FETCH_SEASON_ANIME,
                    payload: res
                })
            }
        }
        return async function(dispatch){
            const res = await axios(`https://api.jikan.moe/v3/season/${year}`);
            dispatch({
                type: FETCH_SEASON_ANIME,
                payload: res
            })
        }
    }
    return async function(dispatch){
        const res = await axios(`https://api.jikan.moe/v3/season`);
        dispatch({
            type: FETCH_SEASON_ANIME,
            payload: res.data.anime
        })
    }
}
export default fetchAnimeSeason;