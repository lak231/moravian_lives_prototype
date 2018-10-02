import React, {Component} from 'react'
import * as d3 from 'd3'

import './style.css'
import MapSearchForm from "./SearchForm";
import ResultCard from "./ResultCard";
import Timeline from "../../Timeline";

export default class MapSidebar extends Component {


    toggle() {
        let content = document.getElementsByClassName('MapSidebar')[0]
        console.log(content)
        content.classList.toggle('MapSidebar_show')
    }

    render() {
        return (
            <div className='MapSidebar uk-position-right uk-flex-inline'>
                <button id='MapSidebar__Toggle' style={{'height': '50px'}} className='uk-margin-small-top uk-margin-small-right uk-button uk-background-default' type='button' data-uk-toggle='target: #MapSidebar__Toggle; cls: uk-button-secondary' onClick={this.toggle}><span data-uk-icon="search"/></button>
                <div className='uk-padding uk-background-default uk-height-1-1 uk-width-xlarge'>
                    <ul data-uk-accordion="multiple: true">
                        <li>
                            <a className="uk-accordion-title" href="#">Search & Filter</a>
                            <div className="uk-accordion-content">
                                <MapSearchForm overlayToggle={this.props.overlayToggle}/>
                                <Timeline/>
                            </div>
                        </li>
                        <li>
                            <a className="uk-accordion-title" href="#">Results</a>
                            <div className="uk-accordion-content">
                                {this.props.searchResults && this.props.searchResults.map(d => <ResultCard key={d.id} data={d}/>)}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}