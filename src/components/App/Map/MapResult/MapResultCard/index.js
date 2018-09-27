import React, {Component} from 'react'

class MapResultCard extends Component  {
    render() {
        return (
            <div className="uk-card uk-card-default uk-width-1-1 uk-background-muted">
                <div className="uk-card-header uk-grid-small" data-uk-grid>
                        <div className="uk-width-1-3">
                            <img src="https://avatars2.githubusercontent.com/u/17067791?s=460&v=4" />
                        </div>
                        <div className="uk-width-2-3">
                            <h3 className="uk-card-title uk-margin-remove-bottom">Result</h3>
                            <p>something something</p>
                        </div>
                </div>
                <div className="uk-card-header uk-grid-collapse" data-uk-grid>
                    <div className="uk-width-1-3">
                        <img width="40" height="40" src="https://avatars2.githubusercontent.com/u/17067791?s=460&v=4" />
                    </div>
                    <div className="uk-width-2-3">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default MapResultCard