import React from 'react';
import {AppState} from './AppState';

interface AppProps {
    // with optional ? is the color property optional, is not mandatory
    color?: string;
}


class App extends React.Component<AppProps> {
    state: AppState = {
        counter: 0,
    }


    private handleIncrement = (): void => {
        this.setState({
            counter: this.state.counter + 1,
        })
    };

    private handleDecrement = (): void => {
        this.setState({
            counter: this.state.counter - 1,
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleIncrement}>Increment</button>
                <button onClick={this.handleDecrement}>Decrement</button>
                <br/>
                {this.state.counter}
            </div>
        );
    }
};

export default App;