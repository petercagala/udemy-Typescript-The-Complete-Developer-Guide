import axios, {AxiosResponse} from 'axios';
import {Dispatch} from 'redux';
import {ActionTypes} from './types';
import {DeleteTodoAction, FetchTodosAction, Todo} from "./index";



const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos  = (): Function  => {

    console.log("I'm in fetchTodos");

    return async (dispatch: Dispatch) => {
        const response: AxiosResponse<Todo[]> = await axios.get<Todo[]>(url);

        dispatch<FetchTodosAction>({
            type: ActionTypes.fetchTodos,
            payload: response.data,
        })
    }
};

export const deleteTodo = (id: number): DeleteTodoAction => {
    return {
        type: ActionTypes.deleteTodo,
        payload: id,
    }
};