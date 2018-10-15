import React, {Component} from "react"
import { CircleMarker, Map, TileLayer, Polyline } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import './style.css'

// const MAPBOX_TOKEN = 'pk.eyJ1IjoibGFrMjMxIiwiYSI6ImNqbWd3aHlzaTB4NTUzc3JzOGU0OTc3NGsifQ.APNL_JT8i4zJfhgiKCDbsw'

class MapGeo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedID: null
        }
        this.handleCircleK = this.handleCircleK.bind(this)
        this.handleCircleBlur = this.handleCircleBlur.bind(this)
    }

    handleCircleK(d) {
        this.setState({selectedID: d.id})
    }

    handleCircleBlur() {
        this.setState({selectedID: null})
        console.log('state yo', this.state)
    }

    componentDidMount() {
        document.getElementById('map-container').setAttribute('uk-height-viewport', 'offset-top: true')
    }

    render() {
        return (
            <Map style={{'height': '100vh', 'width': '100vw'}} id='map-container'  className='uk-padding-remove uk-width-1-1' center={[16.765106, 9.479143]} zoom={3}>
                <TileLayer
                    attribution='Tiles © Esri — Esri, DeLorme, NAVTEQ'
                    url={'http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'}
                />
                {this.props.searchResults && this.props.searchResults.map((d) => {
                    let bound = this.handleCircleK.bind(this, d)
                    let boundBlur = this.handleCircleBlur.bind(this)
                    return (
                        <div>
                        <CircleMarker key={d.id} center={d.birthPlaceCoord} color={this.state.selectedID === d.id ? 'red' : 'gray'} onClick={bound} onBlur={boundBlur}/>
                        <CircleMarker center={d.deathPlaceCoord} color={this.state.selectedID === d.id ? 'red' : 'gray'} onClick={bound} onBlur={boundBlur}/>
                        <Polyline positions={[d.birthPlaceCoord, d.deathPlaceCoord]} color={this.state.selectedID === d.id ? 'red' : 'gray'} onClick={bound} onBlur={boundBlur}/>
                        </div>
                    )
                })}
            </Map>

        )
    }
}

//            <div style={{'height': '100vh', 'width': '100vw'}} id='map-container' {...this.test} className='uk-padding-remove uk-width-1-1'>
//             </div>

// (`https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${MAPBOX_TOKEN}`, {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox.light',
//     accessToken: MAPBOX_TOKEN
// })

export default MapGeo