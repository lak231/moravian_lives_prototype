import React, {Component} from 'react'

import MapResultCard from './MapResultCard'

class MapResult extends Component  {
    render() {
        return (
            <div id='MapResult' data-uk-offcanvas="overlay: false; flip: true; container: '#map-container'" className='uk-margin-xlarge-top'>
                <div style={{width: '25vw'}} className="uk-background-default uk-offcanvas-bar">
                    <button className="uk-offcanvas-close" type="button" data-uk-close />
                    <MapResultCard/>
                </div>
            </div>
        )
    }
}

export default MapResult