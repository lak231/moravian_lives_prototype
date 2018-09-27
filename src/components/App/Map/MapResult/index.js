import React, {Component} from 'react'

import MapResultCard from './MapResultCard'

class MapResult extends Component  {
    render() {
        return (
            <div id='MapResult' data-uk-offcanvas="overlay: false; flip: true; bg-close: false; container: map-container">
                <div style={{width: '25vw'}} className="uk-background-default uk-offcanvas-bar uk-margin-xlarge-top uk-margin-xlarge-bottom uk-position-left">
                    <button className="uk-offcanvas-close" type="button" data-uk-close />
                    <MapResultCard/>
                </div>
            </div>
        )
    }
}

export default MapResult