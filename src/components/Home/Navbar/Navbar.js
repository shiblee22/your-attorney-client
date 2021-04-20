import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import jwt_decode from "jwt-decode";

const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { email, name } = loggedInUser;

    useEffect(() => {
        const token = sessionStorage.getItem('token');

        if (token) {
            const decodedToken = jwt_decode(token);
            // get current time
            const currentTime = new Date().getTime() / 1000;
            // compare the expiration time with the current time
            // will return false if expired and will return true if not expired
            if (decodedToken.exp > currentTime) {
                const { name, email, picture } = decodedToken;
                const signedInUser = { name, email, picture }
                setLoggedInUser(signedInUser);
            }
        }
    }, [setLoggedInUser])
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
            <div className="container-fluid">
                <Link className="navbar-brand h1" to="/">Your Attorney</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-white" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-white" to="/booking">Dashboard</Link>
                        </li>
                        <li className="nav-item mx-2">
                            {email ? <p className="nav-link bg-warning rounded text-dark">{name}</p> : <Link to="/login" className="nav-link bg-warning text-dark rounded">Login</Link>}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;