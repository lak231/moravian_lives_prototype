import React, {Component} from "react";
import L from 'leaflet';

import 'leaflet/dist/leaflet.css'
import './style.css'

const MAPBOX_TOKEN = 'pk.eyJ1IjoibGFrMjMxIiwiYSI6ImNqbWd3aHlzaTB4NTUzc3JzOGU0OTc3NGsifQ.APNL_JT8i4zJfhgiKCDbsw'

class MapGeo extends Component {
    constructor(props) {
        super(props)
        this.createMap = this.createMap.bind(this)
        this.map = null
    }

    componentDidMount() {
        this.createMap()
    }

    createMap() {
        this.map = L.map('map-container').setView([51.505, -0.09], 13)
        L.tileLayer(`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${MAPBOX_TOKEN}`, {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: MAPBOX_TOKEN
        }).addTo(this.map)
        this.map.invalidateSize(true)
    }

    render() {
        return (
                <div style={{height: '100vh'}} id='map-container' uk-height-viewport="offset-top: true" className='uk-padding-remove uk-width-1-1'>
                </div>
        )
    }
}

export default MapGeo