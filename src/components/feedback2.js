import React from 'react';

class Feedback2 extends React.Component {
  render() {

    return (


   
      <section className="clients-feedback-area bg-white section_padding_100" id="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {/* Heading Text  */}
              <div className="section-heading text-uppercase wow bounceIn" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                <h2>About Us</h2>
                <img className="img-fluid" src="img/bg-img/aqslogo3.png" alt />
                {/* <div className="line-shape" /> */}
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-12">
              <div className="slider slider-for">
                {/* Client Feedback Text  */}

                {/* Client Feedback Text  */}

              </div>
            </div>
            {/* Client Thumbnail Area */}
            <div className="col-12 col-md-12 col-lg-12">
              <div className=" slider-nav slider owl-carousel wow fadeInUp" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
              {/* center-align owl-carousel owl-teams owl-loaded owl-drag      */}
                <div className="client-thumbnail list-jae">
                  {/* <img src="img/bg-img/client-3.jpg" alt /> */}
                  <li>Over 300 company visits in various products and services</li>
                </div>
                <div className="client-thumbnail list-jae">
                <li>Business continuity and longevity with our clients</li>
                </div>
                <div className="client-thumbnail list-jae">
                 
                  <li>100% customer Satisfaction</li>
                </div>
                <div className="client-thumbnail list-jae">
                <li>Engineering/Management disciplined trainers and auditors</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    );
  }
};
export default Feedback2;