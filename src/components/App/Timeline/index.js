import React, {Component} from 'react'
import * as d3 from 'd3'

export default class Timeline extends Component {
    constructor(props){
        super(props)
        this.createDummyTimeline = this.createDummyTimeline.bind(this)
    }
    componentDidMount() {
        this.createDummyTimeline()
    }

    createDummyTimeline() {
        let svg = d3.select("#Timeline")
                .append('svg'),
            margin = {top: 30, right: 20, bottom: 30, left: 50},
            width = 1000 - margin.left - margin.right,
            height = 450 - margin.top - margin.bottom;

        svg.attr('width', 1000)
            .attr('height', 450)

        let brush = d3.brushX()
            .extent([[0, 0], [width, height]])
            .on("start brush end", brushmoved);

        var x = d3.scaleLinear().range([0, width]);

        let g = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        var gBrush = g.append("g")
            .attr("class", "brush")
            .call(brush);

        var handle = gBrush.selectAll(".handle--custom")
            .data([{type: "w"}, {type: "e"}])
            .enter().append("path")
            .attr("class", "handle--custom")
            .attr("fill", "#666")
            .attr("fill-opacity", 0.8)
            .attr("stroke", "#000")
            .attr("stroke-width", 1.5)
            .attr("cursor", "ew-resize")


        gBrush.call(brush.move, [0.3, 0.5].map(x));

        function brushmoved() {
            var s = d3.event.selection;
            if (s == null) {
                handle.attr("display", "none");
            } else {
                handle.attr("display", null).attr("transform", function (d, i) {
                    return "translate(" + s[i] + "," + height / 2 + ")";
                });
            }
        }
    }

    render() {
        return (
            <div id='Timeline'/>
        )
    }
}