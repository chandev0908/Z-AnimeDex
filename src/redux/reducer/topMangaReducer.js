import {FETCH_TOP_MANGA} from '../types';

const initState = {
    items: [],
    item: {}
}

export default (state = initState, action) => {
    switch(action.type){
        case FETCH_TOP_MANGA:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}