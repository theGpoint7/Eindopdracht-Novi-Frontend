    import React from 'react';
    import './Jobs.css';
    import JobViewer from "../../components/jobviewer/JobViewer";

    function Jobs () {

        const jobFields = [
            {
                jobtitle: 'Onkruid verwijderen',
                jobbutton: 'Klus annuleren',
                joburgency: '',
                helpstatus: 'Er is hulp aangeboden door Lisette.',
                helperstatistic: 'Lisette heeft 3/5 klusjes succesvol afgerond.',
                requeststatus: 'Wil je de hulp van Lisette accepteren?'
            },
            {
                jobtitle: 'Boodschappen doen',
                jobbutton: 'Hulp intrekken',
                joburgency: '',
                helpstatus: 'Je hebt aangeboden te helpen.',
                helperstatistic: '',
                requeststatus: 'De aanvrager heeft nog niet gereageerd.'
            },
            {
                jobtitle: 'Waterdruk CV-ketel instellen',
                jobbutton: 'Hulp intrekken',
                joburgency: '',
                helpstatus: 'Je hebt aangeboden te helpen.',
                helperstatistic: '',
                requeststatus: 'De aanvrager (Klaas) ziet je graag verschijnen op huisnummer 8-211.'
            }
        ];

        const openJobFields = [
            {
                jobtitle: 'Boodschappen doen',
                jobbutton: 'Hulp aanbieden',
                joburgency: 'Dit klusje is aangemeld als spoedklusje.',
                helpstatus: '',
                helperstatistic: '',
                requeststatus: ''
            },
            {
                jobtitle: 'Boodschappen doen',
                jobbutton: '',
                joburgency: '',
                helpstatus: 'Deze klus is geaccepteerd onder voorbehoud',
                helperstatistic: '',
                requeststatus: ''
            },
            {
                jobtitle: 'Bed ophalen van marktplaats',
                jobbutton: 'Hulp aanbieden',
                joburgency: '',
                helpstatus: '',
                helperstatistic: '',
                requeststatus: ''
            },
            {
                jobtitle: 'Verfen muur woonkamer',
                jobbutton: 'Hulp aanbieden',
                joburgency: 'Dit klusje is aangemeld als spoedklusje.',
                helpstatus: '',
                helperstatistic: '',
                requeststatus: ''
            },
            {
                jobtitle: 'Lamp vervangen',
                jobbutton: 'Hulp aanbieden',
                joburgency: 'Dit klusje is aangemeld als spoedklusje.',
                helpstatus: '',
                helperstatistic: '',
                requeststatus: ''
            },
            {
                jobtitle: 'Boodschappen doen',
                jobbutton: 'Hulp aanbieden',
                joburgency: 'Dit klusje is aangemeld als spoedklusje.',
                helpstatus: '',
                helperstatistic: '',
                requeststatus: ''
            }
        ];

        return (
            <main>
                <JobViewer
                    title="Mijn klusjes"
                    jobFields={jobFields}
                />
                <JobViewer
                    title="Openstaande klusjes"
                    jobFields={openJobFields}
                />

            </main>
        );
    }

    export default Jobs;
