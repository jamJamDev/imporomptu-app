import React from 'react';
import 'mui-react/dist/mui-react.css';
import {Button} from 'mui-react';

const EventListItem = ({eventData}) => {
    console.log(eventData);
    return (
        <div className="video-list media list-group-item">
            <div className="media-body">
                <h2 style={{marginBottom:-15}}>{eventData.eventTitle}</h2>
                <h3 style={{marginBottom:10}}>{eventData.date} @ {eventData.time} - {eventData.location.address}</h3>
                <div style={{marginBottom:10}}>{eventData.description}</div>
                <div style={{marginBottom:10}}>{eventData.contactInfo}</div>
                <div style={{marginBottom:10}}>{eventData.minParticipants} of {eventData.maxParticipants} people are participating</div>
                <div>#{eventData.category}</div>
                <Button style={{backgroundColor:"#14ad24", outline:"none", color:"white", float:"right"}}>Join</Button>
            </div>
        </div>
    )
};

export default EventListItem;