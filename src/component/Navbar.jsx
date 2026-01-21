import React, { Component } from 'react'
import logo from '../assets/images/logo.png'
import headcalle from '../assets/images/head-caller.webp'


export class Navbar extends Component {
  render() {
    return (
      <div>
            <div className="mynavbar">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
                                <a className="navbar-brand" href="/">
                                    <img src={logo} alt="logo" decoding="async" width="20" height="5" />
                                </a>

                                <button className="navbar-toggler" type="button" aria-label="mobile nav" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                                    <span className="navbar-toggler-icon"></span>
                                    <span className="navbar-toggler-icon"></span>
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="/">Home</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="/">About Us</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="/">Contact Us</a>
                                        </li>

                                    </ul>
                                </div>

                                <div className="head-tfn">
                                    <a href="tel:+1-888-XXX-XXXX">
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
