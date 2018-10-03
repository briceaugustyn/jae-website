import React from 'react';

class Footer extends React.Component{
    render() {
        
      return (

        <footer className="footer-social-icon text-center section_padding_70">
       
        <div className="footer-text">
          <h2>ADQMS</h2>
        </div>
        
        <div className="footer-social-icon">
          <a href="linkedin.com/in/canopener"><i className="fa fa-linkedin" aria-hidden="true" /></a>
         
        </div>
        <div className="footer-menu">
          <nav>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
        
        <div className="copyright-text">
          <p>Copyright ©2018, <a className="global_color_1" href="https://briceaugustyn.com" target="_blank">Brice Augustyn</a>
          </p>
        </div>
      </footer>

);  
}
};
export default Footer;

