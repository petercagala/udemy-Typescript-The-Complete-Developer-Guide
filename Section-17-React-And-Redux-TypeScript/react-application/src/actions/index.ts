import {ActionTypes,} from "./types";
import {AnyAction} from "redux";

export {ActionTypes} from './types';
export {fetchTodos, deleteTodo, deleteAllTodos} from './todos';

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface FetchTodosAction extends AnyAction {
    type: ActionTypes.fetchTodos;
    payload: Todo[];
}

export interface DeleteTodoAction extends AnyAction {
    type: ActionTypes.deleteTodo;
    payload: number;
}

export interface DeleteAllTodosAction extends AnyAction {
    type: ActionTypes.deleteAllTodos;
    reason: string;
}

export type Action = FetchTodosAction | DeleteTodoAction | DeleteAllTodosAction;


