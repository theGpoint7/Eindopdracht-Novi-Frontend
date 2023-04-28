import React from 'react';
import './Footer.css';

import { ReactComponent as Envelope} from "../../assets/mail_icon.svg";


function Footer ({text}) {
    return (
        <footer>
        <div className="container footer-container">
             <div className="item-container footer-item">
                 <Envelope className ="envelope-icon"/>
                 <p className="menu-style">
                     {text}
                 </p>
             </div>
        </div>
        </footer>
    );
}

export default Footer;