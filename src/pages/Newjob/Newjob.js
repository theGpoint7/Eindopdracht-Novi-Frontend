import React from 'react';
import './Newjob.css';

import Form from "../../components/form/Form";


function Newjob () {

    const fields = [
        { name: 'jobDescription', label: 'Omschrijving (maximaal 15 woorden)', type: 'textarea' },
        { name: 'urgentJob', label: 'Het gaat om een spoedklusje', type: 'checkbox' },
    ];

    return (
        <main>
            <Form
                name="textArea"
                title="Klusje Aanmelden"
                fields={fields}
                button="Verzoek Versturen"
                message=""
                linkWord=""
                linkTo=""
            />

        </main>
    );
}

export default Newjob;
