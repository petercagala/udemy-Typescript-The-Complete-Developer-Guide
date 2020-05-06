// we don't need react tsx here
import {combineReducers} from 'redux';

// let's create dummy reducer only.
export const reducers = combineReducers({
    counter: () => 1,
})