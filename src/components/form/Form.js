import React, {useState, useContext} from 'react';
import axios from 'axios';
import './Form.css';
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import { getValidationFunction } from "../../helpers/Validation";
import PasswordInput from "../passwordinput/PasswordInput";
import Modal from "../modal/Modal";

function Form ({title, fields, button, message, linkWord, linkTo }) {

    const { login } = useContext(AuthContext);

    const { handleSubmit, formState: { errors }, register, setError } = useForm({mode: "onBlur"});

    const [displayModal, setDisplayModal] = useState(false);
    const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [modalTitle, setModalTitle] = useState("");
    const [modalMessage, setModalMessage] = useState("");
    const [navigateTo, setNavigateTo] = useState("")

    async function handleFormSubmit(data) {
        setUsernameErrorMessage("");
        setEmailErrorMessage("");

        if (button === "Maak account aan" && data.password !== data['password_repeat']) {
            console.log("wachtwoorden ongelijk");
            setError("password_repeat", {
                type: "manual",
                message: "Wachtwoorden komen niet overeen.",
            });
        } else {
            try {
                let response;
                const API_URL = 'https://frontend-educational-backend.herokuapp.com/api';

                if (button === "Maak account aan") {
                    console.log('Bezig met registreren...');
                    response = await axios.post(`${API_URL}/auth/signup`, {
                        "username": data['last_name'],
                        "email" : data.email,
                        "password" :data.password,
                        "role": ["user"]
                    });
                    setModalTitle("Geregistreerd!");
                    setModalMessage("Uw account is succesvol geregistreerd, u word nu omgeleid naar de aanmeld pagina. ");
                    setDisplayModal(true);
                    setNavigateTo("/aanmelden");
                    console.log('Registration successful:', response);
                } else if (button === "Inloggen") {
                    console.log('Bezig met aanmelden...');
                    response = await axios.post(`${API_URL}/auth/signin`, {
                        "username": data["last_name"],
                        "password": data.password,
                    });
                    login(response.data);
                    setModalTitle("Aangemeld!");
                    setModalMessage("U bent succesvol aangemeld, u word nu doorgestuurd naar de pagina om een klusje aan te melden.");
                    setDisplayModal(true);
                    setNavigateTo("/klusje-aanmelden");
                    console.log('Login successful:', response);
                }
            } catch (error) {
                console.error("Error occurred:", error);
                if (error.response) {
                    console.log("Error message:", error.response.data.message);
                    if (error.response.data.message === "This username is already in use") {
                        setUsernameErrorMessage("Deze gebruikersnaam is al in gebruik.");
                    } else if (error.response.data.message === "This email is already in use") {
                        setEmailErrorMessage("Dit email adres is al geregistreerd.");
                    }

                    if (error.response.status === 401) {
                        setModalTitle("Onbekende inloggegevens!");
                        setModalMessage("De aanmeld gegevens zijn niet bekend, heeft u de juiste gegevens ingevuld?.");
                        setDisplayModal(true);
                    }
                }
            }

        }
    }

    return (
        <form className="Form component-style" onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="container form-component-container">
                <legend className="h1-style form-title">{title}</legend>
                <fieldset className="form-fieldset">

                    {fields.map((field, index) => (
                        <React.Fragment key={index}>
                            <div className="body-style form-div">
                                <div className="form-field">


                                    {field.type === 'textarea' ? (
                                            <React.Fragment>
                                                <label htmlFor={field.name}>{field.label}</label>
                                                <textarea
                                                    {...register(field.name, {
                                                        required: {
                                                            value: true,
                                                            message: "Dit veld is verplicht",
                                                        },
                                                        validate: getValidationFunction(field.name),
                                                    })}
                                                    id={field.name}
                                                    placeholder={`Typ hier je ${field.label.toLowerCase()}`}
                                                />
                                            </React.Fragment>
                                        ) :
                                        field.type ==="checkbox" ?
                                            <React.Fragment>
                                            </React.Fragment>
                                            :
                                            field.type === "password" ? (
                                                    <PasswordInput
                                                        field={field}
                                                        register={register}

                                                    />
                                                ) :
                                                <React.Fragment>
                                                    <label htmlFor={field.name}>{field.label}</label>
                                                    <input type= {field.type}
                                                           id={field.name}
                                                           {...register((field.name),{
                                                               required: {
                                                                   value: true,
                                                                   message: "Dit veld is verplicht",
                                                               },
                                                               validate: getValidationFunction(field.name),
                                                           })}
                                                           placeholder={`Typ hier je ${field.label.toLowerCase()}`} />

                                                </React.Fragment>
                                    }
                                </div>
                                {field.type !== 'checkbox' && (
                                    <div id={`${field.name}Feedback`} className="errorMSG">
                                        {errors[field.name]?.message || (
                                            field.name === "last_name" ? usernameErrorMessage
                                                : field.name === "email" ? emailErrorMessage
                                                    : "")}
                                    </div>

                                )}
                            </div>
                            {field.type === 'checkbox' &&
                                <div className="body-style form-div-checkbox">
                                    <div className="form-field">
                                        <label htmlFor={field.name}>{field.label}</label>
                                        <input
                                            type="checkbox"
                                            {...register(field.name)}
                                            id={field.name} />
                                    </div>
                                </div>
                            }
                        </React.Fragment>
                    ))}
                    <button className="standard-button menu-style" type="submit">{button}</button>

                </fieldset>
                <p className={`body-style ${linkWord ? `standard-link` : ``}`}>
                    {message.includes(linkWord) ? (
                        <>
                            {message.split(linkWord)[0]}
                            <Link to={linkTo}>{linkWord}</Link>
                            {message.split(linkWord)[1]}
                        </>
                    ) : (
                        message
                    )}
                </p>
            </div>
            <Modal
                title={modalTitle}
                message={modalMessage}
                setDisplayModal={setDisplayModal}
                displayModal={displayModal}
                navigateTo={navigateTo}
            />
        </form>

    );
}
export default Form;