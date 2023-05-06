import React, { useContext } from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import { ReactComponent as SaffierKlusjes } from '../../assets/SK-logo.svg';
import { AuthContext } from '../../context/AuthContext';

function Navigation() {
    const { isAuthenticated } = useContext(AuthContext);

    return (
        <nav>
            <div className="container nav-container">
                <div className="item-container nav-item">
                    <div className="logo-frame">
                        <SaffierKlusjes className="start-logo" />
                    </div>
                    <div className="btn-container menu-style">
                        <ul className="menu-link">
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? 'active-menu-link' : 'default-menu-link'
                                    }
                                    to="/"
                                >
                                    Start
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="menu-link">
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? 'active-menu-link' : 'default-menu-link'
                                    }
                                    to="/klusjes-bekijken"
                                >
                                    Klusjes Bekijken
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="menu-link">
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? 'active-menu-link' : 'default-menu-link'
                                    }
                                    to="/klusje-aanmelden"
                                >
                                    Klusje Aanmelden
                                </NavLink>
                            </li>
                        </ul>
                        {isAuthenticated ? (
                            <ul id="account-link">
                                <li>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'active-aanmelden-link'
                                                : 'default-menu-link'
                                        }
                                        to="/account"
                                    >
                                        {' '}
                                        Account <br /> Instellingen
                                    </NavLink>
                                </li>
                            </ul>
                        ) : (
                            <ul id="account-link">
                                <li>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'active-aanmelden-link'
                                                : 'default-menu-link'
                                        }
                                        to="/aanmelden"
                                    >
                                        Aanmelden
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
