import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MapPage extends Component {
    render() {
        return (
            <div className="MapPage">
                <h1>This is the login page</h1>
                <Link to="/map">go to map</Link>
            </div>
        );
    }
}

export default MapPage;
