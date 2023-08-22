import React,  { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Send } from './Send';

import "../Styles/Contactame.css"

function Contactame(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ya43oes', 'template_dwkg35g', form.current, 'F4W3EOTn9sBL3851q')
        .then((result) => {
            alert("Tu mensaje fue enviado exitosamente, pronto me contactaré contigo :)")
            window.location.reload()
        }, (error) => {
            console.log(error.text);
        });
    }

    return(
        <>
            <div className="formContainer">
                <form ref={form} onSubmit={sendEmail} className='form'>
                    <div className="headerFormContainer">
                        <label className="headerForm">Let's Talk:</label>
                    </div>
                    <label className="labelName">Name:</label>
                    <input id="name" type="text" name="user_name" autoComplete='off'/>
                    <label className="labelEmail" >Email:</label>
                    <input id="email" type="email" name="user_email" autoComplete='off'/>
                    <label className="labelMessage">Your interests are important, write your message:</label>
                    <textarea id="message" name="message"></textarea>
                    <div className="bSubmitContainer">
                        <input className="iSubmit" type="submit" value="Send" onClick={()=>{
                            <Send/>
                        }}/>
                    </div>
                </form>
            </div>
        </>
    )
}


export {Contactame}