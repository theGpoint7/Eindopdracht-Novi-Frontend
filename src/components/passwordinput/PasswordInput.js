import React, { useState } from 'react';
import './PasswordInput.css';
import { ReactComponent as EyeHide } from "../../assets/eye_hide_icon.svg";
import { ReactComponent as EyeView } from "../../assets/eye_view_icon.svg";


function validatePassword(inputValue) {
    const errorMessage = "Het wachtwoord moet minimaal 8 tekens bevatten, waarvan één hoofdletter, één kleine letter, één nummer en één speciaal teken.";
    const regexPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;


    if (!regexPattern.test(inputValue)) {
        return errorMessage;
    } else {
        return true;
    }
}

function PasswordInput({ field, register }) {
    const [passwordShown, togglePasswordShown] = useState(false);

    return (
        <React.Fragment>
            {field.label !== "Nieuw wachtwoord" && (
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
    );
}

export default PasswordInput;
