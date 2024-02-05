import React from 'react'
import EmailLogIn from "../components/email-log-in.jsx";
import LogInGoogle from "../components/log-in-google.jsx";
import SignUp from "../components/sign-up";
import { useState } from "react";

const LogIn = () => {
    const [hasAccount, setHasAccount] = useState()
    
  return (
    <div className="container">
      <h1 className='Title'>ILEAP</h1>
        <div className="log-in-container">
          { !hasAccount ? <SignUp/> : <EmailLogIn/>}
          <div className="log-in-with-google">
            <LogInGoogle/>
          </div>
          { !hasAccount ? <>Already have an Account? <button className='log-in-btn' onClick={() => setHasAccount(true)}>Log In</button></> :
           <>Dont have an Account? <button className='sign-up-btn' onClick={() => {setHasAccount(false)}}>Sign Up</button></>}
        </div>
      </div>
  )
}

export default LogIn