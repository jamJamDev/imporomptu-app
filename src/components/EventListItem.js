import React from 'react';

const EventListItem = ({eventData}) => {
    console.log(eventData);
    return (
        <li className="list-group-item">
            <div className="video-list media">
                <div className="media-body">
                    <h1>{eventData.title}</h1>
                    <div>Description: {eventData.description}</div>
                </div>
            </div>
        </li>
    )
};

export default EventListItem;