import React, { Component } from 'react';
import GoogleMap from 'google-map-react';


class Map extends Component {
    static defaultProps = {
        center: {lat: 30.3, lng: -97.7431},
        zoom: 12
    };

    render() {
        return (
            <div style={{width:1450, height:950, float:"left"}}>
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