import { combineReducers } from "../../../../../../../Library/Caches/typescript/3.6/node_modules/redux";
import { getDataFromStorage, storeData } from "../utility/stateStorage.js";

const getTodos = () => {
    return getDataFromStorage('todos') || [];
}

const getVisibilityFilter = () => {
    return getDataFromStorage('visibilityFilter') || 'ALL_TODOS';
}

const baseReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TODO': const newTodo = {id: state.length, task: action.data, isComplete: false }; return [...state, newTodo];
        case 'TOGGLE_TODO': const newState = [...state];
                 const selectedTodo = newState.find(i => i.id === action.data.id);
                 selectedTodo.isComplete = ! selectedTodo.isComplete;
                 return newState;
        default: return [...state];
    }
}

const todos = (state = getTodos(), action) => {
    const updatedState = baseReducer(state, action);
    storeData('todos', updatedState);
    return updatedState;
}

const visibilityFilter = (state = getVisibilityFilter(), action) => {
    let filter; 
    switch(action.type) {
        case 'COMPLETED_TODOS': 
        case 'INCOMPLETE_TODOS': 
        case 'ALL_TODOS': filter = action.type;break;

        default: filter = state; break;
    }

    storeData('visibilityFilter', filter);
    return filter;
}

const filterCriterias = (state = {}, action) => {
    console.log(action);
    switch(action.type){
        case 'SEARCH_TODOS': return { searchText: action.data.text };
        
        default: return state;
    }
}

const reducers = combineReducers({
        todos,
        visibilityFilter,
        filterCriterias
    }
);

export {reducers as default};