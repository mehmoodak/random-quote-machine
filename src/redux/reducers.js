import {
    NEW_QUOTE,
    LOADING
} from './actionTypes';
import {
    combineReducers
} from 'redux';

function quote(state, action) {
    switch (action.type) {
        case NEW_QUOTE:
            return action.quote;
        default:
            if (state === undefined)
                return {
                    text: 'Loading...',
                    author: 'Author'
                };
            else
                return state;
    }
}

function isLoading(state, action) {
    switch (action.type) {
        case LOADING:
            return action.isLoading;
        default:
            if (state === undefined)
                return true;
            else
                return state;
    }
}

export const appState = combineReducers({
    quote,
    isLoading
});