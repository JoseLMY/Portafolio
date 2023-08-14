import React from 'react'

import "../Styles/SobreMi.css"

// imgs certificaciones
import cFrontend from "../assets/cursoFED.png"
import cJavaScript from "../assets/cursoJS.png"
import cReact from "../assets/cursoR.png"


function SobreMi() {
    return(
        <>
            <div className='aboutMeContainer'>

                <div className='subtitleContainer'>
                    <p className='subtitle-1'>About me</p>
                </div>
                <div className='acer-1-container'>
                    <div className='acer-1'>
                        <p> 
                            Hey, i'm <b>Jose Luis Minota</b> - <strong><span> Front-End Developer</span></strong>. <br />
                            I have Knowledge in web development, especially  in the <strong>Front-End</strong> part, managing technologies like <span> JavaScript, React.js, HTML5, CSS3 y Next.js.</span>
                        </p>
                    </div>
                </div>

                <div className='acer-2-container'>
                    <div className='acer-2'>
                        <p>
                            From a very young age I knew that technology was one of the things that I was most passionate about, so from that age I began to delve into this world, completing different certified courses with <b>Platzi.</b> <br />
                            Some of them are:
                        </p>
                    </div>
                </div>

                <div className='certificadosContainer'>
                    <img className='certificados' src={cFrontend} alt="Curso de Frontend Developer" />
                    <img className='certificados' src={cJavaScript} alt="Curso de JavaScript" />
                    <img className='certificados' src={cReact} alt="Curso de React" />

                </div>
                <div className='masCertificados'>
                    <p>
                        <b>These are only three, in my profile of <a href="https://www.linkedin.com/in/jose-luis-minota-yacue-685741248/" target="_blank" rel="noreferrer">Linkedin</a> there is more ♛.</b>
                    </p>
                </div>

                <div className='acer-2-container tecnologo'>
                    <div className='acer-2'>
                        <p>
                        Not only did I stay with the certifications, but I wanted to go even further, which is why I am currently working as a <b>software analysis and development technologist</b> at SENA (National Learning Service).
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export {SobreMi}