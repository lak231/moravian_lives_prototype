import React, {Component} from 'react'
import * as d3 from 'd3'

import './style.css'
import MapSearchForm from "../MapSearch/MapSearchForm";
import MapResultCard from "../MapResult/MapResultCard";
import Timeline from "../../Timeline";

export default class MapSidebar extends Component {
    toggle() {
        let content = document.getElementById('MapSidebar__Content');
        if (content.classList.contains('uk-width-xlarge')){
            content.classList.remove('uk-width-xlarge')
            content.classList.add('MapSidebar-hidden')
        } else if (content.classList.contains('MapSidebar-hidden')) {
            content.classList.remove('MapSidebar-hidden')
            content.classList.add('uk-width-xlarge')

        }
    }

    render() {
        return (
            <div className='uk-position-right uk-flex-inline'>
                <button id='MapSidebar__Toggle' style={{'height': '50px'}} className='uk-margin-small-top uk-margin-small-right uk-button uk-background-default' type='button' data-uk-toggle='target: #MapSidebar__Toggle; cls: uk-button-secondary' onClick={this.toggle}><span data-uk-icon="search"/></button>
                <div className='MapSidebar-hidden uk-padding uk-background-default uk-height-1-1' id='MapSidebar__Content'>
                    <ul data-uk-accordion="multiple: true">
                        <li>
                            <a className="uk-accordion-title" href="#">Search & Filter</a>
                            <div className="uk-accordion-content">
                                <MapSearchForm/>
                                <Timeline/>
                            </div>
                        </li>
                        <li>
                            <a className="uk-accordion-title" href="#">Results</a>
                            <div className="uk-accordion-content">
                                <MapResultCard/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}