import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userProfileContext } from "../App";

function NavBar() {
    const user = useContext(userProfileContext)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
            <Link to="/" className="navbar-brand">Jigao</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                    </li>
                </ul>
                <ul className="navbar-nav float-right">
                    <li className="nav-item active">
                        {user ? <Link to="/" className="nav-link">{user.displayName}</Link> : <Link to="/login" className="nav-link">Login</Link>}
                    </li>
                </ul>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            <br />
        </nav>
    )
}

export default NavBar;