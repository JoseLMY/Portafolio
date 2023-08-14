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
                            <a href= "/" className='home'>Home</a>
                        </li>
                        <li>
                            <a href="/sobre-mi" className='about-me'>About me</a>
                        </li>
                        <li>
                            <a href="/tecnologias" className='technologies'>Technologies</a>
                        </li>
                        <li>
                            <a href="/hobbies" className='hobbies'>Hobbies</a>
                        </li>
                        <li>
                            <a href="/contacto" className='contact-me'>Contact me</a>
                        </li>
                    </ul>
                    <p className='view mas' onClick={handleToggle}>MAS</p>
            </nav>
            {state && <Datos />}
        </>
    )
}
export {NavBar}