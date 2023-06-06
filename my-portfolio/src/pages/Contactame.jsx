import React from 'react'

import linkedin from "../assets/linkedin.png"
import WhatsApp from "../assets/whatsapp.png"

import "../Styles/Contactame.css"

function Contactame(){
    return(
        <>
            <div className='primaryContainerContact'>
                <div className='linkedinC'>
                    <img src={linkedin} alt="linkedin" width= "50px"/>
                    <a href="https://www.linkedin.com/in/jose-luis-minota-yacue-685741248/" target="_blank" rel="noreferrer">Linkedin</a>
                </div>
                <div className='whatsAppC'>
                    <img src={WhatsApp} alt="WhatsApp" width= "40px"/>
                    <a href="https://wa.me/573203043794" target="_blank" rel="noreferrer">WhatsApp</a>
                </div>
            </div>
        </>
    )
}

export {Contactame}