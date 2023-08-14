import React from 'react'
import "../Styles/Hobbies.css"

import hobbie1 from "../assets/cicla.png"
import hobbie2 from "../assets/audifonos.png"
import hobbie3 from "../assets/libro.png"
import hobbie4 from "../assets/programacion.png"
import hobbie5 from "../assets/dibujar.png"

function Hobbies() {
    return(
        <>
            <div className='primaryContainer'>
                <div className='subtitle'>
                    <h2 className='subtitle-h2'>Hobbies</h2>
                </div>
                <div className='container'>
                    <div className='hobbie-1'>
                        <div className='hobbieName'>
                            <h2>Mountain biking</h2>
                        </div>
                        <img src={hobbie1} alt="Mountain biking"/>
                    </div>
                    <div className="hobbie-4">
                        <div className='hobbieName'>
                            <h2>Programming</h2>
                        </div>
                        <img src={hobbie4} alt="Programming"/>
                    </div>
                    <div className="hobbie-2">
                        <div className='hobbieName'>
                            <h2>Escuchar Música</h2>
                        </div>
                        <img src={hobbie2} alt="Escuchar Música"/>
                    </div>
                    <div className="hobbie-3">
                        <div className='hobbieName'>
                            <h2>Read</h2>
                        </div>
                        <img src={hobbie3} alt="Read"/>
                    </div>
                    <div className="hobbie-5">
                        <div className='hobbieName'>
                            <h2>Draw</h2>
                        </div>
                        <img src={hobbie5} alt="Draw"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export {Hobbies}