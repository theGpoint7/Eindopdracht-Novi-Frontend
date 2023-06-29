import React from 'react';
import Form from "../../components/form/Form";

function Login () {

//ik hoop dat je een hele unieke achternaam hebt, want omdat de achternaam als username word gebruikt, moet elke gebruiker een unieke achternaam hebben.

    const fields = [
        {

            name: 'last_name',
            label: 'Gebruikersnaam',
            type: 'text',
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