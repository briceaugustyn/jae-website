import React from 'react';

class Footer extends React.Component{
    render() {
        
      return (

        <footer className="footer-social-icon text-center section_padding_70">
       
        <div className="footer-text">
          <h2>Adaptive Quality Systems, LLC</h2>
        </div>
        
        <div className="footer-social-icon">
          <a href="linkedin.com/in/canopener"><i className="fa fa-linkedin" aria-hidden="true" /></a>
         
        </div>
        <div className="footer-menu">
          <nav>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
        
        <div className="copyright-text">
          <p>Copyright ©2018, Designed by <a className="global_color_1" href="https://briceaugustyn.com" target="_blank">BA</a>
          </p>
        </div>
      </footer>

);  
}
};
export default Footer;

