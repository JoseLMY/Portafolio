import React from 'react'

import "../Styles/Tecnologias.css"

// imgs proyectos
import toDo from "../assets/toDo.png"
import juego from "../assets/Juego.png"
import landingTattoo from "../assets/landing-tattoo.png"
import iconHTML from "../assets/iconHTML.png"
import iconCSS from "../assets/iconCSS.png";
import iconJS from "../assets/iconJs.png"
import iconReact from "../assets/iconReact.png"

function Tecnologias() {
    return (
        <>
            <div className='subtitleContainer'>
                <p className='subtitle-2'>Technologies</p>
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
                            This technology <span>was the first one I learned</span>, I could say that it has been <span>since my beginnings in 2019</span>.
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
                            CSS along with HTML were the ones who welcomed me into this world, their easy learning made me fall in love with programming... That's why I put them in the first place. I have also known her since 2019.
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
                        Since I entered this world, <span>it has been the language I have used the most</span> in the projects I have created, I could say that I am fluent in this particular language, because <span>I also know Python and Java</span >.
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
                            Once I got the hang of JavaScript, I moved on to understanding <span>React.js by understanding states, routes, contexts, and effects</span>.
                        </p>
                    </div>
                </div>
            </div>

            <div className='subtitleContainer'>
                    <p className='subtitle-1'>Projects</p>
                </div>
                <div className='proyectosContainer'>
                    <div className='pro-1'>
                        <img className='proyectos' src={juego} alt="Juego multijugados" />
                        <a href='https://github.com/JoseLMY/Juego-Multijugador' target='_black'>See Code</a>
                    </div>
                    <div className='pro-2'>
                        <img className='proyectos' src={toDo} alt="Lista de tareas" />
                        <a href='https://creator-tasks.vercel.app/' target='_blanck'>Test</a>
                        <a href="https://github.com/JoseLMY/To-do-React.js" target='_blanck'>See Code</a>
                    </div>
                    <div className='pro-3'>
                        <img className='proyectos' src={landingTattoo} alt="Landing page of tattoo's" />
                        <a href='https://tattoo-qh38l6b1w-joselmy.vercel.app/' target='_blanck'>Test</a>
                        <a href="https://github.com/JoseLMY/internship-projects/tree/main/tattoo/src" target='_blanck'>See Code</a>
                    </div>
                </div>
        </>
    )
}

export {Tecnologias}