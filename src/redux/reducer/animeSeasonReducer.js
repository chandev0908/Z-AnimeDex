import {FETCH_SEASON_ANIME_SUCCESS} from '../types'

const initState = {
    items: [],
    item: {}
}

export default (state=initState, action) => {
    switch (action.type){
        case FETCH_SEASON_ANIME_SUCCESS:
            return{
                ...state, 
                items: action.payload
            }
        default:
            return state
    }
}