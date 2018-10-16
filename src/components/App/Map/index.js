import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import * as ContactsAPI from '../../../utils/ContactsAPI'

import MapGeo from './MapGeo';
import MapSidebar from './MapSidebar'

import './style.css'

class Map extends Component {
    constructor(props) {
        super(props)
        this.originalData = null
        this.timelineData = null
        this.state = {
            filters: {
                search: {
                    searchTerm: '',
                    searchType: 'name-full'
                },
                language: {
                    english: false,
                    german: false,
                    swedish: false
                },
                gender: {
                    male: false,
                    female: false
                },
                archive: {},
                maritalStatus: {
                    married: false,
                    single: false,
                    child: false
                },
                timeline: {
                    start: null,
                    end: null,
                    type: 'day-birth'
                }
            },
            selectedID: null,
            results: null
        }
        this.updateResults = this.updateResults.bind(this)
        this.handleFormEvent = this.handleFormEvent.bind(this)
    }

    componentDidMount() {
        ContactsAPI.getAll().then((contacts) => {
            this.originalData = contacts
            this.setState({results: contacts})
        })
    }

    handleFormEvent(name, value = this.state.filters.search.searchTerm) {
        let filters = {...this.state.filters}
        switch(name) {
            case 'searchTerm':
                filters.search.searchTerm = value.toLowerCase()
                break
            case 'name-full':
            case 'name-last':
            case 'name-first':
            case 'place-birth':
            case 'place-death':
            case 'place-all':
                filters.search.searchType = name
                break
            case 'day-birth':
            case 'day-death':
                filters.timeline.type = name
                break
            case 'range':
                filters.timeline.start = value[0]
                filters.timeline.end = value[1]
                break
            default:
                if (name in filters.gender) {
                    filters.gender[name] = !filters.gender[name]
                } else if (name in filters.maritalStatus) {
                    filters.maritalStatus[name] = !filters.maritalStatus[name]
                } else if (name in this.state.filters.language) {
                    filters.language[name] = !filters.language[name]
                }
                break
        }
        this.updateResults(filters)
    }

    updateResults(filters) {
        let activeFilters = {}
        let categories = Object.keys(filters)
        categories.splice(categories.indexOf('search'), 1)
        categories.splice(categories.indexOf('timeline'), 1)
        for (const key of categories) {
            let allActive = false
            let options = Object.keys(filters[key])
            activeFilters[key] = {}
            for (const subKey of options) {
                allActive = allActive || filters[key][subKey]
                if (filters[key][subKey]) {
                    activeFilters[key][subKey] = true
                }
            }
            if (!allActive && key !== 'search') activeFilters[key] = true
        }

        let filteredData
        switch(filters.search.searchType) {
            case 'name-full':
                filteredData = this.originalData.filter((person) => person['last'].toLowerCase().includes(filters.search.searchTerm) || person['first'].toLowerCase().includes(filters.search.searchTerm))
                break
            case 'name-last':
                filteredData = this.originalData.filter((person) => person['last'].toLowerCase().includes(filters.search.searchTerm))
                break
            case 'name-first':
                filteredData = this.originalData.filter((person) => person['first'].toLowerCase().includes(filters.search.searchTerm))
                break
            case 'place-birth':
                filteredData = this.originalData.filter((person) => person['birthPlace'].toLowerCase().includes(filters.search.searchTerm))
                break
            case 'place-death':
                filteredData = this.originalData.filter((person) => person['deathPlace'].toLowerCase().includes(filters.search.searchTerm))
                break
            case 'place-all':
                filteredData = this.originalData.filter((person) => person['birthPlace'].toLowerCase().includes(filters.search.searchTerm) || person['deathPlace'].toLowerCase().includes(filters.search.searchTerm))
                break
        }

        let results = filteredData.filter(
            (person) => {
                let passed = true
                for (const key of categories) {
                    passed = passed && ((typeof activeFilters[key] !== 'boolean' && person[key] in activeFilters[key]) || (typeof activeFilters[key] === 'boolean' && activeFilters[key]))
                }
                if (filters.timeline.start && filters.timeline.end) {
                    let tempDate
                    switch(filters.timeline.type) {
                        case 'day-birth':
                            tempDate = new Date(person['birthDay'])
                            passed = passed && (tempDate >= filters.timeline.start) && (tempDate <= filters.timeline.end)
                            break
                        case 'day-death':
                            tempDate = new Date(person['deathDay'])
                            passed = passed && (tempDate >= filters.timeline.start) && (tempDate <= filters.timeline.end)
                            break
                    }
                }
                return passed
            }
        )

        this.setState({filters, results})
    }



    render() {
        if (this.state.results) {
            return (
                <div className='Map uk-inline uk-width-1-1'>
                    <MapGeo searchResults={this.state.results}/>
                    <MapSidebar
                        onFormEvent={this.handleFormEvent}
                        filters={this.state.filters}
                        searchResults={this.state.results}
                        timelineData = {this.timelineData}
                    />
                </div>
            )
        } else {
            return (<div>Loading...</div>)
        }
    }

}



export default Map