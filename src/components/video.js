import React from 'react';

class Video extends React.Component{
    render() {
        
      return (

<section id="video_area" className="section_padding_100">
<div className="container">
  <div className="row justify-content-center">
    <div className="col-12">
      <div className="video text-center wow fadeInUp" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
        <img className="img-fluid" src="img/scr-img/phone-07.png" alt />
        <a className="video_link venobox_video" data-vbtype="video" href="https://www.youtube.com/watch?v=ZLPmgcpi0wI">
          <i className="fa fa-play" />
        </a>
      </div>
    </div>
  </div>
</div>
</section>

);  
}
};
export default Video;