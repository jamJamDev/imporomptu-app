import eventData from './dummyData.json';

export const FETCH_EVENTS = 'fetch_events';

export function fetchEvents() {
    return {
        type: FETCH_EVENTS,
        payload: eventData
    };
}