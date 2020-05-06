import {Todo, FetchTodosAction} from '../actions/index';
import {ActionTypes} from '../actions/types'

/**
 * Kedze todosReducer volame z redux --> combineReducers, tato metoda sa zavola a injectne
 * v momente, ked cez dispatch<FetchTodosAction> sa naplni FetchTodosAction!!!
 * @param state
 * @param action
 */
export const todosReducer = (state: Todo[] = [],
                             action: FetchTodosAction
): Todo[] => {
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload;
        default:
            return state;
    }
};