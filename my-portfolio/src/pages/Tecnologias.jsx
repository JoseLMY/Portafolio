import React from 'react'
import "../Styles/Tecnologias.css"
//Tecnology Icons
import iconHTML from "../assets/iconHTML.png"
import iconCSS from "../assets/iconCSS.png";
import iconJS from "../assets/iconJs.png"
import iconReact from "../assets/iconReact.png"
import iconNodeJS from "../assets/node.png"
//proyect 1
import toDo from "../assets/toDo.png"
//proyect 2
import juego from "../assets/Juego.png"
//proyect 3
import landingTattoo from "../assets/landing-tattoo.png"
//proyect 4
import productions from "../assets/349producciones.png"
//proyect 5
import myOrderDeskTop from "../assets/ecommerce_img2.jpeg"
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
                            <h2>HTML5</h2>
                        </div>
                        <p>This technology <span className='spanTechnologies'>was the first one I learned</span>, I could say that it has been <span className='spanTechnologies'>since my beginnings in 2019</span>.</p>
                    </div>
                    <div className='tecnologia css'>
                        <div className="icon">
                            <img className="iconTecnologia" src={iconCSS} alt="" />
                            <h2>CSS3</h2>
                        </div>
                        <p>CSS along with HTML were the ones who welcomed me into this world, their easy learning made me fall in love with programming... That's why I put them in the first place. I have also known her since 2019.</p>
                    </div>
                    <div className='tecnologia javascript'>
                        <div className="icon">
                            <img className="iconTecnologia" src={iconJS} alt="" />
                            <h2>JavaScript</h2>
                        </div>
                        <p>Since I entered this world, <span className='spanTechnologies'>it has been the language I have used the most</span> in the projects I have created, I could say that I am fluent in this particular language, because <span className='spanTechnologies'>I also know Python and Java</span >.</p>
                    </div>
                    <div className='tecnologia react'>
                        <div className="icon">
                            <img className="iconTecnologia" src={iconReact} alt="" />
                            <h2>React.js</h2>
                        </div>
                        <p>Once I got the hang of JavaScript, I moved on to understanding <span>React.js by understanding states, routes, contexts, and effects</span>.</p>
                    </div>
                </div>
            </div>

            <div className='subtitleContainer'>
                <p className='subtitle-2'>Projects</p>
            </div>
            <div className='proyectosContainer'>
                <div className='pro-4'>
                    <img className='proyectos' src={productions} alt="Landing page of tattoo's" />
                    <a href='https://349-producciones.vercel.app/' target='_blanck'>Test</a>
                    <a href="https://github.com/JoseLMY/internship-projects/tree/main/shop" target='_blanck'>See Code</a>
                </div>
                <div className='pro-EcommerceContainer'>
                    <div className='imagesContainer'>
                        <section className='sliderBody'>
                            <figure className='figureContainer'>
                                <img src={myOrderDeskTop} alt="" className='imagesProyect'/>
                            </figure>
                        </section> 
                        <div className='usedTecnologiesContainer'>
                            <figure>
                                <img src={iconReact} alt="" className='usedTecnology'/>
                            </figure>
                            <figure>
                                <img src={iconHTML} alt="" className='usedTecnology'/>
                            </figure>
                            <figure>
                                <img src={iconCSS} alt="" className='usedTecnology'/>
                            </figure>
                            <figure>
                                <img src={iconNodeJS} alt="" className='usedTecnology'/>
                            </figure>
                        </div>
                    </div>
                    <div className='pro-5 action'>
                        <a href="https://github.com/JoseLMY/e-commerse/tree/main/e-commerse" target='_blanck'>See Code</a>
                    </div>
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
                <div className='pro-1'>
                    <img className='proyectos' src={juego} alt="Juego multijugados" />
                    <a href='https://github.com/JoseLMY/Juego-Multijugador' target='_black'>See Code</a>
                </div>
            </div>
        </>
    )
}

export {Tecnologias}