import {FETCH_TOP_ANIME_SUCCESS} from '../types';

const initState = {
    items: [],
    item: {}
}

export default function (state=initState, action){
    switch (action.type){
        case FETCH_TOP_ANIME_SUCCESS:
            return{
                ...state,
                items: action.payload,
            }
        default:
            return state
    }
}