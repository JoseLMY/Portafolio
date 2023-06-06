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
                    <p className='subtitle-1'>Sobre mí</p>
                </div>
                <div className='acer-1-container'>
                    <div className='acer-1'>
                        <p> 
                            Hola, soy <b>Jose Luis Minota</b> - <strong><span> Front-End Developer</span></strong>. <br />
                            Tengo conocimiento en desarrollo web, especialmente en la parte del <strong>Front-End</strong>, manejando tecnologías como <span> JavaScript, React.js, HTML5, CSS3 y Next.js.</span>
                        </p>
                    </div>
                </div>

                <div className='acer-2-container'>
                    <div className='acer-2'>
                        <p>
                            Desde muy joven supe que la tecnología era una de las cosas que más me apasionaban, por eso desde esa edad empecé a adentrarme en este mundo, culminando diferentes cursos certificados con <b>Platzi.</b> <br />
                            Algunos de ellos son:
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
                        <b>Estos son solo tres, en mi perfil de <a href="https://www.linkedin.com/in/jose-luis-minota-yacue-685741248/" target="_blank" rel="noreferrer">Linkedin</a> hay más ♛.</b>
                    </p>
                </div>

                <div className='acer-2-container tecnologo'>
                    <div className='acer-2'>
                        <p>
                            No solo me quedé con las certificaciones, sino que quise ir aún mas alla, es por eso que en este momento me encuentro realizando un <b>tecnólogo en análisis y desarrollo de software</b> en el SENA (Servico Nacional de Aprendizaje).
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export {SobreMi}