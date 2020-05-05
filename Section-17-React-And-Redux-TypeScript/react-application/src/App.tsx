import React from 'react';

interface AppProps {
    // with optional ? is the color property optional, is not mandatory
    color?: string;
}


class App extends React.Component<AppProps> {

    render() {
        return (
            <div>
                <h2>Hi Peter</h2>
                <p>
                    {this.props.color}
                </p>
            </div>
        );
    }
};

export default App;