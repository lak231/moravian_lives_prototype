import React, {Component} from 'react'

import MapGeo from './MapGeo';
import MapSidebar from './MapSidebar'

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
            <div className='uk-inline uk-width-1-1'>
                <MapGeo overlay={this.state.overlay}/>
                <MapSidebar overlayToggle={this.toggleOverlay}/>
            </div>
        )
    }

}

export default Map