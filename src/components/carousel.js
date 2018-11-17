import React from 'react';




class Carousel extends React.Component {
  render() {

    return (


      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-caption">
              <h3>First slide label  1</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-caption">
              <h3>Second slide label  2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

          </div>
          <div className="carousel-item">
            <div className="carousel-caption">
              <h3>Third slide label3</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>

      // <div id="carousel-example-captions" className="carousel slide" data-ride="carousel">
      // <ol className="carousel-indicators">
      //   <li data-target="#carousel-example-captions" data-slide-to={0} className />
      //   <li data-target="#carousel-example-captions" data-slide-to={1} className="active" />
      //   <li data-target="#carousel-example-captions" data-slide-to={2} className />
      // </ol>
      // <div className="carousel-inner">
      //   <div className="item">
      //     <div className="carousel-caption">
      //       <h3>First slide label  1</h3>
      //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      //     </div>
      //   </div>
      //   <div className="item active">
      //     <div className="carousel-caption">
      //       <h3>Second slide label  2</h3>
      //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      //     </div>
      //   </div>
      //   <div className="item">
      //     <div className="carousel-caption">
      //       <h3>Third slide label3</h3>
      //       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      //     </div>
      //   </div>
      // </div>
      // <a className="left carousel-control" href="#carousel-example-captions" role="button" data-slide="prev">
      //   <span className="glyphicon glyphicon-chevron-left" />
      // </a>
      // <a className="right carousel-control" href="#carousel-example-captions" role="button" data-slide="next">
      //   <span className="glyphicon glyphicon-chevron-right" />
      // </a>
      // </div>

    );
  }
};
export default Carousel;