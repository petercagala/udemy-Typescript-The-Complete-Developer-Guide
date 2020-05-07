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

//State
interface AppState {
    fetching: boolean;
}

class _App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps, state: AppState) {
        super(props);

        this.state = {
            fetching: false,
        };
    }

    componentDidUpdate(prevProps: Readonly<AppProps>, prevState: Readonly<AppState>, snapshot?: any) {
        if(!prevProps.todos.length && this.props.todos.length) {
            this.setState({
                fetching: false,
            })
        }
    }

    private handleOnButtonClickFetching = ():void => {
        this.props.fetchTodos();

        this.state = {
            fetching: true,
        }
    };

    private handleOnTodoClickDelete = (id: number): void => {
        this.props.deleteTodo(id);
    }

    private handleOnButtonDeleteAll = (): void => {
        this.props.deleteAllTodos();
    }

    private renderList(): JSX.Element[] {
        return this.props.todos.map<JSX.Element>((todo: Todo): JSX.Element => {
            return (
              <div key={todo.id} onClick={(e) => this.handleOnTodoClickDelete(todo.id)}>
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
                <button onClick={(e) => this.handleOnButtonClickFetching()}>
                    Fetch
                </button>
                {this.state.fetching ? "Loading" : null}
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

