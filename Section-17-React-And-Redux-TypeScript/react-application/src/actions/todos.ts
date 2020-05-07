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

// export const deleteTodo = (id: number): DeleteTodoAction => {
//     return {
//         type: ActionTypes.deleteTodo,
//         payload: id,
//     }
// };

/**
 * Mame 2 sposoby
 * 1. Vratime DeleteTodoAction, s ktorym vie reducer priamo pracovat a injectne sa do spracujucej funkcie reducera
 * 2. Pouzijeme priamo Dispatch reduxu, cim injectujeme opat DeleteTodoAction do spracovavanej funkcie reducera
 * @param id
 */
export const deleteTodo = (id: number): Function => {

    return (dispatch: Dispatch): void => {

        dispatch<DeleteTodoAction>({
            type: ActionTypes.deleteTodo,
            payload: id,
        });
    }


};