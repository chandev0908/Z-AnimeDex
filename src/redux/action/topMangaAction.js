import {FETCH_TOP_MANGA} from '../types';
import axios from 'axios';

function fetchTopManga (page, subtype) {
    if(page){
        if(subtype){
            return async function(dispatch){
                const res = await axios(`https://api.jikan.moe/v3/top/manga/${page}/${subtype}`);
                dispatch({
                    type: FETCH_TOP_MANGA,
                    payload: res.top
                })
            }
        }
        return async function(dispatch){
            const res = await axios(`https://api.jikan.moe/v3/top/manga/${page}/`);
            dispatch({
                type: FETCH_TOP_MANGA,
                payload: res.top
            })
        }
    }else{
        return async function(dispatch){
            const res = await axios(`https://api.jikan.moe/v3/top/manga/`);
            dispatch({
                type: FETCH_TOP_MANGA,
                payload: res.top
            })
        }
    }
}
export default fetchTopManga;