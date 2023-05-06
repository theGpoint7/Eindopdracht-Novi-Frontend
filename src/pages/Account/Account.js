import React, {useContext} from 'react';
import './Account.css';
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import UserMenu from "../../components/usermenu/UserMenu";

/*
const Account = () => {
 */



function Account () {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate();




    return (
        <main>
            <UserMenu
                title="Account Instellingen"
                Voornaam="Pietje"
                Achternaam={user.username}
                Email={user.email}
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

