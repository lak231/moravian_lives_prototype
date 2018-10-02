import React, {Component} from 'react'

function MapResultCard (props)  {
    return (
        <div className="uk-card uk-card-default uk-width-1-1 uk-background-muted">
            <div className="uk-card-header">
                <div className="uk-grid-small uk-flex-middle" data-uk-grid>
                    <div className="uk-width-1-3">
                        <div className="uk-position-relative uk-visible-toggle uk-dark" data-uk-slideshow>

                            <ul className="uk-slideshow-items">
                                <li>
                                    <img src="https://getuikit.com/docs/images/photo.jpg" alt="" data-uk-cover/>
                                </li>
                                <li>
                                    <img src="https://getuikit.com/docs/images/dark.jpg" alt="" data-uk-cover/>
                                </li>
                            </ul>
                            <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"> </ul>
                        </div>
                    </div>

                    <div className="uk-width-expand">
                        <h3 className="uk-card-title uk-margin-remove-bottom">{`${props.data.last}, ${props.data.first}`}</h3>
                        <p className="uk-text-meta uk-margin-remove-top">{`Birth place: ${props.data.birthPlace}`} <br/> {`Death place: ${props.data.deathPlace}`}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MapResultCard