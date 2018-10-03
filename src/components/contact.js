import React from 'react';

class Contact extends React.Component{
    render() {
        
      return (

<section className="footer-contact-area section_padding_100 clearfix" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {/* Heading Text  */}
              <div className="section-heading text-uppercase wow fadeInUp" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                <h2>Get in touch with us!</h2>
                <div className="line-shape" />
              </div>
              {/* <div className="footer-text wow fadeInUp" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                <p>We'll send you epic weekly blogs, whitepapers and things to make your app startup thrive, all
                  FREE!</p> */}
              {/* </div> */}
              <div className="address-text wow fadeInUp" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                <p><span>Address :</span> Santa Rosa , California</p>
              </div>
              <div className="phone-text wow fadeInUp" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                <p><span>Phone: </span> 1 (888) 759 2786</p>
              </div>
              <div className="email-text wow fadeInUp" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                <p><span>Email: </span>jason.lee@adaptivequalitysystems.com</p>
              </div>
            </div>
            <div className="col-md-6">
              {/* Form Start*/}
              <div className="contact_from">
                <form action="#" method="post">
                  {/* Message Input Area Start */}
                  <div className="contact_input_area">
                    <div className="row">
                      {/* Single Input Area Start */}
                      <div className="col-md-12 wow fadeInRight" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                        <div className="form-group">
                          <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" required />
                        </div>
                      </div>
                      {/* Single Input Area Start */}
                      <div className="col-md-12 wow fadeInRight" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                        <div className="form-group">
                          <input type="email" className="form-control" name="email" id="email" placeholder="Your E-mail" required />
                        </div>
                      </div>
                      {/* Single Input Area Start */}
                      <div className="col-12 wow fadeInRight" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                        <div className="form-group">
                          <textarea name="message" className="form-control" id="message" cols={30} rows={4} placeholder="Your Message *" required defaultValue={""} />
                        </div>
                      </div>
                      {/* Single Input Area Start */}
                      <div className="col-12 wow fadeInRight" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                        <button type="submit" className="btn submit-btn">Send Now</button>
                      </div>
                    </div>
                  </div>
                  {/* Message Input Area End */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


);  
}
};
export default Contact;