import React,  { useRef } from 'react'
import emailjs from '@emailjs/browser';

// import linkedin from "../assets/linkedin.png"
// import WhatsApp from "../assets/whatsapp.png"

import "../Styles/Contactame.css"

function Contactame(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ya43oes', 'template_dwkg35g', form.current, 'F4W3EOTn9sBL3851q')
        .then((result) => {
            console.log(result.text);
            form.input = ""
        }, (error) => {
            console.log(error.text);
        });
    }
    return(
        <>
            {/* <div className='primaryContainerContact'> */}
                {/* <div className='linkedinC'>
                    <img src={linkedin} alt="linkedin" width= "50px"/>
                    <a href="https://www.linkedin.com/in/jose-luis-minota-yacue-685741248/" target="_blank" rel="noreferrer">Linkedin</a>
                </div>
                <div className='whatsAppC'>
                    <img src={WhatsApp} alt="WhatsApp" width= "40px"/>
                    <a href="https://wa.me/573203043794" target="_blank" rel="noreferrer">WhatsApp</a>
                </div> */}
            <div className="formContainer">
                <form ref={form} onSubmit={sendEmail} className='form'>
                    <div class="headerFormContainer">
                        <label class="headerForm">Let's Talk:</label>
                    </div>
                    <label className="labelName">Name:</label>
                    <input id="name" type="text" name="user_name" autoComplete='off'/>
                    <label className="labelEmail" >Email:</label>
                    <input id="email" type="email" name="user_email" autoComplete='off'/>
                    <label className="labelMessage">Your interests are important, write your message:</label>
                    <textarea id="message" name="message"></textarea>
                    <div className="bSubmitContainer">
                        <input class="iSubmit" type="submit" value="Send" />
                    </div>
                </form>
            </div>
            {/* </div> */}
        </>
        )
    }


export {Contactame}