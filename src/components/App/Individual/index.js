import React, {Component} from 'react'
import Network from "./Network"

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    NavLink
} from 'react-router-dom'
import 'leaflet/dist/leaflet.css'
import Memoir from "./Memoir";
import MapGeo from "../Map/MapGeo";



export default class Individual extends Component {
    render() {
        console.log(this.props)
        return (
            <Router>
            <div className='uk-section uk-section-small'>
                <div className='uk-container'>
                    <div className='uk-text-center'>
                        <h2> Igor Stravinsky </h2>
                        <img src='https://s26643.pcdn.co/wp-content/uploads/2016/08/1082051250.jpg' alt='portrait' />
                        <p> something something </p>
                    </div>

                        <ul className="uk-subnav uk-subnav-pill">
                            <li><NavLink activeClassName='uk-active' to={`${this.props.match.url}/memoir`}>Memoir</NavLink></li>
                            <li><NavLink activeClassName='uk-active' to={`${this.props.match.url}/movement`}>Movement</NavLink></li>
                            <li><NavLink activeClassName='uk-active' to={`${this.props.match.url}/connection`}>Connection</NavLink></li>
                        </ul>

                        <Switch>
                            <Route exact path={`${this.props.match.url}/`} component={Memoir}/>
                            <Route path={`${this.props.match.url}/memoir`} component={Memoir}/>
                            <Route path={`${this.props.match.url}/movement`} component={MapGeo}/>
                            <Route path={`${this.props.match.url}/connection`} component={Network}/>
                        </Switch>

                </div>
            </div>
            </Router>
        )
    }
}