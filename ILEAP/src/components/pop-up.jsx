import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth";


const PopUp = (For) => {
    const [user] = useAuthState(auth);

    const confirmEdit = () => {
        
    }
    const editHandler = (e) => {
        console.log(e.target.value)
    }

  return (
    <div className="pop-up-conatiner">
        <div className="pop-up">
            <h1>Edit your {For}</h1>
            <input onChange={editHandler} type="text" />
            <button onClick={confirmEdit} >Confirm</button>
        </div>
    </div>
  )
}

export default PopUp