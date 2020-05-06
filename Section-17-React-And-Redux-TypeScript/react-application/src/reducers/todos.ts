import {Action, ActionTypes, Todo} from '../actions/index';

/**
 * Kedze todosReducer volame z redux --> combineReducers, tato metoda sa zavola a injectne
 * v momente, ked cez dispatch<FetchTodosAction> sa naplni FetchTodosAction!!!
 * @param state
 * @param action
 */
export const todosReducer = (state: Todo[] = [],
                             action: Action
): Todo[] => {


    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload;
        case ActionTypes.deleteTodo:
            return state.filter((todo: Todo): boolean => todo.id !== action.payload);
        default:
            return state;
    }
};