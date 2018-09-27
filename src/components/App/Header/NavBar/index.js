import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar (props) {
    return (

            <nav className="uk-navbar" data-uk-navbar>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li>
                            <NavLink exact activeClassName='uk-active' to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='uk-active' to="/map">Map</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='uk-active' to="/archive">Archive</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default NavBar;