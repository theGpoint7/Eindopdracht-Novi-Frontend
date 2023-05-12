import React from 'react';
import './Register.css';

import Form from "../../components/form/Form";


function Register () {



    const fields = [
        { name: 'first_name', label: 'Voornaam', type: 'text' },
        { name: 'last_name', label: 'Gebruikersnaam', type: 'text' },
        { name: 'email', label: 'Email', type: 'email' },
        { name: 'phone_number', label: 'Telefoon-nummer', type: 'tel' },
        { name: 'house_number', label: 'Huisnummer', type: 'text' },
        { name: 'password', label: 'Wachtwoord', type: 'password' },
        { name: 'password_repeat', label: 'Wachtwoord (nogmaals)', type: 'password' },
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

