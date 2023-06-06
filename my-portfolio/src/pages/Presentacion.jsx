import React from 'react'

import "../Styles/Presentacion.css"

import linkedin from "../assets/linkedin.png"
import WhatsApp from "../assets/whatsapp.png"

function Presentacion () {
    return (
        <>
        <div className='fondo'>
            <div className='presentacionContainer'>
                <div className='presentacion'>
                    <div className='tamaño'>
                        <p className='nombre'>JOSE LUIS MINOTA</p>
                        <h1 className='rol'>Front-End Developer</h1>
                    </div>
                    <div className='redes'>
                        <div className='linkedin'>
                            <img src={linkedin} alt="linkedin" width= "50px"/>
                            <a href="https://www.linkedin.com/in/jose-luis-minota-yacue-685741248/" target="_blank" rel="noreferrer">Linkedin</a>
                        </div>
                        <div className='whatsApp'>
                            <img src={WhatsApp} alt="WhatsApp" width= "40px"/>
                            <a href="https://wa.me/573203043794" target="_blank" rel="noreferrer">WhatsApp</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export {Presentacion}