import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as ContactsAPI from '../../../utils/ContactsAPI'

import MapGeo from './MapGeo';
import MapSidebar from './MapSidebar'

import './style.css'
class Map extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchTerm: null,
            language: null,
            gender: null,
            archive: null,
            data: null,
            maritalStatus: null,
            overlay: false
        }

        this.handleOverlayToggle = this.handleOverlayToggle.bind(this)
        this.updateData = this.updateData.bind(this)
    }

    componentDidMount() {
        ContactsAPI.getAll().then((contacts) => {
            this.setState({ data: contacts })
        })
    }

    handleQuery() {

    }

    updateData() {

    }

    handleOverlayToggle() {
        this.setState(prevState => ({
            overlay: !prevState.overlay
        }))
    }

    render() {
        console.log(this.state.data)
        return (
            <div className='Map uk-inline uk-width-1-1'>
                <MapGeo overlay={this.state.overlay}/>
                <MapSidebar
                    onOverlayToggle={this.handleOverlayToggle}
                    searchResults={this.state.data}
                />
            </div>
        )
    }

}



export default Map