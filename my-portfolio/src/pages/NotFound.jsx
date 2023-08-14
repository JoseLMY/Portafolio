import React from 'react'
import "../Styles/notFound.css"
function NotFound() {
    return(
        <>
            <div className='not-found'>
                <h1>ERROR...</h1>
                <div>
                    <p className='err-type'>
                        The page you are looking for does not exist :/
                    </p>
                </div>
            </div>
        </>
    )
}

export {NotFound}