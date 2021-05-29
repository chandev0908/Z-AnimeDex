import {FETCH_SEASON_ANIME} from '../types'

const initState = {
    items: [],
    item: {}
}

export default (state=initState, action) => {
    switch (action.type){
        case FETCH_SEASON_ANIME:
            return{
                ...state, 
                items: action.payload
            }
        default:
            return state
    }
}