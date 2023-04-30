import React from 'react';
import './UserMenu.css';
import { useNavigate } from "react-router-dom";

function UserMenu ({ title, Voornaam, Achternaam, Email, Telefoonnummer, Huisnummer, Wachtwoord, button1, button2, offeredJobHelpStatistic, requestedJobHelpStatistic, logOutButton, section}) {
    const navigate = useNavigate();

    return (
        <div className="component-style usermenu-div ">
            <div className="container usermenu-container">
                { title && (
                    <h2 className="h1-style">{title}</h2>
                    )}
                <div className={`usermenu-table ${section === "1" ? "section-1" : "section-2"} body-style`}>
                    { Voornaam && (
                        <div className="usermenu-table-description">
                            <p>Voornaam</p>
                            <p>{Voornaam}</p>
                        </div>
                    )}
                    { Achternaam && (
                        <div className="usermenu-table-description">
                            <p>Achternaam</p>
                            <p>{Achternaam}</p>
                        </div>
                    )}
                    { Email && (
                        <div className="usermenu-table-description">
                            <p>Email</p>
                            <p>{Email}</p>
                        </div>
                    )}
                    { Telefoonnummer && (
                        <div className="usermenu-table-description">
                            <p>Telefoon-nummer</p>
                            <p>{Telefoonnummer}</p>
                        </div>
                    )}
                    { Huisnummer && (
                        <div className="usermenu-table-description">
                            <p>Huisnummer</p>
                            <p>{Huisnummer}</p>
                        </div>
                    )}
                    { button1 && (
                        <div className="usermenu-table-description">
                            <p></p>
                            <button className="standard-button menu-style">{button1}</button>
                        </div>
                    )}
                    { Wachtwoord && (
                        <div className="usermenu-table-description">
                            <p>Wachtwoord</p>
                            <p>{Wachtwoord}</p>
                        </div>
                    )}
                    { button2 && (
                        <div className="usermenu-table-description">

                                <p></p>
                                <button className="standard-button menu-style">{button2}</button>

                        </div>
                    )}
                    { offeredJobHelpStatistic && (
                        <div className="usermenu-table-description">
                            <p>Succesvol afgeronde klusjes waar ik mijn hulp aanbood</p>
                            <p>{offeredJobHelpStatistic}</p>
                        </div>
                    )}
                    { requestedJobHelpStatistic && (
                        <div className="usermenu-table-description">
                            <p>Succesvol afgeronde klusjes waarbij ik om hulp vroeg</p>
                            <p>{requestedJobHelpStatistic}</p>
                        </div>
                    )}
                </div>
                {logOutButton && (
                <button className="standard-button menu-style" type="submit">{logOutButton}</button>
                )}
            </div>
        </div>
    );
}

export default UserMenu;
