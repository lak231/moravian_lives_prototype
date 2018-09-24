import React, {Component} from 'react'

import MapGeo from './MapGeo';
import MapSearch from './MapSearch';

class Map extends Component {
    render() {
        return (
            <div>
                <MapGeo/>
                <MapSearch/>
            </div>
        )
    }

}

export default Map