import React from 'react';

// Props
interface AppProps {
    // with optional ? is the color property optional, is not mandatory
    color?: string;
}

// State
interface AppState {
    counter: number;
}

/**
 * Definition as FUNCTIONAL COMPONENT
 * @constructor
 */
// const App = (props: AppProps): JSX.Element => {
//
//
//     return (
//         <div>
//             {props.color}
//         </div>
//     );
// }


//
// /**
//  * Definition as CLASS COMPONENT
//  * Musis zadefinovat React.Component<> genericke typy pre:
//  * Props:
//  * State:
//  */
class App extends React.Component<AppProps, AppState> {
    /**
     * We were redefining state property, which was set up at React.Component<AppProps, AppState>
     * @param props
     */
    // state: AppState = {
    //     counter: 0,
    // }

    constructor(props: AppProps) {
        super(props);

        // In this case, we have to define the state type in generic definition React.Component<AppProps, AppState>
        this.state = {
            counter: 0,
        }
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