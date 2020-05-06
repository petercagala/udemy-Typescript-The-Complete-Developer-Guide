import {FetchTodosAction, DeleteTodoAction} from './todos';

/**
 * enums: staci tam dat nazov enumu, typeScript si tie atributy ocisluje sam od nuly
 */
export enum ActionTypes {
    fetchTodos,
    deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;