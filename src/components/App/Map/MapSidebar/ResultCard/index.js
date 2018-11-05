import React from 'react'

function MapResultCard (props)  {
    let className
    (props.selectedID === props.data.id) ? className = 'uk-light uk-background-secondary' : className = 'uk-background-muted'
    return (
        <div id={props.data.id} className={`uk-card uk-card-default uk-width-1-1 ${className}`}>
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
                        <h3 className="uk-margin-remove-bottom">{`${props.data.last}, ${props.data.first}`}</h3>
                        <p className="uk-text-meta uk-margin-remove-top">{`Birth place: ${props.data.birthPlace}`} <br/> {`Death place: ${props.data.deathPlace}`}</p>
                        <ul data-uk-accordion>
                            <li>
                                <a className="uk-accordion-title uk-text-small">Archives</a>
                                <div className="uk-accordion-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MapResultCard