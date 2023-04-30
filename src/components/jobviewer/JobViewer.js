import React from 'react';
import './JobViewer.css';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function JobViewer(props) {
    const { title, jobFields } = props;

//create a constant that filters empty fields in order to not generate anything if the fields is empty using the && operator below.
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
