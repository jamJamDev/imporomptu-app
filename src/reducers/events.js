import _ from 'lodash';

import { FETCH_EVENTS } from "../actions/index";

export default function(state = {}, action) {
    switch (action.type){
        case FETCH_EVENTS:
            console.log("FETCH_EVENTS CASE: ", _.mapKeys(action.payload.data, 'id'));
            console.log("STATE: ", state);
            return _.mapKeys(action.payload.data, 'id');
        default:
            return state;
    }
}