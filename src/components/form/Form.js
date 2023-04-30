import React from 'react';
import './Form.css';
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";



function Form ({title, fields, button, message, linkWord, linkTo}) {

    const navigate = useNavigate();

    {/* function clickHandler(e) {
        e.preventDefault();
        navigate("/registreren");
        console.log("We gaan nu naar de registratie pagina!")
    }
    */}

    return (
        <form className="Form component-style">
           <div className="container form-component-container">
               <legend className="h1-style form-title">{title}</legend>
            <fieldset className="form-fieldset">

                {fields.map((field, index) => (
                    <React.Fragment key={index}>
                     <div className="body-style form-div">
                         <p className="form-field">


                             {field.type === 'textarea' ?
                                 <React.Fragment>
                                    <label htmlFor={field.name}>{field.label}</label>
                                    <textarea name={field.name} id={field.name} placeholder={`Typ hier je ${field.label.toLowerCase()}`} />
                                 </React.Fragment>
                                 :
                                 field.type ==="checkbox" ?
                                     <React.Fragment>

                                     </React.Fragment>
                                 :
                                     <React.Fragment>
                                         <label htmlFor={field.name}>{field.label}</label>
                                         <input type={field.type} name={field.name} id={field.name} placeholder={`Typ hier je ${field.label.toLowerCase()}`} />
                                     </React.Fragment>
                             }
                         </p>
                         {field.type !== 'checkbox' && <div id={`${field.name}Feedback`} className="errorMSG">error-berichtje</div>}
                     </div>
                        {field.type === 'checkbox' &&
                            <div className="body-style form-div-checkbox">
                                <p className="form-field">
                                    <label htmlFor={field.name}>{field.label}</label>
                                    <input type="checkbox" name={field.name} id={field.name} />
                                </p>
                            </div>
                        }
                    </React.Fragment>
                ))}
                <button className="standard-button menu-style" type="submit">{button}</button>

            </fieldset>
               <p className={`body-style ${linkWord ? `standard-link` : ``}`}>
                   {message.includes(linkWord) ? (
                       <>
                           {message.split(linkWord)[0]}
                           <Link to={linkTo}>{linkWord}</Link>
                           {message.split(linkWord)[1]}
                       </>
                   ) : (
                       message
                   )}
               </p>

           </div>


        </form>
    );
}

export default Form;