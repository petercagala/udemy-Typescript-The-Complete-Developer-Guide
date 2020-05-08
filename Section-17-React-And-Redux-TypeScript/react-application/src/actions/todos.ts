import axios, {AxiosResponse} from 'axios';
import {Dispatch} from 'redux';
import {ActionTypes} from './types';
import {DeleteTodoAction,  DeleteAllTodosAction, FetchTodosAction, Todo} from "./index";



const url = "https://jsonplaceholder.typicode.com/todos";

let scheduled = false;

export const fetchTodos  = (): Function  => {

    return (dispatch: Dispatch) => {

        // throttling: nastav umely timing pre volanie servera
        if(!scheduled) {
            scheduled = true;

            window.setTimeout( async () => {
                    let response: AxiosResponse<Todo[]> = await axios.get<Todo[]>(url);

                    dispatch<FetchTodosAction>({
                        type: ActionTypes.fetchTodos,
                        payload: response.data,
                    });
                    // Ked je vsetko za nami, tak mozeme naspat nastavit na false
                    scheduled = false;
                },
                1000);


        }
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

export const deleteAllTodos = (): Function => {
    return (dispatch: Dispatch): void => {

        dispatch<DeleteAllTodosAction>({
            type: ActionTypes.deleteAllTodos,
            reason: "Lebo to tak je",
        });
    }
}