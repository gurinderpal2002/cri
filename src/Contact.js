import React from 'react';


const Contact = ({icon, text, fill}) => {

    return (

                <div className={`footer-${fill}`}>

                <figure className={`footer-${fill}-fig`}>
                       {icon}
                </figure>

                <h3 className="footer-item">
                    {text}
                </h3>

                </div>

            );

}


export default Contact;