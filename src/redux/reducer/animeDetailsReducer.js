import {FETCH_ANIME_DETAILS} from '../types'

const initState = {
    items: {}
}

export default (state=initState, action) => {
    switch (action.type){
        case FETCH_ANIME_DETAILS:
            return {
                items: action.payload
            }
        default:
            return state
    }
}