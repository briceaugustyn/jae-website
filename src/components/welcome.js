import React from 'react';

class Welcome extends React.Component{
    render() {
        
      return ( 
        <section className="wellcome_area" id="home">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="wellcome-heading  mt-220 text-center">
                <h2>Adaptive Quality Systems, LLC</h2>
                <h3 className="mt-220">A</h3>
                <p>Audits and Training</p>
              </div>
              <div className="welcome-area-link text-center">
                <ul>
                  <li><a href="#intro">READ MORE</a></li>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-6 d-none  scr-area d-lg-block d-xl-block text-center">
              <div className="welcome_slides owl-carousel mt-150 text-center">
                <div className="single-shot">
                  <img className="img-fluid" src="img/bg-img/aqslogo.png" alt />
                </div>
                <div className="single-shot">
                  <img className="img-fluid" src="img/bg-img/aqslogo.png" alt />
                </div>
                <div className="single-shot">
                  <img className="img-fluid" src="img/bg-img/aqslogo.png" alt />
                </div>
                <div className="single-shot">
                  <img className="img-fluid" src="img/bg-img/aqslogo.png" alt />
                </div>
                <div className="single-shot">
                  <img className="img-fluid" src="img/bg-img/aqslogo.png" alt />
                </div>
                <div className="single-shot">
                  <img className="img-fluid" src="img/bg-img/aqslogo.png" alt />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>




        
        );  
    }
  };
   export default Welcome;