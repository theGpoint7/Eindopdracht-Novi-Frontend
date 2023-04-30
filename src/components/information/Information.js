import React from 'react';
import './Information.css';



function Information ({icon, title, description, position}) {

    const containerStyle = position === 'even' ? 'information-component-container-even' : 'information-component-container-odd';

    return (
        <article className="Information component-style">
            <div className={`container ${containerStyle}`}>
                <div className="item-container information-component-item">
                    <h2 className="h2-style"> {title}</h2>
                    <p className="body-style"> {description} </p>
                </div>
                        {icon}
            </div>
        </article>
    );
}

export default Information;