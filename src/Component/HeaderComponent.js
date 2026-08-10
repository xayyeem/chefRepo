import { LOGO_URL } from "../Utils/constants";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const HeaderComponent = ()=>{
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnlineStatus();
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
                        <div className={`connection-status ${isOnline ? "online" : "offline"}`}>
                            <span className="status-dot"></span>
                            <span className="status-text">
                                {isOnline ? "Online" : "Offline"}
                            </span>
                        </div>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                        </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
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