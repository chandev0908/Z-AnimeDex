import {FETCH_TOP_ANIME} from '../types';
import axios from 'axios';

function fetchTopAnime (page, subtype) {
    if(page){
        if(subtype){
            return async function(dispatch){
                const res = await axios(`/top/anime/${page}/${subtype}`);
                dispatch({
                    type: FETCH_TOP_ANIME,
                    payload: res.data.top
                })
            }
        }
        return async function(dispatch){
            const res = await axios(`/top/anime/${page}/}`);
            dispatch({
                type: FETCH_TOP_ANIME,
                payload: res.data.top
            })
        }
    }
    return async function(dispatch){
        const res = await axios(`/top/anime`);
        dispatch({
            type: FETCH_TOP_ANIME,
            payload: res.data.top
        })
    }
}
export default fetchTopAnime;