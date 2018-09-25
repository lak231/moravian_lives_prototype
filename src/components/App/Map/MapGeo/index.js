import React, {Component} from "react";
import L from 'leaflet';

import 'leaflet/dist/leaflet.css'

const MAPBOX_TOKEN = 'pk.eyJ1IjoibGFrMjMxIiwiYSI6ImNqbWd3aHlzaTB4NTUzc3JzOGU0OTc3NGsifQ.APNL_JT8i4zJfhgiKCDbsw'

class MapGeo extends Component {
    constructor(props) {
        super(props)
        this.createMap = this.createMap.bind(this)
    }

    componentDidMount() {
        this.createMap()
    }

    createMap() {
        let mymap = L.map('map-container').setView([51.505, -0.09], 13);
        L.tileLayer(`https://api.mapbox.com/v4/mapbox.light/page.html?access_token=${MAPBOX_TOKEN}`, {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.light',
            accessToken: MAPBOX_TOKEN
        }).addTo(mymap);
    }

    render() {
        return (
                <div id='map-container' uk-height-viewport="offset-top: true" className='uk-padding-remove'>
                </div>
        )
    }
}

export default MapGeo