import * as actiontypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    focused: false,
    list: []
});

export default (state = defaultState, action) => {
    switch(action.type) {
        case actiontypes.SEARCH_FOCUS :
            return state.set('focused', true)
        case actiontypes.SEARCH_BLUR :
            return state.set('focused', false)
        case actiontypes.CHANGE_LIST :
            return state.set('list', action.data)
        default:
            return state;
    }
}