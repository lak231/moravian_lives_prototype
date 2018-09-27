import React, {Component} from 'react'

import MapGeo from './MapGeo';
import MapSearch from './MapSearch';
import MapResult from './MapResult'

class Map extends Component {
    constructor(props) {
        super(props)
        this.toggleOverlay = this.toggleOverlay.bind(this)
        this.state = {
            overlay: false
        }
    }

    toggleOverlay() {
        this.setState(prevState => ({
            overlay: !prevState.overlay
        }))
    }

    render() {
        return (
            <div>
                <MapGeo overlay={this.state.overlay}/>
                <MapSearch overlayToggle={this.toggleOverlay}/>
                <MapResult />
            </div>
        )
    }

}

export default Map