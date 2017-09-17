
import reducers from './reducers';
import LoginPage from './containers/LoginPage';
import MapPage from './containers/MapPage';
import './index.css';
import App from './components/App';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/map" component={MapPage} />
                    <Route path="/" component={LoginPage} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
>>>>>>> bc952f8c334b193a217616abe947d02f6d848a94
