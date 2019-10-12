import {createStore, combineReducers} from 'redux';

import todoReducer from './todo.store.js';
import settingsReducer from './setting.store.js'


let reducers = combineReducers({
    todo:todoReducer,
    setting:settingsReducer,
})

export default ()=> createStore(reducers)