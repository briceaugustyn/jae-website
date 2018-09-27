import React from 'react';

class Subscribe extends React.Component{
    render() {
        
      return (
   
          
                <section className="subscribe-section section_padding_100">
                  <div className="container">
                    <div className="row d-flex justify-content-center">
                      <div className="col-12 col-md-8 text-center">
                        <div className="section-heading">
                          <h2 className="text-white text-uppercase wow bounceIn" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">Subcribe To Newsletters</h2>
                        </div>
                        <p className="text-white wow fadeInUp" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu, lobortis id interdum
                          vitae, interdum eget elit. Curabitur quis urna nulla. Suspendisse potenti. Duis suscipit ultrices
                          maximus.</p>
                      </div>
                    </div>
                    <form className="sub_form">
                      <div className="row d-flex justify-content-center">
                        <div className="col-md-5 wow fadeInUp" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                          <input type="text" className="s-name" required />
                          <label>Enter Your Name</label>
                        </div>
                        <div className="col-md-5 wow fadeInUp" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                          <input type="email" className="s-email" name="email" required />
                          <label>Enter Your Email</label>
                        </div>
                        <div className="col-6 col-md-2 wow fadeInUp" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                          <input type="submit" className="submit" defaultValue="SUBSCRIBE" />
                        </div>
                      </div>
                    </form>
                  </div>
                </section>
       
);  
}
};
export default Subscribe;