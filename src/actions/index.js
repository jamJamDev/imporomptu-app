import eventData from './dummyData.json';

export const FETCH_EVENTS = 'fetch_events';

export function fetchEvents() {
    console.log(FETCH_EVENTS);
    console.log("JSON: ", eventData);
    return {
        type: FETCH_EVENTS,
        payload: eventData
    };
}