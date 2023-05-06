import React from 'react';
import './Home.css';

import { useNavigate } from "react-router-dom";



import { ReactComponent as SaffierKlusjes} from "../../assets/Saffier Klusjes.svg";
import { ReactComponent as Idea} from "../../assets/Idea_icon.svg";
import { ReactComponent as HandShake} from "../../assets/Handshake_icon.svg";

import Information from "../../components/information/Information";


function Home() {
    const navigate = useNavigate();

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

        </main>
    );
}

/*
        <main className="page-container">
                        <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut debitis doloribus
                facilis iste placeat praesentium sint voluptatem. Architecto at, maiores?
            </p>
            <p className="content-container-col2">
                Consectetur adipisicing elit. Blanditiis cum, dolor ea enim fugiat fugit id inventore ipsam libero magni modi natus
                necessitatibus nisi optio quas qui quis quo, reprehenderit saepe similique sint sit soluta ut veritatis voluptatem.
                Ab aliquid amet animi aperiam assumenda, atque autem dolorum ducimus et excepturi ipsa magnam nemo nulla possimus provident,
                quos ratione repellendus sed sequi tempore! Accusantium amet commodi deleniti exercitationem impedit obcaecati quis repudiandae!
                Consectetur eligendi ipsam odio repellendus sequi veniam voluptas? Adipisci at consectetur eaque fuga hic inventore ipsa magnam
                provident vitae. Ad animi commodi consectetur, corporis dicta doloremque dolorum error hic inventore iste laudantium libero magnam
                mollitia necessitatibus nemo nesciunt nihil non obcaecati odio odit pariatur quae quaerat quas quisquam quos rem sapiente sequi
                similique sint vero? Accusamus aliquam aliquid blanditiis consequatur est et minima mollitia neque non, odit perspiciatis placeat
                provident quos, similique sit totam vero. Beatae consequatur cupiditate rerum?
            </p>
            <br />
            <p>klik <Link to={"/aanmelden"}> hier</Link> on naar de aanmeld pagina te gaan! </p>
            <br />
            <button onClick={clickHandler} type="button" className="appointment-button">
                Ga naar de registratie pagina + bericht word in console gelogd!
            </button>
        </main>
    );
}

*/
export default Home;