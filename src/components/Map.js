import React, { Component } from 'react';
import GoogleMap from 'google-map-react';


class Map extends Component {
    static defaultProps = {
        center: {lat: 59.95, lng: 30.33},
        zoom: 11
    };

    render() {
        return (
            <div style={{width:900, height:900}}>
                <GoogleMap
                    bootstrapURLKeys={{
                        key: "AIzaSyCbwEpFYJn7XRyB3RiWHVgKSgqO7TsdqXU",
                        language: 'en'
                    }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                </GoogleMap>
            </div>
        );
    }
}

export default Map