import React from 'react';

class Special extends React.Component{
    render() {
        
      return (


<section className="special-area bg-white section_padding_100" id="about">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Section Heading Area */}
              <div className="section-heading text-center text-uppercase wow bounceIn" data-wow-offset={150} data-wow-duration=".8s" data-wow-delay=".2s">
                <h2>Why Is It Special</h2>
                <div className="line-shape" />
              </div>
            </div>
          </div>
          <div className="row">
            {/* Single Special Area */}
            <div className="col-12 col-md-4">
              <div className="single-special text-center wow fadeInLeft" data-wow-offset={20} data-wow-duration=".8s" data-wow-delay=".2s">
                <div className="single-icon">
                  <i className="ti-mobile" aria-hidden="true" />
                </div>
                <h4>Easy to use</h4>
                <p>We build pretty complex tools and this allows us to take designs and turn them into functional
                  quickly and easily</p>
              </div>
            </div>
            {/* Single Special Area */}
            <div className="col-12 col-md-4">
              <div className="single-special single-special-two text-center  wow fadeInUp" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                <div className="single-icon">
                  <i className="ti-ruler-pencil" aria-hidden="true" />
                </div>
                <h4>Powerful Design</h4>
                <p>We build pretty complex tools and this allows us to take designs and turn them into functional
                  quickly and easily</p>
              </div>
            </div>
            {/* Single Special Area */}
            <div className="col-12 col-md-4">
              <div className="single-special text-center wow fadeInRight" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                <div className="single-icon">
                  <i className="ti-settings" aria-hidden="true" />
                </div>
                <h4>Customizability</h4>
                <p>We build pretty complex tools and this allows us to take designs and turn them into functional
                  quickly and easily</p>
              </div>
            </div>
          </div>
        </div>
      </section>

);  
}
};
export default Special;