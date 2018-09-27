import React from 'react';

class News extends React.Component{
    render() {
        
      return (
<div className="blog-modal modal fade" id="blogModal" tabIndex={-1} role="dialog" aria-hidden="true">
<div className="modal-dialog" role="document">
  <div className="modal-content">
    <div className="container">
      <div className="modal-header">
        <button className="btn-close" type="button" data-dismiss="modal" aria-label="Close">
          <span>Close</span>
        </button>
      </div>
      <div className="modal-body">
        <div className="article-wrapper article article-2">
          <h3 className="article-title">7 Questions to Find Out What Clients Really Want</h3>
          <div className="article-info m-b-25">
            <span>by</span>
            <a className="author" href="#">John Doe</a>
            <span className="date">August 28, 2018</span>
            <ul className="subject">
              <li>
                <a href="#">Web Design</a>
              </li>
            </ul>
            <a className="totals-comments" href="#">1 Comments</a>
          </div>
          <div className="article-image">
            <img className="img-fluid" src="img/blog/blog-single-01.jpeg" alt="#" />
          </div>
          <p className="text-block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et tempus quam. Aliquam eu
            tellus urna. Pellentesque consectetur et nisl vel pulvinar. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; Donec nec condimentum ipsum. Donec
            sollicitudin gravida felis. Aliquam eu augue viverra, tempus tellus in, dictum orci.
            Praesent volutpat porta vehicula. Pellentesque a mauris sit amet diam vehicula tincidunt eu
            ac ante. Phasellus in metus lectus. Duis scelerisque velit eget nisl tempor aliquet.
            Curabitur est risus, facilisis non
          </p>
          <blockquote className="article-blockquote">
            <p className="text-block">Cras auctor bibendum lorem vel sodales. Nulla commodo velit ac turpis
              ullamcorper placerat.</p>
            <span className="text-block text-grey">JOHN SMITH, ENVATO</span>
          </blockquote>
          <p className="text-block">Cras et urna ipsum. Fusce eget libero nibh. Vivamus a sapien libero. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam
            tristique ex at nisl fringilla vestibulum. Nam sit amet laoreet turpis. Vestibulum consequat
            risus id quam facilisis, at vulputate urna tristique.</p>
          <div className="article-footer m-b-55">
            <div className="article-tags">
              <ul className="tags">
                <li className="tag">
                  <a href="#">website</a>
                </li>
                <li className="tag">
                  <a href="#">onepage</a>
                </li>
                <li className="tag">
                  <a href="#">profesional</a>
                </li>
              </ul>
            </div>
            <div className="article-share">
              <span>SHARE</span>
              <ul className="h-list">
                <li className="social-item">
                  <a className="fa fa-facebook" href="#" data-toggle="tooltip" title="Facebook" />
                </li>
                <li className="social-item">
                  <a className="fa fa-twitter" href="#" data-toggle="tooltip" title="Twitter" />
                </li>
                <li className="social-item">
                  <a className="fa fa-google-plus" href="#" data-toggle="tooltip" title="Google Plus" />
                </li>
                <li className="social-item">
                  <a className="fa fa-linkedin" href="#" data-toggle="tooltip" title="Linkedin" />
                </li>
                <li className="social-item">
                  <a className="fa fa-plus" href="#" data-toggle="tooltip" title="More" />
                </li>
              </ul>
            </div>
          </div>
          <div className="article-author m-b-60">
            <div className="author-box">
              <div className="avatar">
                <a href="#">
                  <img src="img/blog/avatar-04.jpeg" alt="post author" />
                </a>
              </div>
              <div className="content">
                <h4 className="author-title">
                  <a className="text-black" href="#">John Smith</a>
                </h4>
                <p className="author-content">Fusce interdum lorem quis sodales porttitor. Cras nulla
                  massa, dictum sit amet metus ac, convallis posuere tortor. Donec non mi sit amet
                  odio maximus commodo a mattis enim.</p>
              </div>
            </div>
          </div>
          <div className="article-comments m-b-70">
            <h4 className="block-title">3 Comments</h4>
            <ul className="comments-list">
              <li className="comments-has-child">
                <div className="comments-item">
                  <div className="author-image">
                    <a href="#">
                      <img src="img/blog/avatar-01.jpeg" alt="author image" />
                    </a>
                  </div>
                  <div className="comment-content">
                    <p className="content">Phasellus rutrum sollicitudin nisl, at egestas tortor
                      sagittis eget. Nulla tincidunt felis metus, in vehicula lectus porta a.
                      Sed felis erat, sodales in turpis eu.</p>
                    <p className="author-info">
                      <a className="name" href="#">ARTHUR REYES</a>
                      <span>- JUNE 25, 2018</span>
                      <a className="reply-link" href="#">
                        <i className="fa fa-share" />
                        <span>REPLY</span>
                      </a>
                    </p>
                  </div>
                </div>
                <ul className="comments-child-list">
                  <li>
                    <div className="comments-item">
                      <div className="author-image">
                        <a href="#">
                          <img src="img/blog/avatar-03.jpg" alt="author image" />
                        </a>
                      </div>
                      <div className="comment-content">
                        <p className="content">Nullam ipsum urna, dapibus sed justo sed,
                          imperdiet malesuada commodo</p>
                        <p className="author-info">
                          <a className="name" href="#">SHIRLEY CAMPBELL</a>
                          <span>- JUNE 25, 2018</span>
                          <a className="reply-link" href="#">
                            <i className="fa fa-share" />
                            <span>REPLY</span>
                          </a>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li>
                <div className="comments-item">
                  <div className="author-image">
                    <a href="#">
                      <img src="img/blog/avatar-02.jpeg" alt="author image" />
                    </a>
                  </div>
                  <div className="comment-content">
                    <p className="content">Donec sollicitudin nisi sed eros elementum, non
                      vestibulum quam convallis. Curabitur bibendum magna at nisl hendrerit,
                      et tempus metus facilisis. Praesent augue tellus, euismod id posuere
                      eget, gravida id dolor
                    </p>
                    <p className="author-info">
                      <a className="name" href="#">SARA ELLIS</a>
                      <span>- MAY 25, 2018</span>
                      <a className="reply-link" href="#">
                        <i className="fa fa-share" />
                        <span>REPLY</span>
                      </a>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="article-leave-comment">
            <h4 className="block-title">Leave a Comment</h4>
            <p className="text-block">You must be logged in to post a comment.</p>
            <div className="row no-gutters">
              <div className="col-12 input-item m-b-10">
                <textarea className="au-input au-input-text" placeholder="COMMENT..." style={{height: 150}} defaultValue={""} />
              </div>
            </div>
            <div className="row no-gutters au-input-group">
              <div className="col-lg-4 input-item">
                <input className="au-input" type="text" placeholder="NAME *" />
              </div>
              <div className="col-lg-4 input-item">
                <input className="au-input" type="text" placeholder="EMAIL *" />
              </div>
              <div className="col-lg-4 input-item">
                <input className="au-input" type="text" placeholder="WEBSITE" />
              </div>
            </div>
            <div className="row no-gutters">
              <div className="col-12 input-item m-t-25">
                <input className="btn-send-massage" type="submit" defaultValue="POST COMMENT" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

);  
}
};
export default News;