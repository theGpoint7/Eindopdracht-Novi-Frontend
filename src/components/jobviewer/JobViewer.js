import React from 'react';
import './JobViewer.css';


function JobViewer(props) {
    const { title, jobFields } = props;

//maak een constante die als truthy word gebruikt bij het genereren van een veld.
    const filteredFields = jobFields.filter(field => {
        return field.jobtitle || field.joburgency || field.helpstatus || field.helperstatistic || field.requeststatus || field.jobbutton;
    });

    return (
        <div className="component-style jobviewer-div">
            <div className="container jobviewer-container">
                <h2 className="h1-style">{title}</h2>
                <div className="jobviewer-items-container">

                {filteredFields.map((field, index) => (
                    <div key={index} className="jobviewer-item-container">
                        <div className="job-banner">
                            {field.jobtitle && <h3 className="h3-style">{field.jobtitle}</h3>}
                            {field.jobbutton && <button className="standard-button menu-style">{field.jobbutton}</button>}
                        </div>
                        <div className="job-information body-style">
                            <div>
                                {field.joburgency && <p className="">{field.joburgency}</p>}
                                {field.helpstatus && <p className="">{field.helpstatus}</p>}
                                {field.helperstatistic && <p className="">{field.helperstatistic}</p>}
                                {field.requeststatus && <p className="">{field.requeststatus}</p>}
                            </div>
                                {field.helperstatistic &&
                                <div className="accept-help-buttons">
                                    <button className="standard-button menu-style">Ja</button>
                                    <button className="standard-button menu-style">Nee</button>
                                </div>
                            }
                        </div>

                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default JobViewer;
