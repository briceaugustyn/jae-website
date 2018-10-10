
import React from 'react';

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => alert("Request Sent To ADQS"))
      .catch(error => alert(error));

    e.preventDefault();
    console.log("hello")
    this.setState({ name: '' });
    this.setState({ email: '' });
    this.setState({ message: '' });
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
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
              <div className="address-text wow fadeInUp" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                <p><span>Address :</span> Santa Rosa , California</p>
              </div>
              <div className="phone-text wow fadeInUp" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                <p><span>Phone: </span><a href="tel:8887592786">1 (888) 759 2786</a></p>
              </div>
              <div className="email-text wow fadeInUp" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                <p><span>Email: </span><a href="mailto:jason.lee@adaptivequalitysystems.com?subject=Request to ADQS&body=Hello,">jason.lee@adaptivequalitysystems.com</a></p>

              </div>
            </div>
            <div className="col-md-6">

              {/* Form Start*/}
              <div className="contact_from">
                <form action method="post" id="contactForm" name="contactForm" onSubmit={this.handleSubmit}>
                  {/* Message Input Area Start */}
                  <div className="contact_input_area">
                    <div className="row">
                      {/* Single Input Area Start */}
                      <div className="col-md-12 wow fadeInRight" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                        <div className="form-group">
                          <input type="text" className="form-control" name="name" id="name" placeholder="Your Name" required required value={name} onChange={this.handleChange} />
                        </div>
                      </div>
                      {/* Single Input Area Start */}
                      <div className="col-md-12 wow fadeInRight" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                        <div className="form-group">

                          <input type="email" className="form-control" name="email" id="email" placeholder="Your E-mail" value={email} onChange={this.handleChange} />
                          {/* <input type="text" defaultValue size={35} id="contactName" name="name" value={name} onChange={this.handleChange} /> */}
                        </div>
                      </div>
                      {/* Single Input Area Start */}
                      <div className="col-12 wow fadeInRight" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                        <div className="form-group">
                          <textarea name="message" className="form-control" id="message" cols={30} rows={4} placeholder="Your Message *" required defaultValue={""} value={message} onChange={this.handleChange} />
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