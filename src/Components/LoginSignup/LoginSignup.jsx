import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'

export const LoginSignup = () => {

    const [action, actionSet] = useState("Leidos Sign Up"); //initialize these two variables with the sign up data

  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login" ? <div></div> : <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='Name' />
            </div>}

            <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder='User ID' />
            </div>

            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password' />
            </div>

            <div className="input">
                <select className="language-dropdown">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                </select>
            </div>
        </div>

        {action==="Leidos Sign Up" ? <div></div> : <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
    
        <div className="submit-container">
            <div className={action==="Login" ? "submit gray" : "submit"} onClick={() => {actionSet("Login")}}>Login</div>
            <div className={action==="Leidos Sign Up" ? "submit gray" : "submit"} onClick={() => {actionSet("Leidos Sign Up")}}>Sign Up</div>
        </div>
    </div>
  )
}
