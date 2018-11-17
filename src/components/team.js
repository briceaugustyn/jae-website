import React from 'react';

class Team extends React.Component {
    render() {

        return (


            <section id="team" className="main-section center-align section_padding_100 bg-white">
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

                </div>

                <div className="container">
                    {/* <div className="row">
    <div className="col-12 text-center">
      
      <div className="section-heading text-uppercasewow bounceIn" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
        <h2>Our Team</h2>
        <div className="line-shape" />
      </div>
    </div>
  </div> */}


                   
                    <div className="center-align owl-carousel owl-teams">
                       
                        <div className="client-thumbnail list-jae text-center">
                            <li>Over 300 company visits in various products and services</li>
                        </div>

                        <div className="client-thumbnail list-jae text-center">
                            <li>Business continuity and longevity with our clients</li>
                        </div>

                        <div className="client-thumbnail list-jae text-center">

                            <li>100% customer Satisfaction</li>
                        </div>

                    </div>




                    
                </div>
            </section>


        );
    }
};
export default Team;





//   <div className="slider-nav slider owl-carousel wow fadeInUp" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">

//     {/* center-align owl-carousel owl-teams owl-loaded owl-drag      */}
{/* <div className="client-thumbnail list-jae">
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
            </div> */}