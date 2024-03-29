import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white ">
                    <div className="container">
                        <Link className="navbar-brand" to="/">Ecotech </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end text-white" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item text-white">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to="/My-Prfoile">My Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="Signup">Signup</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
    </div>
  )
}

export default Navbar