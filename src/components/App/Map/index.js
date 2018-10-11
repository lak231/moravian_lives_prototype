import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as ContactsAPI from '../../../utils/ContactsAPI'

import MapGeo from './MapGeo';
import MapSidebar from './MapSidebar'

import './style.css'
class Map extends Component {
    constructor(props) {
        super(props)
        this.originalData = null
        this.filteredData = null
        this.state = {
            searchTerm: null,
            language: null,
            gender: null,
            archive: null,
            maritalStatus: null,
            overlay: false
        }

        this.handleOverlayToggle = this.handleOverlayToggle.bind(this)
        this.updateData = this.updateData.bind(this)
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
        this.updateData = this.updateData.bind(this)
    }

    componentDidMount() {
        ContactsAPI.getAll().then((contacts) => {
            this.originalData = contacts
            this.filteredData = contacts
        })
    }

    updateData(searchTerm) {
        let temp
        if (searchTerm.length > 0) {
            temp = this.originalData.filter(person => (person['last'].toLowerCase().includes(searchTerm)) ||  (person['first'].toLowerCase().includes(searchTerm)))
        } else {
            temp = this.originalData
        }
        this.filteredData = temp
    }

    handleSearchSubmit(searchTerm) {
        searchTerm = searchTerm.toLowerCase()
        this.updateData(searchTerm)
        this.setState({searchTerm})
    }

    handleOverlayToggle() {
        this.setState(prevState => ({
            overlay: !prevState.overlay
        }))
    }

    render() {
        console.log(this.filteredData)
        return (
            <div className='Map uk-inline uk-width-1-1'>
                <MapGeo searchResults={this.filteredData}/>
                <MapSidebar
                    onSearchSubmit={this.handleSearchSubmit}
                    onOverlayToggle={this.handleOverlayToggle}
                    searchResults={this.filteredData}
                />
            </div>
        )
    }

}



export default Map