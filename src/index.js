import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { compose, createStore, applyMiddleware } from 'redux'
import {rootReducer} from './redux/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {fobidenmidlware} from './redux/middleware'
import createSagaMaddleware from 'redux-saga'
import {sagaWatcher} from './redux/sagas'

const saga = createSagaMaddleware()

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk, fobidenmidlware, saga)
))

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

saga.run(sagaWatcher)

ReactDOM.render(
    app,
    document.getElementById('root')
); 