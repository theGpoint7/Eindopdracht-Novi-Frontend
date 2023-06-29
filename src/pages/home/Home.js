import React from 'react';
import "./../../assets/constants.css";

import { ReactComponent as SaffierKlusjes} from "../../assets/Saffier Klusjes.svg";
import { ReactComponent as Idea} from "../../assets/Idea_icon.svg";
import { ReactComponent as HandShake} from "../../assets/Handshake_icon.svg";


import Information from "../../components/information/Information";
import RandomAdvice from "../../components/randomadvice/RandomAdvice";



function Home() {

    return (
        <main>

            <Information
                icon={<SaffierKlusjes />}
                title="Welkom"
                description="Op de Saffier kunnen we elkaars hulp best wel eens gebruiken! Wil je graag hulp bij een klusje of wil je je hulp aanbieden? Meld je dan vrijblijvend aan!"
                position="odd"
            />

            <Information
                 icon={<Idea />}
                 title="Wilt u graag wat hulp?"
             description={
                    <React.Fragment>
                        De een ligt misschien ziek op bed en wil graag dat er boodschappen worden gedaan. Bij een ander
                        moet er een lamp worden vervangen. Iedereen die een beetje hulp kan gebruiken kan een klusje
                        aanmelden. Schilderen? Iets ophalen van marktplaats? Om hulp vragen kan altijd!
                        <br/>
                        <br/>
                        Nadat u bent aangemeld, maakt u een verzoek aan en wacht u of er een klusser reageert. Wanneer
                        de klusser reageert kunt u aangeven of u de klusser accepteerd. Als u dan akkoord gaat kan de
                        klusser bij u langs komen om een plan te maken of om bijvoorbeeld uw boodschappenlijstje op te
                        halen.
                    </React.Fragment>
                }
                position="even"
            />


            <Information
                icon={<HandShake />}
                title="Wil jij helpen klussen?"
                description={
                    <React.Fragment>
                        Als het jou leuk lijkt om inwoners van de saffier te helpen met klusjes, meld je dan nu aan! Nadat je bent aasngemeld kun je een overzicht bekijken van alle klusjes die zijn aangemeld.
                        <br/>
                        <br/>
                        Zie jij er een klusje tussen staan waar je bij zou willen helpen, dan kun je reageren en binnen de kortste tijd sta je in contact met iemand die jou hulp goed kan gebruiken!
                    </React.Fragment>
                }
                position="odd"
            />

            <RandomAdvice />

        </main>
    );
}

export default Home;