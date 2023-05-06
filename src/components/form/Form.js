import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import './Form.css';
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";
import {ReactComponent as EyeHide} from "../../assets/eye_hide_icon.svg";
import {ReactComponent as EyeView} from "../../assets/eye_view_icon.svg";
import {AuthContext} from "../../context/AuthContext";


// function for selecting the right validation function
function getValidationFunction(fieldType) {
    switch (fieldType) {
        case 'first_name':
            return validateFirstName;
        case 'last_name':
            return validateLastName;
        case 'email':
            return validateEmail;
        case 'phone_number': // Changed to an underscore
            return validatePhoneNumber;
        case 'house_number': // Changed to an underscore
            return validateHouseNumber;
        case 'jobDescription':
            return validateTextArea;
        case 'password':
            return validatePassword;
        default:
            return () => true; // default validation function that always returns true (no validation)
    }
}

// formvalidation functions:
function validateTextArea(inputValue) {
    const errorMessage = "Het bericht moet minimaal 5 en maximaal 50 karakters lang zijn en mag alleen letters, getallen en '-' of '_' bevatten.";
    const regex = /^[a-zA-Z0-9-_]+$/;
    if (inputValue.length < 5 || inputValue.length > 50 || !regex.test(inputValue)) {
        return errorMessage;
    } else {
        return true;
    }
}
function validateLastName(inputValue) {
    const errorMessage = "De achternaam moet beginnen met een hoofdletter, minimaal 2 en maximaal 20 karakters lang zijn en mag alleen letters en '-' bevatten.";
    const regex = /^([A-Z][a-z]+(( |-)[A-Z][a-z]+)*)$/;

    if (inputValue.length < 2 || inputValue.length > 20 || !regex.test(inputValue)) {
        return errorMessage;
    } else {
        return true;
    }
}
function validatePhoneNumber(inputValue) {
    const errorMessage = "Voer een telefoonnummer in dat begint met +31 of 0";
    const regexPattern = /^(?:\(0\d{2}\) \d{7}|\(0\d{3}\) \d{6}|0[1-9]\d{1,2}[-\s]?\d{6,7}|06[-\s]?\d{8}|\+31[-\s]?6[-\s]?\d{8}|031[-\s]?6[-\s]?\d{4}[-\s]?\d{4})$/;
    if (!regexPattern.test(inputValue)) {
        return errorMessage;
    } else {
        return true;
    }
}
function validateHouseNumber(inputValue) {
    const errorMessage = "Voer een geldig huisnummer in dat begint met 8 of 10, gevolgd door 3 cijfers of een letter.";
    const regexPattern = /^(10|8)(-| )?([A-Za-z]|[0-9]{3})$/;

    if (!regexPattern.test(inputValue)) {
        return errorMessage;
    } else {
        return true;
    }
}
function validateEmail(inputValue) {
    const errorMessage = "Voer een geldig Email adres in.";
    const regexPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;

    if (!regexPattern.test(inputValue)) {
        return errorMessage;
    } else {
        return true;
    }
}
function validateFirstName(inputValue) {
    const errorMessage = "Uw voornaam moet beginnen met een hoofdletter, minimaal 2 en maximaal 20 karakters lang zijn en mag alleen letters en '-' bevatten.";
    const regex = /^([A-Z][a-z]+(( |-)[A-Z][a-z]+)*)$/;

    if (inputValue.length < 2 || inputValue.length > 20 || !regex.test(inputValue)) {
        return errorMessage;
    } else {
        return true;
    }
}
function validatePassword(inputValue) {
    const errorMessage = "Het wachtwoord moet minimaal 8 tekens bevatten, waarvan één hoofdletter, één kleine letter, één nummer en één speciaal teken.";
    const regexPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!regexPattern.test(inputValue)) {
        return errorMessage;
    } else {
        return true;
    }
}

function Form ({title, fields, button, message, linkWord, linkTo, onSubmit}) {

    const { handleSubmit, formState: { errors }, register, setError } = useForm({mode: "onBlur"});

    const [passwordShown, togglePasswordShown] = useState(false);
    const [apiErrorMessage, setApiErrorMessage] = useState("");

    const {login} = useContext(AuthContext)



    async function handleFormSubmit(data) {
        console.log("handleformsubmit called");

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

                const userData = {
                    email: data.email,
                    password: data.password,
                };

                if (button === "Maak account aan") {
                    console.log('Attempting to register...');
                    console.log(data.email);
                    console.log(data['last_name']); // Corrected property access
                    console.log(data.password);
                    response = await axios.post(`${API_URL}/auth/signup`, {
                        "username": data['last_name'],
                        "email" : data.email,
                        "password" :data.password,
                        "role": ["user"]
                    });

                    console.log('Registration successful:', response);
                } else if (button === "Inloggen") {
                    console.log('Attempting to log in...');
                    console.log(data["last_name"]);
                    console.log(data.password);
                    response = await axios.post(`${API_URL}/auth/signin`, {
                        "username": data["last_name"],
                        "password": data.password,
                    });
                    login(response.data);
                    console.log('Login successful:', response);
                }
            } catch (error) {
                console.error("Error occurred:", error);
                if (error.response) {
                    console.log("Error message:", error.response.data.message);
                    setApiErrorMessage(error.response.data.message);
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
                                                field.type==="password" ?
                                                    <React.Fragment>
                                                        <label htmlFor={field.name}>{field.label}</label>
                                                        <div className="input-toggle-container">
                                                            <input type={passwordShown ? "text" : "password"}
                                                               id={field.name}
                                                               {...register((field.name),{
                                                                   required: {
                                                                       value: true,
                                                                       message: "Dit veld is verplicht",
                                                                   },
                                                                   validate: getValidationFunction(field.name),
                                                               })}
                                                               placeholder={`Typ hier je ${field.label.toLowerCase()}`}
                                                            />
                                                            <div onClick={() => togglePasswordShown(!passwordShown)} className="toggle-icon">
                                                                {passwordShown ? (
                                                                    <EyeHide className="hide-pass" />

                                                                ) : (
                                                                    <EyeView className="hide-pass" />
                                                                )}
                                                            </div>
                                                        </div>
                                                    </React.Fragment>
                                                :
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
                                            {errors[field.name]?.message ||
                                                (apiErrorMessage) 
                                            }
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
            </form>
        );
}
export default Form;