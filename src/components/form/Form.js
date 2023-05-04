import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Form.css';
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";
import {ReactComponent as EyeHide} from "../../assets/eye_hide_icon.svg";
import {ReactComponent as EyeView} from "../../assets/eye_view_icon.svg";

// function for selecting the right validation function
function getValidationFunction(fieldType) {
    switch (fieldType) {
        case 'first-name':
            return validateFirstName;
        case 'last-name':
            return validateLastName;
        case 'email':
            return validateEmail;
        case 'phone-number':
            return validatePhoneNumber;
        case 'housenumber':
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

function handleFormSubmit(data) {
    if (data.password !== data['password-repeat']) {
        setError("password-repeat", {
            type: "manual",
            message: "Wachtwoorden komen niet overeen.",
        });
    } else {
        console.log(data);
        console.log(errors);
    }
}

function Form ({title, fields, button, message, linkWord, linkTo, onSubmit}) {

    const { handleSubmit, formState: { errors }, register, setError } = useForm({mode: "onBlur"});

    const [passwordShown, togglePasswordShown] = useState(false);


    useEffect(() => {
        fetchData();
    }, []);



return (

            <form className="Form component-style" onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="container form-component-container">
                    <legend className="h1-style form-title">{title}</legend>
                    <fieldset className="form-fieldset">

                        {fields.map((field, index) => (
                            <React.Fragment key={index}>
                                <div className="body-style form-div">
                                    <p className="form-field">


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
                                    </p>
                                    {field.type !== 'checkbox' && <div id={`${field.name}Feedback`} className="errorMSG">{errors[field.name]?.message}</div>}
                                </div>
                                {field.type === 'checkbox' &&
                                    <div className="body-style form-div-checkbox">
                                        <p className="form-field">
                                            <label htmlFor={field.name}>{field.label}</label>
                                            <input
                                                type="checkbox"
                                                {...register(field.name)}
                                                id={field.name} />
                                        </p>
                                    </div>
                                }
                            </React.Fragment>
                        ))}
                        <button className="standard-button menu-style" type="submit" onClick={onSubmit}>{button}</button>

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