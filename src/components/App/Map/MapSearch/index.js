import React, {Component} from 'react'
import * as d3 from 'd3'
import Timeline from '../../Timeline'
import Form from './MapSearchForm'
import './style.css'

class MapSearch extends Component {
    toggle() {
        let content = document.getElementById('MapSearch__Content');
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }

    render() {
        return (
                <div className='uk-position-bottom-left uk-padding-small uk-position-z-index uk-background-default' >
                    <div data-uk-margin>
                        <button className="uk-button uk-button-default uk-button-small" type="button"
                                data-uk-toggle="target: #MapResult">Result
                        </button>
                        <button id='search-toggle' type='button' data-uk-toggle='target: #search-toggle; cls: uk-button-secondary' onClick={this.toggle} className='uk-button uk-button-default uk-button-small'> Search and Filter </button>
                        <button id='overlay-toggle' type='button' data-uk-toggle='target: #overlay-toggle; cls: uk-button-secondary' onClick={this.props.overlayToggle} className='uk-button uk-button-default uk-button-small'> Toggle Overlay </button>
                    </div>
                    <div data-uk-grid id='MapSearch__Content'>
                        <div className='uk-width-3-4'> <Timeline/> </div>
                        <div className='uk-width-1-4'> <Form/> </div>
                    </div>
                </div>
        )
    }

}

export default MapSearch