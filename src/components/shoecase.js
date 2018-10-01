import React from 'react';

class Shoecase extends React.Component{
    render() {
        
      return (
        <section className="section section-showcase section_padding_100 bg-white" id="intro">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {/* Heading Text  */}
              <div className="section-heading text-uppercase wow bounceIn" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                <h2>About us</h2>
                <div className="line-shape" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 pr-5 pl-5 first-s">
              <div className="section-content-image wow fadeInLeft" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                <img className="wow fadeInLeft img-fluid" src="img/scr-img/j230147.jpg" alt="Phone App" data-wow-duration="0.8s" data-wow-delay="0.5s" />
              </div>
            </div>
            <div className="col-md-6">
              <h3 className="section-heading m-b-25 global_color_1 font-35 wow fadeInRight" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">What is ADQMS?</h3>
              <p className="type-gray-1 m-b-40 wow fadeInRight" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
              Adaptive Quality Systems was founded by Jason Lee. Jason, a born engineer, thrives on generating and implementing innovative ideas. In 2001, Jason earned a double major Bachelors degree in Electrical Engineering and Mechanical engineering from Brunel University, London, UK, one of the top engineering schools in the country. While still working on his degree, he was hired as a developmental engineer for a leading research group in the oil industry. 
              Jason has been working in the Aviation, Space and Defense Industry since 1999, where he has been managing and engineering projects for developing custom-made automatic processing equipments, implementing roust electrical test systems, and developing processes for day-to-day activities and for continuous improvements. Over the past few years, his achievements in the aerospace manufacturing industry have totaled several million dollars worth of cost savings.
              Jason's effort and passion for continued excellence have resulted in the improvement of a product's quality measurement from 5000 nPPM to less than 200 nPPM, an increase in a system's process capacity by 300%, cost reduction of an inspection system by 600%, reduction of customer complaints for an organization by 35%. The list of accomplishments continues to grow with Adaptive Quality Systems.
              Adaptive Quality Systems would like to offer you the same services and satisfactions.
              </p><br />
              <ul className="v-list list-text-icon m-b-20 wow fadeInRight" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                <li className="iconbox iconbox-style-2">
                  <i className="iconbox-icon fa fa-check" />
                  <span className="iconbox-text">Model Design, engineered for you</span>
                </li>
                <li className="iconbox iconbox-style-2">
                  <i className="iconbox-icon fa fa-check" />
                  <span className="iconbox-text">Fully responsive &amp; mobile responsive</span>
                </li>
                <li className="iconbox iconbox-style-2">
                  <i className="iconbox-icon fa fa-check" />
                  <span className="iconbox-text">It very easy customize, your business sucesss</span>
                </li>
              </ul>
              <div className="showcase-link wow fadeInRight" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                <a className="text-uppercase" href="#"> LEARN MORE</a>
              </div>
            </div>
          </div>
          <div className="row align-items-md-center">
            <div className="col-md-6 mt-5">
              <h3 className="section-heading global_color_1 font-35 wow fadeInLeft" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">It's Awesome !</h3>
              <ul className="list-text-icon list-text-icon-accordion" id="accordion" role="tablist" aria-multiselectable="true">
                <li className="iconbox wow fadeInLeft" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                  <a className="iconbox-item-title" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="false" aria-controls="collapse1">
                    <i className="iconbox-icon fa fa-camera" />
                    <span className="iconbox-text">Made with love</span>
                  </a>
                  <div className="collapse show iconbox-item-text" id="collapse1" role="tabpanel" aria-expanded="false">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, lobortis id
                      interdum vitae, interdum eget elit. Curabitur quis urna nulla. Suspendisse potenti.
                    </p>
                  </div>
                </li>
                <li className="iconbox wow fadeInLeft" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                  <a className="iconbox-item-title collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="false" aria-controls="collapse2">
                    <i className="iconbox-icon fa fa-bluetooth-b" />
                    <span className="iconbox-text">Model Design, engineered for you</span>
                  </a>
                  <div className="collapse iconbox-item-text" id="collapse2" role="tabpanel" aria-expanded="false">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, lobortis id
                      interdum vitae, interdum eget elit. Curabitur quis urna nulla. Suspendisse potenti.
                    </p>
                  </div>
                </li>
                <li className="iconbox wow fadeInLeft" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                  <a className="iconbox-item-title collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="false" aria-controls="collapse3">
                    <i className="iconbox-icon fa fa-calendar" />
                    <span className="iconbox-text">Fully Responsive, mobile ready</span>
                  </a>
                  <div className="collapse iconbox-item-text" id="collapse3" role="tabpanel" aria-expanded="false">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, lobortis id
                      interdum vitae, interdum eget elit. Curabitur quis urna nulla. Suspendisse potenti.
                    </p>
                  </div>
                </li>
                <li className="iconbox wow fadeInLeft" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                  <a className="iconbox-item-title collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse4" aria-expanded="false" aria-controls="collapse4">
                    <i className="iconbox-icon fa fa-bell-o" />
                    <span className="iconbox-text">Color Schemes, very easy customize</span>
                  </a>
                  <div className="collapse iconbox-item-text" id="collapse4" role="tabpanel" aria-expanded="false">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, lobortis id
                      interdum vitae, interdum eget elit. Curabitur quis urna nulla. Suspendisse potenti.
                    </p>
                  </div>
                </li>
                <li className="iconbox wow fadeInLeft" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                  <a className="iconbox-item-title collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse5" aria-expanded="false" aria-controls="collapse5">
                    <i className="iconbox-icon fa fa-credit-card" />
                    <span className="iconbox-text">Parallax backgrounds</span>
                  </a>
                  <div className="collapse iconbox-item-text" id="collapse5" role="tabpanel" aria-expanded="false">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, lobortis id
                      interdum vitae, interdum eget elit. Curabitur quis urna nulla. Suspendisse potenti.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-6 pr-5 pl-5 mt-5">
              <div className="section-content-image wow fadeInRight" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                <img className="img-fluid" src="img/scr-img/j230151.jpg" alt="Phone App" />
              </div>
            </div>
          </div>
        </div>
      </section>


       );  
    }
  };
   export default Shoecase;