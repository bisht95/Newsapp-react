import React, { Component } from 'react'
import logo from '../assets/images/logo.png'
import headcalle from '../assets/images/head-caller.webp'
import { Link } from 'react-router-dom'


export class Navbar extends Component {
  render() {
    return (
      <div>
            <div className="mynavbar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                                <Link className="navbar-brand" to="/">
                                    <img src={logo} alt="logo" decoding="async" width="20" height="5" />
                                </Link>

                                <button className="navbar-toggler" type="button" aria-label="mobile nav" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                                    <span className="navbar-toggler-icon"></span>
                                    <span className="navbar-toggler-icon"></span>
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link active" to="/">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/about">About Us</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/business">Business</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/entertainment">Entertainment</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/general">General</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/health">Health</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/science">Science</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/sports">Sports</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/technology">Technology</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="head-tfn">
                                    <a to="tel:+1-888-XXX-XXXX">
                                        <span className="call-icon">
                                            <img src={headcalle} alt="head-caller" width="5" height="5" loading="lazy" decoding="async" />
                                        </span>

                                        <span className="callustext">
                                            <span className="head-callus">For any assistance call us</span>
                                            <span>+1-888-XXX-XXXX</span>
                                        </span>
                                    </a>
                                </div>

                            </nav>
                        </div>
                    </div>
                </div>
            </div>
             
      
        </div>
    )
  }
}

export default Navbar
