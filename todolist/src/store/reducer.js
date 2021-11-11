import { CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, ADD_TODO_ITEM } from './actionTypes';

const defaultState = {
    inputValue: '',
    list: []
}

//reducer可以接收state但不可以修改state
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if( action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = "";
        return newState;
    }
    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state;
}