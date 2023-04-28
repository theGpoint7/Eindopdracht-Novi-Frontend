import React from 'react';
import './Navigation.css';
import { NavLink } from "react-router-dom";
import {ReactComponent as SaffierKlusjes} from "../../assets/SK-logo.svg";

function Navigation() {
    return (
        <nav>
            <div className="container nav-container">
                <div className="item-container nav-item">
                    <div className="logo-frame">
                        <SaffierKlusjes className="start-logo"/>
                    </div>
                    <div className="btn-container menu-style">
                            <ul className="menu-link">
                                <li>
                                    <NavLink className={({ isActive }) => isActive ? "active-menu-link" : "default-menu-link"} to="/">Start</NavLink></li>
                            </ul>
                            <ul className="menu-link">
                                <li>
                                    <NavLink className={({ isActive }) => isActive ? "active-menu-link" : "default-menu-link"} to="/klusjes-bekijken">Klusjes Bekijken</NavLink></li>
                            </ul>
                            <ul className="menu-link">
                                <li>
                                    <NavLink className={({ isActive }) => isActive ? "active-menu-link" : "default-menu-link"} to="/klusje-aanmelden">Klusje Aanmelden</NavLink></li>
                            </ul>
                            <ul id="aanmelden-link">
                                <li>
                                    <NavLink className={({ isActive }) => isActive ? "active-aanmelden-link" : "default-menu-link"} to="/aanmelden">Aanmelden</NavLink></li>
                            </ul>
                    </div>
                {/* <h4>De Tandenborstel</h4> */}

                </div>
            </div>
        </nav>
    );
}

export default Navigation;