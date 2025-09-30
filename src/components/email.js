import React from "react";
import { motion , useAnimation } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BounceLoader } from "react-spinners";

export default function Email(){
    const[sent,setSent] = React.useState(false);
    const inputControls = useAnimation()
    const nameRef = useRef(null);
    const mailRef = useRef(null);
    const msgRef = useRef(null);


    function sendMail(event){
        event.preventDefault();
        let nameValue = nameRef.current.value;
        let mailValue = mailRef.current.value;
        let msgValue = msgRef.current.value;

        if(nameValue==="" || mailValue==="" || msgValue===""){
            inputControls.start('shaking');
        }
        else{
            setSent(!sent);
            const templateParams = {
                from_name : nameValue,
                email_id : mailValue,
                message : msgValue
            };
    
            emailjs.send('service_4utum7d','template_ueil0qd', templateParams, 'p_Z8zBejoQJYcW2UE')
            .then((response) => {
               console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
               console.log('FAILED...', err);
            });

            setTimeout(()=>{
                setSent(prev=>!prev)
                console.log("value of sent is",sent)
            },4000)
        }
        
    }

    const inputVariants = {
        shaking: {
          x: [-10, 10, -10, 10, 0],
          transition: {
            duration: 0.4,
          },
        },
      };
    return (
        <div id="emailRoot">
            {
                sent?
                <motion.div id="sending" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}>
                <motion.h3 id="hola">Sending...</motion.h3>
                <BounceLoader
                  height="80"
                  width="80"
                  radius="9"
                  color="#a6f2db"
                  ariaLabel="loading"
                  wrapperStyle
                  wrapperClass
                />
                </motion.div>
                :
                <>
               <motion.input variants={inputVariants} animate={inputControls} ref={nameRef} id="name" placeholder="Name"/>
               <motion.input variants={inputVariants} animate={inputControls} ref={mailRef} id="email" placeholder="Email"/>
               <motion.textarea variants={inputVariants} animate={inputControls} ref={msgRef} id="message" placeholder="Message"/>
               <motion.div whileHover={{scale:1.1}} id="contactButton" onClick={sendMail}>Get in touch</motion.div>
                </>
            }
            
            
        </div>
    )
}

   