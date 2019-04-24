import React, {Component} from 'react'
import MapSearchForm from "../Map/MapSidebar/SearchForm";
import * as ContactsAPI from "../../../utils/ContactsAPI";
import MapSidebar from "../Map/MapSidebar";
import ResultCard from "../Map/MapSidebar/ResultCard";

export default class Archive extends Component {
    constructor(props) {
        super(props)
        this.originalData = null
        this.timelineData = {
            birthDay: [],
            deathDay: []
        }
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
        this.generateTimelineData = this.generateTimelineData.bind(this)
    }

    componentDidMount() {
        const contacts = ContactsAPI.getAll()
        this.originalData = contacts
        this.setState({results: contacts})
        this.generateTimelineData(contacts)
        this.forceUpdate()
    }

    generateTimelineData (results) {
        let tempBirth = {}
        let tempDeath = {}
        results.forEach(
            person => {
                if (!(new Date(person['birthDay']).getFullYear() in tempBirth)) {
                    tempBirth[(new Date(person['birthDay']).getFullYear())] = 1
                } else {
                    tempBirth[(new Date(person['birthDay']).getFullYear())] += 1
                }
                if (!(new Date(person['deathDay']).getFullYear() in tempDeath)) {
                    tempDeath[(new Date(person['deathDay']).getFullYear())] = 1
                } else {
                    tempDeath[(new Date(person['deathDay']).getFullYear())] += 1
                }
            }
        )
        this.timelineData = {
            birthDay: [{x: 0, y: 0}],
            deathDay: [{x: 0, y: 0}]
        }
        Object.entries(tempBirth).forEach(
            ([key, value]) => this.timelineData.birthDay.push({x: new Date(key).getTime(), y: value})
        );
        Object.entries(tempDeath).forEach(
            ([key, value]) => this.timelineData.deathDay.push({x: new Date(key).getTime(), y: value})
        );
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
            default:
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
                        default:
                            break
                    }
                }
                return passed
            }
        )
        this.setState({filters, results})
    }
    render() {
        let timelineData
        if (this.state.filters.timeline.type === 'day-death') {
            timelineData = this.timelineData.deathDay
        } else {
            timelineData = this.timelineData.birthDay
        }
        if (this.state.results) {
            return (
                <div className='uk-container uk-container-expand uk-margin-xlarge-right uk-margin-xlarge-left' data-uk-grid>
                    <div className='uk-width-3-4'>
                        {this.state.results && this.state.results.map(d => <ResultCard key={d.id} data={d}/>)}
                    </div>

                    <div className='uk-width-1-4'>
                        <MapSearchForm onFormEvent={this.handleFormEvent}
                                       filters={this.state.filters}
                                       timelineData={timelineData}
                                       timelineWidth={400}
                        />
                    </div>
                </div>
            )
        }
        else {
            return (<div>Loading...</div>)
        }

    }
}