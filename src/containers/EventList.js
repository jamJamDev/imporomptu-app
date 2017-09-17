import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventListItem from '../components/EventListItem';
import { fetchEvents } from "../actions/index";
import _ from 'lodash';
import 'mui-react/dist/mui-react.css';
import {Button} from 'mui-react';

class EventList extends Component {
    componentDidMount() {
        this.props.fetchEvents();
    }

    renderEvents(){
        return _.map(this.props.fetchEvents().payload.events, eventData => {
            return (
                <EventListItem
                    key={eventData.eventID}
                    eventData={eventData} />
            );
        });
    }

    render() {return(
        <div>
            <h4>Add New Filter <plus style={{fontSize:23, color:"#14ad24"}}><b>+</b></plus></h4>
            <ul className="col-md-4 list-group" style={{marginTop:-20}}>
                {this.renderEvents()}
            </ul>
            <Button style={{marginRight:4 , backgroundColor:"#1934e5", outline:"none", color:"white", float:"right"}}>Add New Event</Button>
        </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return { eventData: state.eventData };
}

export default connect(mapStateToProps, { fetchEvents })(EventList);