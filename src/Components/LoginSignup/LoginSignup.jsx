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
                    <option value="en">English [EN]</option>
                    <option value="es">Español [ES]</option>
                    <option value="fr">Français [FR]</option>
                    <option value="de">Deutsch [DE]</option>
                </select>
            </div>
        </div>

       
    
        <div className="submit-container">
            <div className={action==="Login" ? "submit gray" : "submit"} onClick={() => {actionSet("Login")}}>Login</div>
          
        </div>
    </div>
  )
}
