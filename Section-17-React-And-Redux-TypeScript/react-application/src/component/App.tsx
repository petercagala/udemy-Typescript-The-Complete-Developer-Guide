import React from 'react';
import {connect} from 'react-redux';
import {Todo, fetchTodos, deleteTodo, DeleteTodoAction} from '../actions/index';
import {StoreState} from '../reducers/index';
import {Dispatch} from "redux";

// Props
interface AppProps {
    todos: Todo[];
    fetchTodos: typeof fetchTodos;
    deleteTodo: typeof deleteTodo;
}

class _App extends React.Component<AppProps> {

    private handleOnButtonClick = ():void => {
        this.props.fetchTodos();
    };

    private handleOnTodoClick = (id: number): void => {
        this.props.deleteTodo(id);
    }

    renderList(): JSX.Element[] {
        return this.props.todos.map<JSX.Element>((todo: Todo): JSX.Element => {
            return (
              <div key={todo.id} onClick={(e) => this.handleOnTodoClick(todo.id)}>
                  {todo.title}
              </div>
            );
        });
    }


    render() {

        return (
            <div>
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
 * interface AppProps {
    todos: Todo[];
    fetchTodos(): any;
}
 */
export const App = connect(
    mapStateToProps, // todos
    {fetchTodos, deleteTodo }
)(_App);

