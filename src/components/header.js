import React from 'react';

class Header extends React.Component{
    render() {
        
      return (
  
        <header className="header_area animated">
        <div className="container-fluid">
          <div className="row align-items-center p-0">
            {/* Menu Area Start */}
            <div className="col-12 col-xl-10 p-0">
              <div className="menu_area">
                <nav className="navbar navbar-expand-xl navbar-light p-0" data-spy="affix" data-offset-top={17}>
                  {/* Logo */}
                  <a className="navbar-brand" href="index.html">APPLE</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ca-navbar" aria-controls="ca-navbar" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                  {/* Menu Area */}
                  <div className="collapse navbar-collapse" id="ca-navbar">
                    <ul className="navbar-nav ml-auto" id="nav">
                      <li className="nav-item active"><a className="nav-link" href="#home">Home</a>
                      </li>
                      <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                      <li className="nav-item"><a className="nav-link" href="#features">Features</a>
                      </li>
                      <li className="nav-item"><a className="nav-link" href="#screenshot">Screenshot</a>
                      </li>
                      <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a>
                      </li>
                      <li className="nav-item"><a className="nav-link" href="#team">Team</a>
                      </li>
                      <li className="nav-item"><a className="nav-link" href="#pricing">Pricing</a>
                      </li>
                      <li className="nav-item"><a className="nav-link" href="#contact">Contact</a>
                      </li>
                    </ul>
                    <div className="common_button d-xl-none">
                      <a href="#">Sign Up Free</a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
            {/* Signup btn */}
            <div className="col-12 col-lg-2">
              <div className="common_button d-none d-xl-block">
                <a href="#">Sign Up Free</a>
              </div>
            </div>
          </div>
        </div>
      </header>

        
        );  
    }
  };
   export default Header;