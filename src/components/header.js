import React from 'react';

class Header extends React.Component {
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

                  <div class="row">
                    <div class="col-2"><img className="img-fluid" src="img/bg-img/aqslogo.png" alt /></div>
                    <div class="col-6">
                    <a className="navbar-brand" href="index.html">Adaptive Quality Systems, LLC </a>
                  <a className="navbar-brand-subtitle" href="index.html">Audits and Training</a> 
                  </div>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ca-navbar" aria-controls="ca-navbar" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                    
                    <div class="col-4">
                    {/* Menu Area */}
                  <div className="collapse navbar-collapse" id="ca-navbar">
                    <ul className="navbar-nav ml-auto" id="nav">
                      <li className="nav-item active"><a className="nav-link" href="#home">Home</a>
                      </li>
                      <li className="nav-item"><a className="nav-link" href="#intro">About us</a></li>
                      <li className="nav-item"><a className="nav-link" href="#audit">Audits</a></li>
                      <li className="nav-item"><a className="nav-link" href="#training">Training</a></li>
                      {/* <li className="nav-item"><a className="nav-link" href="#features">Features</a>
                      </li>
                      <li className="nav-item"><a className="nav-link" href="#screenshot">Screenshot</a>
                      </li>
                      <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a>
                      </li>
                      <li className="nav-item"><a className="nav-link" href="#team">Team</a>
                      </li>
                      <li className="nav-item"><a className="nav-link" href="#pricing">Pricing</a>
                      </li> */}
                      <li className="nav-item"><a className="nav-link" href="#contact">Contact</a>
                      </li>
                    </ul>
                    {/* <div className="common_button d-xl-none">
                      <a href="#">Sign Up Free</a>
                    </div> */}
                  </div>
                    </div>
                  </div>

                  {/* <div className="single-shot">
                    <img className="img-fluid" src="img/bg-img/aqslogo.png" alt />
                  </div> */}
                  
                  
                </nav>
              </div>
            </div>
            {/* Signup btn */}
            {/* <div className="col-12 col-lg-2">
              <div className="common_button d-none d-xl-block">
                <a href="#">Sign Up Free</a>
              </div>
            </div> */}
          </div>
        </div>
      </header>


    );
  }
};
export default Header;