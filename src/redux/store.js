import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import flagsReducer from './FlagsDucks'

const rootReducer = combineReducers({
    flags: flagsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function Store() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store
}