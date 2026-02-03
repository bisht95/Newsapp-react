import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer mt-5">
            <div className="container">
                <div className="row align-items-center g-0 border-top py-2">
                    <div className="col-md-6 col-12 text-center text-md-start">
                        <span>&copy; <span id="copyright">2026</span> Newsapp. All Rights Reserved.</span>
                    </div>
                    
                    <div className="col-12 col-md-6">
                        <nav className="nav nav-footer justify-content-center justify-content-md-end">
                            <a className="nav-link active ps-0" href="#">Privacy</a>
                            <a className="nav-link" href="#">Terms </a>
                            <a className="nav-link" href="#">Feedback</a>
                            <a className="nav-link" href="#">Support</a>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    )
  }
}

export default Footer
