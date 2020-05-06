import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

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
