import React, {Component} from 'react'

import './style.css'
import MapSearchForm from "./SearchForm"
import ResultCard from "./ResultCard"

export default class MapSidebar extends Component {
    toggle() {
        let content = document.getElementsByClassName('MapSidebar')[0]
        content.classList.toggle('MapSidebar_show')
    }

    render() {
        const selectedID = this.props.selectedID
        return (
            <div data-uk-height-viewport='offset-top: true' className='MapSidebar uk-position-right uk-flex-inline'>
                <div className='uk-flex uk-flex-column'>
                    <button style={{'height': '50px'}} className='uk-margin-small-top uk-margin-small-right uk-button uk-background-default' type='button' onClick={this.toggle}><span data-uk-icon="search"/></button>
                    <button id='overlayToggleButton' style={{'height': '50px'}} className='uk-margin-small-top uk-margin-small-right uk-button uk-background-default' type='button' data-uk-toggle="target: #overlayToggleButton; cls: uk-background-secondary"><span data-uk-icon="world"/></button>
                </div>
                <div className='uk-padding uk-background-default uk-width-xlarge uk-height-1-1'>
                    <ul id='MapSidebar-Accordion' data-uk-accordion="multiple: false" className='uk-height-1-1'>
                        <li id='MapSidebar-Form'>
                            <a className="uk-accordion-title">Search & Filter</a>
                            <div className="uk-accordion-content">
                                <MapSearchForm timelineWidth={this.props.timelineWidth} filters={this.props.filters} onFormEvent={this.props.onFormEvent} timelineData={this.props.timelineData}/>
                            </div>
                        </li>
                        <li id='MapSidebar-Results' style={{'height': 'calc(100% - 60px)'}}>
                            <a className="uk-accordion-title">Results</a>
                            <div className="uk-accordion-content" style={{'overflowY': 'auto', 'height': 'calc(100% - 60px)'}}>
                                {this.props.searchResults && <p>showing {this.props.searchResults.length} results</p>}
                                {this.props.searchResults && this.props.searchResults.map(d => <ResultCard key={d.id} data={d} selectedID={selectedID}/>)}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}