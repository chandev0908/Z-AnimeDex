import {FETCH_TOP_ANIME} from '../types';
import axios from 'axios';

function fetchTopAnime (page, subtype) {
    if(page){
        if(subtype){
            return async function(dispatch){
                const res = await axios(`https://api.jikan.moe/v3/top/anime/${page}/${subtype}`);
                dispatch({
                    type: FETCH_TOP_ANIME,
                    payload: res.top
                })
            }
        }
        return async function(dispatch){
            const res = await axios(`https://api.jikan.moe/v3/top/anime/${page}/}`);
            dispatch({
                type: FETCH_TOP_ANIME,
                payload: res.top
            })
        }
    }
    return async function(dispatch){
        const res = await axios(`https://api.jikan.moe/v3/top/anime/`);
        dispatch({
            type: FETCH_TOP_ANIME,
            payload: res.top
        })
    }
}
export default fetchTopAnime;