import React from 'react'
import { useState } from 'react'
import { Datos } from '../containers/Datos'
import "../Styles/NavBar.css"

function NavBar(){

    const [state, setState] = useState(false)
    const handleToggle = () => {
        setState(!state)
    }

    return(
        <>
            <nav className='nav-bar'>
                    <ul className='lista'>
                        <li>
                            <a href="/">Inicio</a>
                        </li>
                        <li>
                            <a href="/sobre-mi">Sobre mi</a>
                        </li>
                        <li>
                            <a href="/tecnologias">Tecnologías</a>
                        </li>
                        <li>
                            <a href="/hobbies">Hobbies</a>
                        </li>
                        <li>
                            <a href="/contacto">Contactame</a>
                        </li>
                    </ul>
                    <p className='view mas' onClick={handleToggle}>MAS</p>
            </nav>
            {state && <Datos />}
        </>
    )
}

export {NavBar}