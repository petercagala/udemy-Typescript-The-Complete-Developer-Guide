import React from 'react';
import {connect} from 'react-redux';
import {Todo, fetchTodos} from '../actions/index';
import {StoreState} from '../reducers/index';

// Props
interface AppProps {
    todos: Todo[];
    fetchTodos(): any;
}

class _App extends React.Component<AppProps> {

    private handleOnButtonClick = ():void => {
        this.props.fetchTodos();
    };

    renderList(): JSX.Element[] {
        return this.props.todos.map<JSX.Element>((todo: Todo): JSX.Element => {
            return (
              <div key={todo.id}>
                  {todo.title}
              </div>
            );
        });
    }


    render() {

        return (
            <div>
                <button onClick={this.handleOnButtonClick}>
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
    {fetchTodos} // fetchTodos()
)(_App);

