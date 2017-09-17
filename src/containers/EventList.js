import React from 'react';
import { connect } from 'react-redux';
import EventListItem from '../components/EventListItem';
import { fetchEvents } from "../actions/index";

const EventList = (props) => {
    const data = fetchEvents();
    console.log(data);
    const eventItems = data.payload.events.forEach((eventData) => {
        return (
            <EventListItem
                key={eventData.eventID}
                eventData={eventData} />
        );
    });

    return(
        <ul className="col-md-4 list-group">
            {eventItems}
        </ul>
    );
}

function mapStateToProps({ eventData }) {
    return { eventData };
}

export default connect(mapStateToProps)(EventList);