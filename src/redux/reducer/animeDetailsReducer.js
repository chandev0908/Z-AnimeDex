import {FETCH_ANIME_DETAILS} from '../types'

const initState = {
    items: [],
    item: {}
}

export default (state=initState, action) => {
    switch (action.type){
        case FETCH_ANIME_DETAILS:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state
    }
}