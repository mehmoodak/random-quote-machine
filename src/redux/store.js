import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { appState } from './reducers'

// let initialState = {
//     quote: {
//         text: "Loading...",
//         author: "Author",
//     },
//     isLoading: true,
// }

// const store = createStore(appState, initialState, applyMiddleware(thunk));
const store = createStore(appState, applyMiddleware(thunk));

export default store;