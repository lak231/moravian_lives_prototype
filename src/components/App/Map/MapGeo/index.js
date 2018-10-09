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
        this.feature = null
        this.svgMap = null
        this.gMap = null
        this.update = this.update.bind(this)
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
        this.svgMap = d3.select(this.map.getPanes().overlayPane).append("svg")
        this.gMap = this.svgMap.append("g").attr("class", "leaflet-zoom-hide")
        this.feature = this.gMap.selectAll("circle")
            .data([{LatLng: new L.LatLng(40.744608, -74.165531)}, {LatLng: new L.LatLng(40.726763, -73.997203)}])
            .enter().append("circle")
            .style("stroke", "black")
            .style("opacity", .6)
            .style("fill", "red")
            .style('cursor', 'pointer')
            .attr("r", 20);
        this.map.on('moveend', this.update)
        this.update()
    }

    update() {
        console.log('before', this.gMap.node().getBBox())
        let map = this.map
        this.feature.attr("transform",
            function(d) {
                return "translate("+
                    map.latLngToLayerPoint(d.LatLng).x +","+
                    map.latLngToLayerPoint(d.LatLng).y +")";
            }
        )
        let bbox = this.gMap.node().getBBox()
        this.svgMap.attr("width", bbox.width)
            .attr("height", bbox.height)
            .style("left", bbox.x)
            .style("top", bbox.y);
        this.gMap.attr("transform", "translate(" + -bbox.x + "," + -bbox.y + ")");
        console.log('after', this.gMap.node().getBBox())
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
            <div style={{'height': '100vh', 'width': '100vw'}} id='map-container' data-uk-height-viewport="offset-top: true" className='uk-padding-remove uk-width-1-1'>
            </div>
        )
    }
}

export default MapGeo