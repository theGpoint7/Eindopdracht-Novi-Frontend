import React, {useContext, useState} from 'react';
import './UserMenu.css';
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import { useForm } from "react-hook-form";
import Modal from "../modal/Modal";



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
                      PasswordInputComponent,
                  }) {

    const { isAuthenticated, logout } = useContext(AuthContext);

    const [displayModal, setDisplayModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalMessage, setModalMessage] = useState("");
    const [navigateTo, setNavigateTo] = useState("")
    const [showPasswordFields, setShowPasswordFields] = useState(false);



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
        try {
            // controleer of de wachtwoorden overeen komen
            if (data.passwordchange !== data.passwordchangeRepeat) {
                setError("passwordchangeRepeat", { message: "Watchtwoorden komen niet overeen" });
                console.log(errors);

                return;
            }

            // put request voor het updaten van het wachtwoord
            const response = await axios.put(`https://frontend-educational-backend.herokuapp.com/api/user`, {
                password: data.passwordchange,
                repeatedPassword: data.passwordchangeRepeat,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });

            console.log(response);

            if (response.status === 200) {
                console.log("succesvol wachtwoord gewijzigd!")
                setModalTitle("Wachtwoord gewijzigd!");
                setModalMessage("Uw wachtwoord is succesvol gewijzigd, u word nu omgeleid naar de startpagina. ");
                setDisplayModal(true);
                setNavigateTo("/");


            }
        } catch (error) {
            console.log("catch error console log")
            console.log("Error message:", error.response.data.message);
        }
    }

    const passwordField = {
        name: "passwordchange",
        label: "Nieuwe wachtwoord",
    };

    const passwordRepeatField = {
        name: "passwordchangeRepeat",
        label: "Herhaal je nieuwe wachtwoord",
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
                        <form className="usermenu-table-description" onSubmit={handleSubmit(handlePasswordUpdate)}>
                            {showPasswordFields ? (
                                <div>
                                    <p>Wachtwoord</p>
                                    <div className="password-fields-wrapper full-width">
                                        <div className="password-input-wrapper">
                                            <PasswordInputComponent field={passwordField} register={register} errors={errors} />
                                        </div>
                                        <div className="password-input-wrapper">
                                            <PasswordInputComponent field={passwordRepeatField} register={register} errors={errors} />
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="usermenu-table-description">
                                    <p>Wachtwoord</p>
                                    <p>{Wachtwoord}</p>
                                </div>
                            )}


                            {button2 && !showPasswordFields && (
                                <div className="usermenu-table-description">
                                    <p></p>
                                    <button
                                        className="standard-button menu-style"
                                        type="button"
                                        onClick={() => setShowPasswordFields(true)}
                                    >
                                        {button2}
                                    </button>
                                </div>
                            )}

                            {showPasswordFields && (
                                <div className="usermenu-table-description">
                                    <p></p>
                                <button
                                    className="standard-button menu-style"
                                    type="submit"
                                >
                                    {button3}
                                </button>
                                </div>
                            )}

                        </form>
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
            <Modal
                title={modalTitle}
                message={modalMessage}
                setDisplayModal={setDisplayModal}
                displayModal={displayModal}
                navigateTo={navigateTo}
            />
        </div>
    );
}

export default UserMenu;
