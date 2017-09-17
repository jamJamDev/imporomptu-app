import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import EventReducer from './events';

const rootReducer = combineReducers({
    events: EventReducer,
    form: formReducer
});

export default rootReducer;