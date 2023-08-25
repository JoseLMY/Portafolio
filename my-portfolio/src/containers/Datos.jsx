import React from 'react'
import "../Styles/Datos.css"

function Datos() {
    return(
        <>
            <div className='datosContainerMobile view'>
                <ul className='listaMobile'>
                    <li>
                        <a className='inicio' href="/">Home.</a>
                    </li>
                    <li>
                        <a className='sobreMi'href="/sobre-mi">About Me.</a>
                    </li>
                    <li>
                        <a className='tecnologiasMobile'href="/tecnologias">Technologies.</a>
                    </li>
                    <li>
                        <a className='contacto'href="/contacto">Contact me.</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export {Datos}