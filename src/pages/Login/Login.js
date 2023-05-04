import React, { useEffect, useState } from 'react';
import './Login.css';

import Form from "../../components/form/Form";

function Login () {

    const fields = [
        {
            name: 'email',
            label: 'Email',
            type: 'email',

        },
        {
            name: 'password',
            label: 'Wachtwoord',
            type: 'password',

        }
    ];

    return (
        <main>



            <Form
                title="Aanmelden"
                fields={fields}
                button="Inloggen"
                message="Heb je geen account? Klik dan hier om je te registreren"
                linkWord="hier"
                linkTo="/registreren"

            />
        </main>
    );
}

export default Login;