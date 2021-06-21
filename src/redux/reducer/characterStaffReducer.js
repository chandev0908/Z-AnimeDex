import { FETCH_ANIME_CHARACTERS_SUCCESS } from '../types'

const initState = {
    items: []
}
export default (state=initState, action) => {
    switch(action.type){
        case FETCH_ANIME_CHARACTERS_SUCCESS:
            return{
                ...state,
                items: action.payload
            }
        default:
            return state
    }
}