import React, {Component} from 'react'

export default class MapSearchForm extends Component {
    render () {
        return (
            <form>
                <fieldset className="uk-fieldset">
                    <button id='overlay-toggle' type='button' data-uk-toggle='target: #overlay-toggle; cls: uk-button-secondary' onClick={this.props.overlayToggle} className='uk-button uk-button-default uk-button-small'> Toggle Overlay </button>
                    <div className="uk-margin">
                        <div className="uk-inline  uk-width-1-1">
                            <span className="uk-form-icon uk-form-icon-flip" data-uk-icon="icon:  search"> </span>
                            <input className="uk-input" type="text" placeholder="Search..."/>
                        </div>
                    </div>

                    <div className="uk-margin">
                        <select className="uk-select">
                            <option>Option 01</option>
                            <option>Option 02</option>
                        </select>
                    </div>

                    <div className="uk-margin">
                        <select className="uk-select">
                            <option>Option 01</option>
                            <option>Option 02</option>
                        </select>
                    </div>

                </fieldset>
            </form>
        )
    }

}