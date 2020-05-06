// we don't need react tsx here
import {combineReducers} from 'redux';
import {todosReducer} from './todos';
import {Todo} from '../actions/index'


export interface StoreState {
    todos: Todo[];
}

// let's create dummy reducer only.
export const reducers = combineReducers<StoreState>({
    todos: todosReducer,
});