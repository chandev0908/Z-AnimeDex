import { FETCH_ANIME_DETAILS_SUCCESS } from '../types'

const initState = {
    items: [],
    item: {}
}

export default (state=initState, action) => {
    switch (action.type){
        case FETCH_ANIME_DETAILS_SUCCESS:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state
    }
}