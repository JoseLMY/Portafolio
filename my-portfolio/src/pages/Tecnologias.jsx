import React from 'react'

import "../Styles/Tecnologias.css"

// imgs proyectos
import toDo from "../assets/toDo.png"
import juego from "../assets/Juego.png"
import iconHTML from "../assets/iconHTML.png"
import iconCSS from "../assets/iconCSS.png";
import iconJS from "../assets/iconJs.png"
import iconReact from "../assets/iconReact.png"

function Tecnologias() {
    return (
        <>
            <div className='subtitleContainer'>
                <p className='subtitle-2'>Tecnologías</p>
            </div>
            <div className='tecnologiasContainer'>
                <div className='tecnologias'>
                    <div className='tecnologia html'>
                        <div className="icon">
                            <img className="iconTecnologia" src={iconHTML} alt="" />
                            <h2>
                                HTML5 
                            </h2>
                        </div>
                        <p>
                            Esta tecnología <span>fue la primera que aprendí</span>, podría decir que ha estado <span>desde mis inicios en el 2019</span>.
                        </p>
                    </div>

                    <div className='tecnologia css'>
                        <div className="icon">
                            <img className="iconTecnologia" src={iconCSS} alt="" />
                            <h2>
                                CSS3
                            </h2>
                        </div>
                        <p>
                            CSS junto con HTML fueron quienes me dieron la bienvenida a este mundo, su fácil aprendizaje hicieron que me enamorara de la programación... Por eso las coloco en primer lugar. También la conozco desde el año 2019.
                        </p>
                    </div>
                    
                    <div className='tecnologia javascript'>
                        <div className="icon">
                            <img className="iconTecnologia" src={iconJS} alt="" />
                            <h2>
                                JavaScript
                            </h2>
                        </div>
                        <p>
                            Desde que entre a este mundo <span>ha sido el lenguaje que más he usado</span> en los proyectos que he creado, podría decir que domino este lenguaje en particular, porque <span>también conozco de Python y Java</span>.
                        </p>
                    </div>
                    <div className='tecnologia react'>
                        <div className="icon">
                            <img className="iconTecnologia" src={iconReact} alt="" />
                            <h2>
                                React.js
                            </h2>
                        </div>
                        <p>
                            Una vez ya entendí JavaScript, opte por entender <span>React.js entendiendo los estados, las rutas, los contextos y los efectos</span>.
                        </p>
                    </div>
                </div>
            </div>

            <div className='subtitleContainer'>
                    <p className='subtitle-1'>Proyectos</p>
                </div>
                <div className='proyectosContainer'>
                    <div className='pro-1'>
                        <img className='proyectos' src={juego} alt="Juego multijugados" />
                        <a href='https://github.com/JoseLMY/Juego-Multijugador' target='_black'>Ver código</a>
                    </div>
                    <div className='pro-2'>
                        <img className='proyectos' src={toDo} alt="Lista de tareas" />
                        <a href="https://github.com/JoseLMY/To-do-React.js" target='_blanck'>Ver código</a>
                    </div>
                </div>
        </>
    )
}

export {Tecnologias}