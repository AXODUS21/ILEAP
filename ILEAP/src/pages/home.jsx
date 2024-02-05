import React from 'react'
import '../css/home.css'
import { auth } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import arrowDown from "../images/icons8-down-24.png"
import Links from '../components/links'
import Hexagon from "../components-extra/hexagon"
import Logo from "../images/RED_SPARTANS_LOGO.jpg"

const Home = () => {
  const [user] = useAuthState(auth)

  return (
    <>
      <header>
        <div className="user-container">
          <div className="dropdown">
            <button className="link">
              <img src={arrowDown} />
            </button>
            <div className="dropdown-menu">
              {/* will be replaced with links */}
              <Links />
            </div>
          </div>

          <div className="user-profile">
            <img src={user?.photoURL || ""} />
          </div>
          <div className="user-name">
            {user?.displayName || "insert a name"}
          </div>
        </div>


        <div className="logo-container">
          <img src={Logo}/>
        </div>
      </header>
      <div className="home-main">
        <div className="details-container">
          <div className="title">ILEAP</div>
          <p>
            Internship, Learning, Experience, Advancement, and Placement Web
            Based System for OJT and Job Placement Offices of Batangas State
            University-The National Engineering University-Lipa Campus
          </p>
        </div>
        <div>
          <Hexagon /> 
        </div>
      </div>
    </>
  );
}

export default Home