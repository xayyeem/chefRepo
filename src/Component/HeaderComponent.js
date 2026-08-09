import { LOGO_URL } from "../Utils/constants";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

const HeaderComponent = ()=>{
    const[isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = ()=>{
        setIsLoggedIn(!isLoggedIn);
    }
    
    return (
        <div className="header">
            <div className = "logo-container">
                <img className = "logo" src={LOGO_URL} alt="Logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                        </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>Cart</li>
                    <li>
                        <button className="login-btn" onClick={handleLogin}>
                            {isLoggedIn ? 'Logout' : 'Login'}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderComponent;