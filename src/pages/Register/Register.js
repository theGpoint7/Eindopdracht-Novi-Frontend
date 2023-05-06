import React from 'react';
import './Register.css';
import { useForm } from "react-hook-form";

import Form from "../../components/form/Form";

function Register () {


    const fields = [
        { name: 'first_name', label: 'Voornaam', type: 'text' },
        { name: 'last_name', label: 'Achternaam', type: 'text' },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'phone_number', label: 'Telefoon-nummer', type: 'tel' }, // Changed to an underscore
        { name: 'house_number', label: 'Huisnummer', type: 'text' }, // Changed to an underscore
        { name: 'password', label: 'Wachtwoord', type: 'password' },
        { name: 'password_repeat', label: 'Wachtwoord (nogmaals)', type: 'password' }, // Changed to an underscore
    ];




    return (
        <main>
            <Form
                title="Registreren"
                fields={fields}
                button="Maak account aan"
                message=""
                linkWord=""
                linkTo=""
            />
        </main>
    );
}

export default Register;

