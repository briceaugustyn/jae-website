import React from 'react';

class Feature extends React.Component{
    render() {
        
      return (

<section id="features" data-scroll-index={1} className="main-section center-align section_padding_100">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {/* Heading Text  */}
              <div className="section-heading text-uppercase  wow bounceIn" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                <h2 className="text-white">Features</h2>
                <div className="line-shape" />
              </div>
            </div>
          </div>
          <div className="row p-t-2">
            <div className="col-12 col-lg-4 feature-left">
              <div className="single-feature p-tb-2  wow fadeInLeft" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                <a className="hoverable feature-link same-height active" data-owl-item={0}>
                  {/*Title */}
                  <div>
                    <h5>Super Fast</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, laudantium</p>
                  </div>
                  {/* Icon */}
                  <div>
                    <i className="fa fa-rocket" aria-hidden="true" />
                  </div>
                </a>
              </div>
              <div className="single-feature p-tb-2  wow fadeInLeft" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                <a className="hoverable feature-link same-height" data-owl-item={1}>
                  {/* Title */}
                  <div>
                    <h5>Unlimited Features</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, laudantium</p>
                  </div>
                  {/* Icon */}
                  <div>
                    <i className="fa fa-lightbulb-o" aria-hidden="true" />
                  </div>
                </a>
              </div>
              <div className="single-feature p-tb-2  wow fadeInLeft" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                <a className="hoverable feature-link same-height" data-owl-item={2}>
                  {/* Title */}
                  <div>
                    <h5>User Friendly</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, laudantium</p>
                  </div>
                  {/* Icon*/}
                  <div>
                    <i className="fa fa-heartbeat" aria-hidden="true" />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-12 col-lg-4 images-slider">
              {/*Features Images*/}
              <div className="owl-carousel owl-features">
                <div>
                  <img className="responsive-img" src="img/scr-img/phone-04.png" alt="image of the iPhone app" />
                </div>
                <div>
                  <img className="img-fluid" src="img/scr-img/phone-02.png" alt="image of the iPhone app" />
                </div>
                <div>
                  <img className="img-fluid" src="img/scr-img/phone-03.png" alt="image of the iPhone app" />
                </div>
                <div>
                  <img className="img-fluid" src="img/scr-img/phone-04.png" alt="image of the iPhone app" />
                </div>
                <div>
                  <img className="img-fluid" src="img/scr-img/phone-08.png" alt="image of the iPhone app" />
                </div>
                <div>
                  <img className="img-fluid" src="img/scr-img/phone-09.png" alt="image of the iPhone app" />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 feature-right">
              <div className="single-feature p-tb-2 wow fadeInRight" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                <a className="hoverable feature-link same-height" data-owl-item={3}>
                  {/* Icon */}
                  <div>
                    <i className="fa fa-eye" aria-hidden="true" />
                  </div>
                  <div>
                    {/* Title */}
                    <h5>Retina Ready</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, laudantium</p>
                  </div>
                </a>
              </div>
              <div className="single-feature p-tb-2 wow fadeInRight" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                <a className="hoverable feature-link same-height" data-owl-item={4}>
                  {/* Icon */}
                  <div>
                    <i className="fa fa-code" aria-hidden="true" />
                  </div>
                  <div>
                    {/* Title */}
                    <h5>Well Documented</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, laudantium</p>
                  </div>
                </a>
              </div>
              <div className="single-feature p-tb-2 wow fadeInRight" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                <a className="hoverable feature-link same-height" data-owl-item={5}>
                  {/* Icon */}
                  <div>
                    <i className="fa fa-superpowers" aria-hidden="true" />
                  </div>
                  <div>
                    {/* Title */}
                    <h5>Super Powerful</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, laudantium.</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


);  
}
};
export default Feature;