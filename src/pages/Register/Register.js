import React from 'react';
import './Register.css';

import Form from "../../components/form/Form";

function Register () {
    const fields = [
        { name: 'first-name', label: 'Voornaam', type: 'text' },
        { name: 'last-name', label: 'Achternaam', type: 'text' },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'phone-number', label: 'Telefoon-nummer', type: 'tel' },
        { name: 'housenumber', label: 'Huisnummer', type: 'text' },
        { name: 'password', label: 'Wachtwoord', type: 'password' },
        { name: 'password-repeat', label: 'Wachtwoord (nogmaals)', type: 'password' },
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

