import React, { useContext, useState } from 'react';
import './Account.css';
import { AuthContext } from '../../context/AuthContext';

import UserMenu from '../../components/usermenu/UserMenu';
import PasswordInput from "../../components/passwordinput/PasswordInput";

function Account() {
    const { user } = useContext(AuthContext);

    return (
        <main>
            <UserMenu
                title="Account Instellingen"
                Voornaam="niet opgeslagen in database"
                Achternaam={user ? user.username : ''}
                Email={user ? user.email : ''}
                Telefoonnummer="niet opgeslagen in database"
                Huisnummer="niet opgeslagen in database"
                Wachtwoord='**********'
                button1="Gegevens wijzigen"
                button2="Wachtwoord wijzigen"
                button3="Wachtwoord opslaan"
                PasswordInputComponent={PasswordInput}
                section="1"
            />
            <UserMenu
                title="Statistieken"
                offeredJobHelpStatistic="0/0"
                requestedJobHelpStatistic="0/0"
                section="2"
            />
            <UserMenu logOutButton="Afmelden" section="1" />

        </main>
    );
}

export default Account;
