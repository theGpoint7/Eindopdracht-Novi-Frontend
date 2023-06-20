import React, { useState } from 'react';
import './PasswordInput.css';
import { ReactComponent as EyeHide } from "../../assets/eye_hide_icon.svg";
import { ReactComponent as EyeView } from "../../assets/eye_view_icon.svg";


function validatePassword(inputValue) {
    const errorMessage = "Gebruik minimaal 1 hoofdletter, kleine letter, getal en speciaal teken. Minimaal 8 tekens";
    const regexPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;


    if (!regexPattern.test(inputValue)) {
        return errorMessage;
    } else {
        return true;
    }
}

function PasswordInput({ field, register, errors }) {
    const [passwordShown, togglePasswordShown] = useState(false);

    if (!field) {
        return null;
    }

    return (
        <div className="field-container">
            {field.label !== "Nieuwe wachtwoord" && field.label !== "Herhaal je nieuwe wachtwoord" && (
                <label htmlFor={field.name}>{field.label}</label>
            )}
            <div className="input-toggle-container">
                <input
                    type={passwordShown ? "text" : "password"}
                    id={field.name}
                    {...register((field.name), {
                        required: {
                            value: true,
                            message: "Dit veld is verplicht",
                        },
                        validate: validatePassword,
                    })}
                    placeholder={field.label === "Herhaal je nieuwe wachtwoord" ? "Herhaal je nieuwe wachtwoord" : `Typ hier je ${field.label.toLowerCase()}`}
                />
                <div onClick={() => togglePasswordShown(!passwordShown)} className="toggle-icon">
                    {passwordShown ? (
                        <EyeHide className="hide-pass" />
                    ) : (
                        <EyeView className="hide-pass" />
                    )}
                </div>
            </div>
            {errors && errors[field.name] && <p className="change-password-error errorMSG">{errors[field.name].message}</p>}
        </div>
    );
}

export default PasswordInput;
