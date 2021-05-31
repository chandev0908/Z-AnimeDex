import {FETCH_TOP_MANGA} from '../types';
import axios from 'axios';

function fetchTopManga (page, subtype) {
    if(page){
        if(subtype){
            return async function(dispatch){
                const res = await axios(`/top/manga/${page}/${subtype}`);
                dispatch({
                    type: FETCH_TOP_MANGA,
                    payload: res.data.top
                })
            }
        }
        return async function(dispatch){
            const res = await axios(`/top/manga/${page}/`);
            dispatch({
                type: FETCH_TOP_MANGA,
                payload: res.data.top
            })
        }
    }else{
        return async function(dispatch){
            const res = await axios(`/top/manga`);
            dispatch({
                type: FETCH_TOP_MANGA,
                payload: res.data.top
            })
        }
    }
}
export default fetchTopManga;