import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventListItem from '../components/EventListItem';
import { fetchEvents } from "../actions/index";
import _ from 'lodash';

class EventList extends Component {
    componentDidMount() {
        this.props.fetchEvents();
    }

    renderEvents(){
        console.log(this.props.fetchEvents());
        console.log(this.props);
        console.log(this.state)
        return _.map(this.props.fetchEvents().payload.events, eventData => {
            console.log("EVENT DATA:", eventData);
            return (
                <EventListItem
                    key={eventData.eventID}
                    eventData={eventData} />
            );
        });
        /*eventItems = data.payload.events.forEach((eventData) => {
            return (
                <EventListItem
                    key={eventData.eventID}
                    eventData={eventData} />
            );
        });*/
    }

    render() {return(
            <ul className="col-md-4 list-group">
                {this.renderEvents()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return { eventData: state.eventData };
}

export default connect(mapStateToProps, { fetchEvents })(EventList);