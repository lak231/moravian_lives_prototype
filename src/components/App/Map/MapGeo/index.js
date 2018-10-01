import React, {Component} from "react";
import * as d3 from 'd3'
import L from 'leaflet'

import 'leaflet/dist/leaflet.css'
import './style.css'

const MAPBOX_TOKEN = 'pk.eyJ1IjoibGFrMjMxIiwiYSI6ImNqbWd3aHlzaTB4NTUzc3JzOGU0OTc3NGsifQ.APNL_JT8i4zJfhgiKCDbsw'

class MapGeo extends Component {
    constructor(props) {
        super(props)
        // this.createMap = this.createMap.bind(this)
        // this.addOverlay = this.addOverlay.bind(this)
        this.map = null
        this.imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg'
        this.imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]]
        this.image =  L.imageOverlay(this.imageUrl, this.imageBounds)
    }

    componentDidMount() {
        this.createMap()
    }

    createMap() {
        this.map = L.map('map-container').setView([40.733327, -74.172445], 13)
        L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${MAPBOX_TOKEN}`, {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.light',
            accessToken: MAPBOX_TOKEN
        }).addTo(this.map)
    }

    addOverlay() {
        if (this.props.overlay) {
            this.image.addTo(this.map);
        } else {
            this.map.removeLayer(this.image)
        }
    }

    render() {
        (this.map && this.addOverlay())
        return (
            <div style={{height: '100vh'}} id='map-container' data-uk-height-viewport="offset-top: true" className='uk-padding-remove uk-width-1-1'>
            </div>
        )
    }
}

export default MapGeo