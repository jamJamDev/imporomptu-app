import React from 'react';

const EventListItem = ({eventData}) => {
    console.log(eventData);
    return (
        <div className="video-list media list-group-item">
            <div className="media-body">
                <h1>{eventData.eventTitle}</h1>
                <div>Description: {eventData.description}</div>
            </div>
        </div>
    )
};

export default EventListItem;