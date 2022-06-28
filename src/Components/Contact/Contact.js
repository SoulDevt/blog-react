import React from "react";
import {useNavigate, Outlet } from "react-router-dom";
import classes from "./Contact.module.css"




function Contact(){
   const Navigate = useNavigate();
   const emailClickedHandler = () => {
        Navigate("/contact/email");
   }

   const callClickedHandler = () => {
        Navigate("/contact/telephone");
   }
    return(
        <>
        <h1>Hello from Contact</h1>
        <p>Par quel moyen de contact souhaitez-vous nous contacter ?</p>
        <button onClick={emailClickedHandler} className={classes.button}>Email</button>
        <button onClick={callClickedHandler} className={classes.button}>Téléphone</button>


        <Outlet />
        </>
    )
} 

export default Contact;