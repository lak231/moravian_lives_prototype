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
        this.filteredData = null
        this.state = {
            search: {
                searchTerm: null,
                searchType: 'name-full'
            },
            filters: {
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
                }
            },
            timeline: {
                start: null,
                end: null,
                type: 'birth'
            },
            selectedID: null,
            filteredData: null,
            results: null,
        }
        this.updateResult = this.updateResult.bind(this)
        this.handleFormEvent = this.handleFormEvent.bind(this)
    }

    componentDidMount() {
        ContactsAPI.getAll().then((contacts) => {
            this.originalData = contacts
            this.setState({filteredData: contacts, results: contacts})
        })
    }

    handleFormEvent(name, value = this.state.search.searchTerm) {
        console.log('event triggered')
        let temp
        switch(name) {
            case 'searchTerm':
                value = value.toLowerCase()
                switch(this.state.search.searchType) {
                    case 'name-full':
                        temp = this.originalData.filter(person => (person['last'].toLowerCase().includes(value)) ||  (person['first'].toLowerCase().includes(value)))
                        this.setState({search:{...this.state.search, searchTerm: value}, filteredData: temp})
                        break
                    case 'name-last':
                        temp = this.originalData.filter(person => (person['last'].toLowerCase().includes(value)))
                        this.setState({search:{...this.state.search, searchTerm: value}, filteredData: temp})
                        break
                    case 'name-first':
                        temp = this.originalData.filter(person => (person['first'].toLowerCase().includes(value)))
                        this.setState({search:{...this.state.search, searchTerm: value}, filteredData: temp})
                        break
                    case 'place-birth':
                        temp = this.originalData.filter(person => (person['birthPlace'].toLowerCase().includes(value)))
                        this.setState({search:{...this.state.search, searchTerm: value}, filteredData: temp})
                        break
                    case 'place-death':
                        temp = this.originalData.filter(person => (person['deathPlace'].toLowerCase().includes(value)))
                        this.setState({search:{...this.state.search, searchTerm: value}, filteredData: temp})
                        break
                    case 'place-all':
                        temp = this.originalData.filter(person => (person['deathPlace'].toLowerCase().includes(value) || person['birthPlace'].toLowerCase().includes(value)))
                        this.setState({search:{...this.state.search, searchTerm: value}, filteredData: temp})
                        break
                    default:
                        break
                }
                break

            case 'name-full':
                if (this.state.search.searchTerm) {
                    temp = this.originalData.filter(person => (person['last'].toLowerCase().includes(value)) ||  (person['first'].toLowerCase().includes(value)))
                    this.setState({search:{...this.state.search, searchType: name}, filteredData: temp})
                } else {
                    this.setState({search:{...this.state.search, searchType: name}})
                }
                break
            case 'name-last':
                if (this.state.search.searchTerm) {
                    temp = this.originalData.filter(person => (person['last'].toLowerCase().includes(value)))
                    this.setState({search:{...this.state.search, searchType: name}, filteredData: temp})
                } else {
                    this.setState({search:{...this.state.search, searchType: name}})
                }
                break
            case 'name-first':
                if (this.state.search.searchTerm) {
                    temp = this.originalData.filter(person => (person['first'].toLowerCase().includes(value)))
                    this.setState({search:{...this.state.search, searchType: name}, filteredData: temp})
                } else {
                    this.setState({search:{...this.state.search, searchType: name}})
                }
                break
            case 'place-birth':
                if (this.state.search.searchTerm) {
                    temp = this.originalData.filter(person => (person['birthPlace'].toLowerCase().includes(value)))
                    this.setState({search:{...this.state.search, searchType: name}, filteredData: temp})
                } else {
                    this.setState({search:{...this.state.search, searchType: name}})
                }
                break
            case 'place-death':
                if (this.state.search.searchTerm) {
                    temp = this.originalData.filter(person => (person['deathPlace'].toLowerCase().includes(value)))
                    this.setState({search:{...this.state.search, searchType: name}, filteredData: temp})
                } else {
                    this.setState({search:{...this.state.search, searchType: name}})
                }
                break
            case 'place-all':
                if (this.state.search.searchTerm) {
                    temp = this.originalData.filter(person => (person['deathPlace'].toLowerCase().includes(value) || person['birthPlace'].toLowerCase().includes(value)))
                    this.setState({search: {...this.state.search, searchType: name}, filteredData: temp})
                } else {
                    this.setState({search:{...this.state.search, searchType: name}})
                }
                break

            default:
                if (name in this.state.filters.gender) {
                    this.setState({filters: {...this.state.filters, gender:{...this.state.filters.gender, [name]: !this.state.filters.gender[name]}}})
                } else if (name in this.state.filters.maritalStatus) {
                    this.setState({filters: {...this.state.filters, maritalStatus:{...this.state.filters.maritalStatus, [name]: !this.state.filters.maritalStatus[name]}}})
                } else if (name in this.state.filters.language) {
                    this.setState({filters: {...this.state.filters, language:{...this.state.filters.language, [name]: !this.state.filters.language[name]}}})
                }
                break
        }
        this.updateResult()
    }

    updateResult() {
        let test = false
        for (let key in this.state.filters) {
            for (let subKey in this.state.filters[key]) {
                test = test || this.state.filters[key][subKey]
            }
        }
        if (!test) {
            this.setState({results: this.state.filteredData})
        } else {
            let temp = this.state.filteredData.filter((data) => {
                if (this.state.filters.gender[data.gender] && this.state.filters.language[data.language] && this.state.filters.maritalStatus[data.maritalStatus]) {
                    return data
                }
            })
            this.setState({results: temp})
        }
    }

    render() {
        console.log(this.state)
        if (this.state.filteredData) {
            return (
                <div className='Map uk-inline uk-width-1-1'>
                    <MapGeo searchResults={this.state.results}/>
                    <MapSidebar
                        onFormEvent={this.handleFormEvent}
                        filters={this.state.filters}
                        onSearchSubmit={this.handleSearchSubmit}
                        searchResults={this.state.results}
                    />
                </div>
            )
        } else {
            return (<div>Loading...</div>)
        }
    }

}



export default Map