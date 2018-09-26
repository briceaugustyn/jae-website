import React from 'react';

class Welcome extends React.Component{
    render() {
        
      return ( 
        <section className="wellcome_area" id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="wellcome-heading  mt-220 text-center">
                <h2>Adaptive Quality Systems</h2>
                <h3 className="mt-220">A</h3>
                <p>Everything You Need. To Start Selling Online Beautifully.Premium landing page to present your
                  app</p>
              </div>
              <div className="welcome-area-link text-center">
                <ul>
                  <li><a href="#">READ MORE</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-none  scr-area d-lg-block d-xl-block text-center">
              <div className="welcome_slides owl-carousel mt-150 text-center">
                <div className="single-shot">
                  <img className="img-fluid" src="img/scr-img/phone-02.png" alt />
                </div>
                <div className="single-shot">
                  <img className="img-fluid" src="img/scr-img/phone-01.png" alt />
                </div>
                <div className="single-shot">
                  <img className="img-fluid" src="img/scr-img/phone-03.png" alt />
                </div>
                <div className="single-shot">
                  <img className="img-fluid" src="img/scr-img/phone-04.png" alt />
                </div>
                <div className="single-shot">
                  <img className="img-fluid" src="img/scr-img/phone-08.png" alt />
                </div>
                <div className="single-shot">
                  <img className="img-fluid" src="img/scr-img/phone-09.png" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        
        );  
    }
  };
   export default Welcome;