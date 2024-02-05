import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/firebase.js';
import { useNavigate } from 'react-router-dom';

const EmailLogIn = () => {
    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('');
    const nagivate = useNavigate();

    const signInEmail = (e) =>{
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then((useCredential) => {
            console.log(useCredential)
            nagivate("/home");
        }).catch((error) => {
            alert(error)
        })
        
    }
 
  return (
    <>
      <h1>Log In</h1>
      <div className="email-log-in-container">
        <label>Email:</label>
        <input
          type="text"
          className="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Password:</label>
        <input
          type="password"
          className="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={signInEmail}>Log In</button>
      </div>
      
    </>
  );
}

export default EmailLogIn