import {Action, ActionTypes, Todo} from '../actions/index';
import {Reducer} from "redux";

/**
 * Kedze todosReducer volame z redux --> combineReducers, tato metoda sa zavola a injectne
 * v momente, ked cez dispatch<FetchTodosAction> sa naplni FetchTodosAction!!!
 * @param state sem sa injectnu aktualne Todo[] v state a mozeme s nimi pracovat
 * @param action
 */
export const todosReducer: Reducer<Todo[], Action> = (state: Todo[] = [],
                             action: Action
): Todo[] => {

    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload;
        case ActionTypes.deleteTodo:
            return state.filter((todo: Todo): boolean => todo.id !== action.payload);
        case ActionTypes.deleteAllTodos:
            return state.filter((todo: Todo) => false);
        default:
            return state;
    }
};