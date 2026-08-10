import { LOGO_URL } from "../Utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import "../css/header.css";

const HeaderComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const isOnline = useOnlineStatus();

    const handleLogin = () => {
        setIsLoggedIn((prev) => !prev);
        setMenuOpen(false);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <header className="header">

            {/* Logo */}
            <div className="logo-container">
                <Link to="/" onClick={closeMenu}>
                    <img
                        className="logo"
                        src={LOGO_URL}
                        alt="Chef Logo"
                    />
                </Link>
            </div>


            {/* Hamburger Button */}
            <button
                type="button"
                className={`menu-toggle ${menuOpen ? "active" : ""}`}
                onClick={toggleMenu}
                aria-label="Toggle navigation"
                aria-expanded={menuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>


            {/* Navigation */}
            <nav className={`nav-items ${menuOpen ? "open" : ""}`}>

                <ul>

                    {/* Online Status */}
                    <li>
                        <div
                            className={`connection-status ${
                                isOnline ? "online" : "offline"
                            }`}
                        >
                            <span className="status-dot"></span>

                            <span className="status-text">
                                {isOnline ? "Online" : "Offline"}
                            </span>
                        </div>
                    </li>


                    {/* Home */}
                    <li>
                        <Link to="/" onClick={closeMenu}>
                            Home
                        </Link>
                    </li>


                    {/* About */}
                    <li>
                        <Link to="/about" onClick={closeMenu}>
                            About
                        </Link>
                    </li>


                    {/* Contact */}
                    <li>
                        <Link to="/contact" onClick={closeMenu}>
                            Contact
                        </Link>
                    </li>


                    {/* Grocery */}
                    <li>
                        <Link to="/grocery" onClick={closeMenu}>
                            Grocery
                        </Link>
                    </li>


                    {/* Cart */}
                    <li>
                        <Link to="/cart" onClick={closeMenu}>
                            Cart
                        </Link>
                    </li>


                    {/* Login */}
                    <li>
                        <button
                            type="button"
                            className="login-btn"
                            onClick={handleLogin}
                        >
                            {isLoggedIn ? "Logout" : "Login"}
                        </button>
                    </li>

                </ul>

            </nav>

        </header>
    );
};

export default HeaderComponent;