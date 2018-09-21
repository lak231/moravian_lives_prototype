import React, {Component} from 'react'
import * as d3 from 'd3'
import * as topojson from 'topojson'

class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            zoomTransform: null
        }
        this.createMap = this.createMap.bind(this)
    }

    componentDidMount() {
        fetch('https://unpkg.com/world-atlas@1/world/50m.json')
            .then(response => response.json())
            .then(data => {
                this.setState({data})
            })
            .then(promise => this.createMap())
    }

    createMap() {
        const svg = d3.select('#map-container')
            .append('svg')
            .attr('width', 1000)
            .attr('height', 500)
            .call(d3.zoom().on("zoom", function (){g.attr("transform", d3.event.transform)}))

        const projection = d3.geoMercator()

        const g = svg.append("g");

        const path = d3.geoPath().projection(projection)

        g.selectAll("path")
            .data(topojson.feature(this.state.data, this.state.data.objects.countries).features)
            .enter().append("path")
            .attr("d", path)
            .on('mouseover', function() {
                d3.select(this).style('fill', 'red');
            })
            .on('mouseout', function() {
                d3.select(this).style('fill', 'black');
            })
    }

    render() {
        return (
            <div className="uk-height-1-1 uk-section uk-section-small uk-flex uk-flex-middle uk-text-center">
                <div className="uk-width-1-1">
                    <div id='map-container' className="uk-container">
                    </div>
                </div>
            </div>
        )
    }
}

export default Map