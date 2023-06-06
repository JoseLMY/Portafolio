import React from 'react'
import "../Styles/Datos.css"

function Datos() {
    return(
        <>
            <div className='datosContainerMobile view'>
                <ul className='listaMobile'>
                    <li>
                        <a className='inicio' href="/">Inicio</a>
                    </li>
                    <li>
                        <a className='sobreMi'href="/sobre-mi">Sobre mi</a>
                    </li>
                    <li>
                        <a className='tecnologiasMobile'href="/tecnologias">Tecnologías</a>
                    </li>
                    <li>
                        <a className='hobbies'href="/hobbies">Hobbies</a>
                    </li>
                    <li>
                        <a className='contacto'href="/contacto">Contactame</a>
                    </li>
                </ul>
            </div>
        </>
    )
}

export {Datos}