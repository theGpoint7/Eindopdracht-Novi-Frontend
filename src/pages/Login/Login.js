import React, { useContext } from 'react';
import './Login.css';
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import {useForm} from "react-hook-form";
import Form from "../../components/form/Form";

function Login () {


    const fields = [
        {

            name: 'last_name',
            label: 'Achternaam',
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