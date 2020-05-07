// we don't need react tsx here
import {combineReducers, ReducersMapObject} from 'redux';
import {todosReducer} from './todos';
import {Action, Todo} from '../actions/index'


export interface StoreState {
    todos: Todo[];
}

/**
 * Jednotlive state atributy namapuj pomocov jednotlivych reducerov, co su vlastne odkazy na funkcie,
 * ktore maju na vstupe vzdy typ aktualneho atributu zo statu, ktory ide mapovat, a interface, ktory
 * musi extendovat extends AnyAction, aby sme donutili dany interface Action, aby mal v sebe atribut type.
 * Tato funkcia musi vracat typ mapovaneho atributu daneho statu
 */
export const reducers = combineReducers<StoreState>({
        todos: todosReducer,
    }
);