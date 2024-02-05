import React from 'react'
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "../css/profile.css"
import { useNavigate } from 'react-router-dom';
import {signOut} from 'firebase/auth'

const cProfile = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()

  const returnHome = () => {
    navigate("/home")
  }

  const signUserOut = async () => {
    await signOut(auth)
    alert("You Will Be Signed Out")
    navigate("/");
    
  }

  return (
    <>
      <div className="button-container">
        <button class="btn" onClick={returnHome}>
          Back To Home
        </button>
      </div>
      <div className="profile-container">
        <div className="user-img">
          <img src={user.photoURL} />
        </div>
        <div className="user-details">
          <table>
            <tr>
              <th>NAME:</th>
              <td>{user.displayName || "Insert Your Name"}</td>
            </tr>
            <tr>
              <th>EMAIL:</th>
              <td>{user.email}</td>
            </tr>
            <tr>
              <th>CONTACT NUMBER:</th>
              <td>{user.phoneNumber || "Please Put A Phone Number"}</td>
            </tr>
            <tr>
              <th>AMMOUNT OF INTERNSHIPS:</th>
              <td>{user.phoneNumber || "Null"}</td>
            </tr>
            <tr>
              <th>STATUS:</th>
              <td>{status || "Null"}</td> {/*either a student or graduate*/}
            </tr>
          </table>
        </div>
      </div>
      <div className="sign-out-button-container">
        <button onClick={signUserOut}>
          <div className='a'>
            <span>Log Out</span>
          </div>
        </button>
      </div>
    </>
  );
}

export default Profile

/*
  <htl> hganun talaga ang buhay biy kahit ano ang gawin mo hou gamon parin talaga yun  
  MWUHUHFUFHW
  <div syle-="font:size: 300px">
    tang ina boy tintamad na ako mag aral legit tang ina nakaka puta
    gusto ko nalang yumaman ng madalian 
    gumawa ng original na something
    or mag buigay ng sapat na effort?
    pero kailangan boy may strategy ginagawa ko lang ditp pinapractice ko mag type kasi ganun ako kalakas
    kase kase kase po kailangan nyo po ng diskarte para maging flexible kase yung buisness nyo
    di yan aangat kapag di kayu flexible andami po kasi problema na kasama ng business kaya pag di ka 
    madiskarte wala ka talaga magagawa babagsak talga yan g business mo 
  </div>
*/