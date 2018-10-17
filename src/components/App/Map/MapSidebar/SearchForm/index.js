import React, {Component} from 'react'
import Timeline from './Timeline'

import '../../../../../../node_modules/react-vis/dist/style.css'

export default class MapSearchForm extends Component {
    constructor(props) {
        super(props)
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
        this.handleSearchTypeSwitch = this.handleSearchTypeSwitch.bind(this)
        this.handleFormEvent = this.handleFormEvent.bind(this)
    }

    handleSearchSubmit (e) {
        this.props.onSearchSubmit(e.target.value)
    }

    handleFormEvent (e) {
        if (e.target) {
            switch(e.target.type) {
                case 'text':
                    this.props.onFormEvent('searchTerm', e.target.value)
                    break
                case 'checkbox':
                    this.props.onFormEvent(e.target.name)
                    break
                default:
                    this.props.onFormEvent(e.target.value)
                    break
            }
        } else {
            this.props.onFormEvent(e)
        }
    }

    handleSearchTypeSwitch (e) {
        let temp = e.target
        temp.parentNode.getElementsByTagName('select')[0].removeAttribute('disabled')
        if (temp.id === 'placeSearchToggle') {
            document.getElementById('nameSearchToggle').parentNode.getElementsByTagName('select')[0].setAttribute('disabled', null)
        } else {
            document.getElementById('placeSearchToggle').parentNode.getElementsByTagName('select')[0].setAttribute('disabled', null)
        }
        this.handleFormEvent(temp.parentNode.getElementsByTagName('select')[0].value)
    }

    render () {
        return (
            <form onKeyPress={e => {
                if (e.key === 'Enter') e.preventDefault();
            }} >
                <fieldset className="uk-fieldset">
                    <div className="uk-margin">
                        <div className="uk-inline  uk-width-1-1">
                            <input onChange={this.handleFormEvent} id='searchBar' className="uk-input" type="text" placeholder="Search..."/>
                        </div>
                    </div>
                    <div className="uk-margin">
                        <ul className="uk-tab-right" data-uk-tab>
                            <li className="uk-active uk-flex-inline uk-flex-middle uk-margin-small-bottom">
                                <a id='nameSearchToggle' onClick={this.handleSearchTypeSwitch}>by name</a>
                                <div className="uk-width-small">
                                    <select onChange={this.handleFormEvent} className="uk-select">
                                        <option value='name-full'>Full Name</option>
                                        <option value='name-first'>First Name</option>
                                        <option value='name-last'>Last Name</option>
                                    </select>
                                </div>
                            </li>
                            <li className="uk-flex-inline uk-flex-middle">
                                <a id='placeSearchToggle' onClick={this.handleSearchTypeSwitch}>by place</a>
                                <div className="uk-width-small">
                                    <select onChange={this.handleFormEvent} className="uk-select" disabled>
                                        <option value='place-all'>All</option>
                                        <option value='place-birth'>Birth Place</option>
                                        <option value='place-death'>Death Place</option>
                                    </select>
                                </div>
                            </li>
                        </ul>
                    </div>
                </fieldset>

                <fieldset className="uk-fieldset">
                    <div data-uk-grid className='uk-grid-small uk-child-width-1-3'>
                        <div>
                            <div className='uk-text-uppercase uk-text-small uk-margin-small-bottom'>Language</div>
                            <div className="uk-width-small uk-flex uk-flex-column">
                                <label><input onChange={this.handleFormEvent} name='english' className="uk-checkbox" type="checkbox" checked={this.props.filters.language.english}/> English</label>
                                <label><input onChange={this.handleFormEvent} name='german' className="uk-checkbox" type="checkbox" checked={this.props.filters.language.german}/> German</label>
                                <label><input onChange={this.handleFormEvent} name='swedish' className="uk-checkbox" type="checkbox" checked={this.props.filters.language.swedish}/> Swedish</label>
                            </div>
                        </div>
                        <div>
                            <div className='uk-text-uppercase uk-text-small uk-margin-small-bottom'>Gender</div>
                            <div className="uk-width-small uk-flex uk-flex-column">
                                <label><input onChange={this.handleFormEvent} name='female' className="uk-checkbox" type="checkbox" checked={this.props.filters.gender.female}/> Female</label>
                                <label><input onChange={this.handleFormEvent} name='male' className="uk-checkbox" type="checkbox" checked={this.props.filters.gender.male}/> Male</label>
                            </div>
                        </div>
                        <div>
                            <div className='uk-text-uppercase uk-text-small uk-margin-small-bottom'>Marital Status</div>
                            <div className="uk-width-small uk-flex uk-flex-column">
                                <label><input onChange={this.handleFormEvent} name='married' className="uk-checkbox" type="checkbox" checked={this.props.filters.maritalStatus.married}/> Married</label>
                                <label><input onChange={this.handleFormEvent} name='single' className="uk-checkbox" type="checkbox" checked={this.props.filters.maritalStatus.single}/> Single</label>
                                <label><input onChange={this.handleFormEvent} name='child' className="uk-checkbox" type="checkbox" checked={this.props.filters.maritalStatus.child}/> Child</label>
                            </div>
                        </div>
                    </div>
                </fieldset>

                <fieldset className="uk-fieldset">
                    <Timeline timelineData={this.props.timelineData} onFormEvent={this.props.onFormEvent} range={this.props.filters.timeline}/>
                </fieldset>

            </form>
        )
    }

}