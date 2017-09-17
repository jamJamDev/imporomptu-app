
import React from 'react';
import reducers from './reducers';
import LoginPage from './containers/LoginPage';
import MapPage from './containers/MapPage';
import CreateEventPage from './components/CreateEventPage';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import './index.css';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/map" component={MapPage} />
                    <Route path="/create" component={CreateEventPage} />
                    <Route path="/" component={LoginPage} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
