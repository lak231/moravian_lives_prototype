import React, {Component} from 'react'
import Timeline from "../../../Timeline";

export default class MapSearchForm extends Component {
    constructor(props) {
        super(props)
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
        this.handleSearchTypeSwitch = this.handleSearchTypeSwitch.bind(this)
        this.handleTest = this.handleTest.bind(this)
    }

    handleTest (e) {
        console.log(e.target.value)
    }

    handleSearchSubmit (e) {
        this.props.onSearchSubmit(e.target.value)
    }

    handleSearchTypeSwitch (e) {
        let temp = e.target
        if (temp.id === 'placeSearchToggle') {
            temp.parentNode.getElementsByTagName('select')[0].removeAttribute('disabled')
            document.getElementById('nameSearchToggle').parentNode.getElementsByTagName('select')[0].setAttribute('disabled', null)
        } else {
            temp.parentNode.getElementsByTagName('select')[0].removeAttribute('disabled')
            document.getElementById('placeSearchToggle').parentNode.getElementsByTagName('select')[0].setAttribute('disabled', null)

        }
    }

    render () {
        return (
            <form>
                <fieldset className="uk-fieldset">
                    <div className="uk-margin">
                        <div className="uk-inline  uk-width-1-1">
                            <input onChange={this.handleSearchSubmit} id='searchBar' className="uk-input" type="text" placeholder="Search..."/>
                        </div>
                    </div>
                    <div className="uk-margin">
                        <ul className="uk-tab-right" data-uk-tab>
                            <li className="uk-active uk-flex-inline uk-flex-middle uk-margin-small-bottom">
                                <a id='nameSearchToggle' onClick={this.handleSearchTypeSwitch}>by name</a>
                                <div className="uk-width-small">
                                    <select onChange={this.handleTest} className="uk-select">
                                        <option>Full Name</option>
                                        <option>First Name</option>
                                        <option>Last Name</option>
                                    </select>
                                </div>
                            </li>
                            <li className="uk-flex-inline uk-flex-middle">
                                <a id='placeSearchToggle' onClick={this.handleSearchTypeSwitch}>by place</a>
                                <div className="uk-width-small">
                                    <select className="uk-select" disabled>
                                        <option>Both</option>
                                        <option>Birth Place</option>
                                        <option>Death Place</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div data-uk-grid className='uk-grid-small uk-child-width-1-3'>
                        <div>
                            <div className='uk-text-uppercase uk-text-small uk-margin-small-bottom'>Language</div>
                            <div className="uk-width-small uk-flex uk-flex-column">
                                <label><input className="uk-checkbox" type="checkbox" checked='true'/> English</label>
                                <label><input className="uk-checkbox" type="checkbox" checked='true'/> German</label>
                                <label><input className="uk-checkbox" type="checkbox" checked='true'/> Swedish</label>
                            </div>
                        </div>
                        <div>
                            <div className='uk-text-uppercase uk-text-small uk-margin-small-bottom'>Gender</div>
                            <div className="uk-width-small uk-flex uk-flex-column">
                                <label><input className="uk-checkbox" type="checkbox" data-checked='checked: true'/> Male</label>
                                <label><input className="uk-checkbox" type="checkbox" checked='true'/> Female</label>
                            </div>
                        </div>
                        <div>
                            <div className='uk-text-uppercase uk-text-small uk-margin-small-bottom'>Marital Status</div>
                            <div className="uk-width-small uk-flex uk-flex-column">
                                <label><input className="uk-checkbox" type="checkbox" checked='true'/> Married</label>
                                <label><input className="uk-checkbox" type="checkbox" checked='true'/> Single</label>
                                <label><input className="uk-checkbox" type="checkbox" checked='true'/> Child</label>
                            </div>
                        </div>
                    </div>
                    <Timeline/>
                </fieldset>
            </form>
        )
    }

}