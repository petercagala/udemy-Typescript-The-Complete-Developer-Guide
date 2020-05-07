import {ActionTypes} from "./types";

export {ActionTypes} from './types';
export {fetchTodos, deleteTodo} from './todos';

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface FetchTodosAction {
    type: ActionTypes.fetchTodos;
    payload: Todo[];
}

export interface DeleteTodoAction {
    type: ActionTypes.deleteTodo;
    payload: number;
}

export type Action = FetchTodosAction | DeleteTodoAction;


