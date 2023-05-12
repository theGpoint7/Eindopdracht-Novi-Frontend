import React, { useContext } from 'react';
import './Navigation.css';
import { NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as SaffierKlusjes } from '../../assets/SK-logo.svg';
import { AuthContext } from '../../context/AuthContext';

function Navigation() {
    const { isAuthenticated, logout } = useContext(AuthContext);
    const location = useLocation();
    const isAccountSettings = location.pathname === '/account';

    function handleLogout(){
       console.log("handleLogoutFunction called")
            logout();
    };


    return (
        <nav>
            <div className="container nav-container">
                <div className="item-container nav-item">
                    <div className="logo-frame">
                        <NavLink to="/">
                        <SaffierKlusjes className="start-logo" />
                        </NavLink>
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
                                        to={isAccountSettings ? '/' : '/account'}
                                        onClick={isAccountSettings ? handleLogout : undefined}

                                    >
                                        {isAccountSettings ? (
                                            'Afmelden'
                                        ) : (
                                            <>
                                                {'Account'}
                                                <br />
                                                {'Instellingen'}
                                            </>
                                        )}
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

