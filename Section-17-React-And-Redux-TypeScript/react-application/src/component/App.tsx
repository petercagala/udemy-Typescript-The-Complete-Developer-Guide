import React from 'react';
import {connect} from 'react-redux';
import {Todo, fetchTodos, deleteTodo, DeleteTodoAction, deleteAllTodos} from '../actions/index';
import {StoreState} from '../reducers/index';
import {Dispatch} from "redux";

// Props
interface AppProps {
    todos: Todo[];
    fetchTodos: typeof fetchTodos;
    deleteTodo: typeof deleteTodo;
    deleteAllTodos: typeof deleteAllTodos;
}

class _App extends React.Component<AppProps> {

    private handleOnButtonClick = ():void => {
        this.props.fetchTodos();
    };

    private handleOnTodoClick = (id: number): void => {
        this.props.deleteTodo(id);
    }

    private handleOnButtonDeleteAll = (): void => {
        this.props.deleteAllTodos();
    }

    private renderList(): JSX.Element[] {
        return this.props.todos.map<JSX.Element>((todo: Todo): JSX.Element => {
            return (
              <div key={todo.id} onClick={(e) => this.handleOnTodoClick(todo.id)}>
                  <ul>
                      <li>{todo.id}</li>
                      <li>{todo.title}</li>
                  </ul>
              </div>
            );
        });
    }


    render() {

        return (
            <div>
                <button onClick={(e) => {this.handleOnButtonDeleteAll()}}>
                    Delete all
                </button>
                <button onClick={(e) => this.handleOnButtonClick()}>
                    Fetch
                </button>
                {this.renderList()}
            </div>
        );
    }
}

/**
 * StoreState is defined in entire redux state object, so it should be injected automatically
 * @param state
 */
const mapStateToProps = (state: StoreState): {todos: Todo[]} => {
    return {
        todos: state.todos,
    };
};

/**
 * cez connect sa krasne naplni AppProps
 * 1. pomocou tu vytvorenej samostanej funkcie (mimo _App), ktora namapuje potrebne atributy zo statu do props
 * 2. Dalsie funkcie idealne z actions, ktore namapuju propsove odkazy na tieto funkcie. Propsove odkazy na funkcie
 * z actions musia mat samozrejme ten isty nazov, aby sa to vedelo automaticky premapovat
}
 */
export const App = connect(
    mapStateToProps, // todos
    {fetchTodos, deleteTodo, deleteAllTodos }
)(_App);

