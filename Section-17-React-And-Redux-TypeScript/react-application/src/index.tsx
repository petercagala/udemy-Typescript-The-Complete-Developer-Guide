import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {reducers} from './reducers/index';

const store = createStore(reducers, applyMiddleware(thunk));


ReactDOM.render(
    // <React.StrictMode>
    //     <App/>
    // </React.StrictMode>,
    <Provider store = {store}>
        <App color="red"/>
    </Provider>,
    // document.getElementById('root')
    document.querySelector("#root")
);
