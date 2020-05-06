import React from 'react';
import {connect} from 'react-redux';
import {Todo, fetchTodos} from '../actions/index';
import {StoreState} from '../reducers/index';
import {Dispatch} from "redux";

// Props
interface AppProps {
    todos: Todo[];
    fetchTodos(): any;
}

class _App extends React.Component<AppProps> {


    /**
     * Pozor, toto je nakazene prepisana metoda a vola sa vzdy, ked sa zavola komponent
     */
    componentDidMount(): void {
        this.props.fetchTodos();
    }

    render() {

        console.log(this.props.todos);

        return (
            <div>
                <h2>Hi Peter</h2>
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

