import axios, {AxiosResponse} from 'axios';
import {Dispatch} from 'redux';
import {ActionTypes} from './types';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response: AxiosResponse<Todo[]> = await axios.get<Todo[]>(url);

        dispatch({
            type: ActionTypes.fetchTodos,
            payload: response.data,
        })
    }
};