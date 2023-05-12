import React, {useContext} from 'react';
import './UserMenu.css';
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import { useForm } from "react-hook-form";



function UserMenu({
                      title,
                      Voornaam,
                      Achternaam,
                      Email,
                      Telefoonnummer,
                      Huisnummer,
                      Wachtwoord,
                      button1,
                      button2,
                      button3,
                      offeredJobHelpStatistic,
                      requestedJobHelpStatistic,
                      logOutButton,
                      section,
                      buttonClicked,
                      setButtonClicked,
                      PasswordInputComponent,
                  }) {

    const { isAuthenticated, logout } = useContext(AuthContext);

    function handleLogoutSubmit() {
        console.log({ isAuthenticated });
        console.log('handleLogoutSubmit called');
        logout();
        console.log({ isAuthenticated });
    }

    const token = localStorage.getItem('token');

    const { handleSubmit, formState: { errors }, register, setError } = useForm({mode: "onBlur"});

    async function handlePasswordUpdate(data) {
        console.log("handlePasswordUpdate called")
        console.log(data.passwordchange)
        try {
            // Perform the PUT request to update the password
            const response = await axios.put(`https://frontend-educational-backend.herokuapp.com/api/user`, {
                password: data.passwordchange,
                repeatedPassword: data.passwordchange,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });

            // If the request is successful, call the `onPasswordUpdateSuccess` function
            if (response.status === 200) {
                setButtonClicked(false);
                console.log("succesvol wachtwoord gewijzigd!")
            }
        } catch (error) {
            console.log("catch error console log")
            console.log("Error message:", error.response.data.message);
        }
    }

    const passwordField = {
        name: "passwordchange",
        label: "Nieuw wachtwoord",
    };



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
                    {Wachtwoord && (
                        <div className="usermenu-table-description">
                            <p>Wachtwoord</p>
                            {buttonClicked ? (
                                <form
                                    id="password-update-form"
                                >
                                    <PasswordInputComponent
                                        field={passwordField}
                                        register={register}
                                    />
                                </form>
                            ) : (
                                <p>{Wachtwoord}</p>
                            )}
                        </div>
                    )}
                    {button2 && (
                        <div className="usermenu-table-description">
                            <p></p>

                            <button
                                className="standard-button menu-style"
                                type="button"
                                onClick={() => {
                                    if (buttonClicked) {
                                        handleSubmit(handlePasswordUpdate)();
                                    } else {
                                        setButtonClicked(true);
                                    }
                                }}
                            >
                                {buttonClicked ? button3 : button2}
                            </button>

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
                    <button className="standard-button menu-style" type="submit" onClick={handleLogoutSubmit}>
                        {logOutButton}
                    </button>
                )}
            </div>
        </div>
    );
}

export default UserMenu;
