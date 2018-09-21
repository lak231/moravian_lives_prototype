import React, { Component } from 'react';
import './style.css';
import Header from './Header'
import Home from "./Home";
import Map from './Map'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// UIKit
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
// loads the Icon plugin
UIkit.use(Icons);

class App extends Component {
    render() {
        return (
            <Router>
                <div className='uk-section-default'>
                    <Header/>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/map' component={Map}/>
                        <Route path='/archive' />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
