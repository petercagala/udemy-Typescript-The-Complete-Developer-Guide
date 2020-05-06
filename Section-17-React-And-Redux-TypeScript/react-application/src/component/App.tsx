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

    constructor(props: AppProps) {
        super(props);

        // In this case, we have to define the state type in generic definition React.Component<AppProps, AppState>
        this.state = {
            counter: 0,
        }
    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

const mapStateToProps = (state: StoreState): {todos: Todo[]} => {
    return {
        todos: state.todos,
    };
};

export const App = connect(
    mapStateToProps,
    {fetchTodos}
)(_App);

