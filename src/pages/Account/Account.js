import React from 'react';
import './Account.css';

import UserMenu from "../../components/usermenu/UserMenu";

function Account () {

    return (
        <main>
            <UserMenu
                title="Account Instellingen"
                Voornaam="Pietje"
                Achternaam="Puk"
                Email="pietje.puk@gmail.com"
                Telefoonnummer="06-12345678"
                Huisnummer="8-111"
                Wachtwoord="**********"
                button1="Gegevens wijzigen"
                button2="Wachtwoord wijzigen"
                section="1"
            />
            <UserMenu
                title="Statistieken"
                offeredJobHelpStatistic="0/0"
                requestedJobHelpStatistic="0/0"
                section="2"
            />
            <UserMenu
                logOutButton="Afmelden"
                section="1"
            />
        </main>
    );
}

export default Account;

