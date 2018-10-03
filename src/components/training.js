import React from 'react';

class Team extends React.Component {
  render() {

    return (


      <section id="training" className="main-section center-align section_padding_100 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              {/* Heading Text  */}
              <div className="section-heading text-uppercasewow bounceIn" data-wow-offset={200} data-wow-duration=".8s" data-wow-delay=".2s">
                <h2>Training</h2>
                <div className="line-shape" />
              </div>
            </div>
          </div>
          {/* Owl Team Slider */}
          <div className="center-align owl-carousel owl-teams">
            {/* Single Team Container */}
            <div className="team-member ">
              <figure>
                {/* Team Image */}
                <img className="responsive-img" src="images/rcca.jpeg" alt="news image" />
                <figcaption className="team_bgcolor">

                </figcaption>
              </figure>
              <div className="name p-b-1">
                {/* Team Member Name and link to his page */}
                <a href>
                  <h5 className="global_color_1 text-center">Training 1</h5>
                </a>
                {/* Team Member Job */}
                <h6 className="text-center">Problem Solving Techniques</h6>

                <p className="text-block">
                  The complaint may contain effects experienced by the customer. Therefore, it is best to specifically define the problem.
                  It is very easy to solve a problem when the problem has been clearly identified with supporting data.
                  Einstein once said, “If the world ends in one-hour, I’d spend 55 minutes to identify the problem and spend 5 minutes to solve it”.
                  The next step is to conduct process elimination to find the root cause.
                  The most common process elimination tools are 8D, 5WHY, Ishikawa diagram and IS/IS NOT, etc.
                  8D Root Cause Corrective Action Plan is a very effective and proven Quality tool that can identify and eliminate ‘WHY’ the non-conformance occurred. Additionally, it helps you to formulate the supply of planned methods to apply in eliminating the likelihood of re-occurrence.
                  This is a reactive plan in comparison to a risk management plan, such as Failure Mode and Effects Analysis (F.M.E.A.).
                </p>
              </div>
            </div>
            {/* Single Team Container */}
            <div className="team-member">
              <figure>
                {/* Team Image */}
                <img src="./images/risk plan.jpeg" alt="img25" />
                <figcaption className="team_bgcolor">

                </figcaption>
              </figure>
              <div className="name p-b-1">
                {/* Team Member Name and link to his page */}
                <a href>
                  <h5 className="global_color_1 text-center">Training 2</h5>
                </a>
                {/* Team Member Job */}
                <h6 className="text-center">Risk Management</h6>

                <p className="text-block">
                  Risk Mitigation planning is proactive. ‘What is the risk?’, ‘Things that you don’t know, you really don’t know’, then, ‘how to mitigate unknown risks?’
                  Understanding possibilities, even though the likelihood may never occur, is the general perception of risk mitigation. Often times, after a risk mitigation plan has been completed, it can produce a less desirable mentality. 'We’ve analyzed and implemented actions to all possibilities'. This mentality leads to a false sense of security, so when a problem outside the plan occurs, reactive planning becomes a necessity. The overall intent of the plan is to reduce the need of using reactive plans.
                </p>
                <br></br>
                <p className="text-block">
                  Reactive plans have a direct correlation with proactive plans. Once again, the philosophy here is to analyze all possible scenarios, have a plan to reduce the likelihood of occurrence, and have plans of action in place for each of the analyzed scenarios in the event that one does occur.
                  There are many risk mitigation tools. One example of these tools is Failure Mode and Effects Analysis (F.M.E.A.). F.M.E.A. is also applied in Process Control Plans. F.M.E.A. has unlimited applications for mitigating risks. It can be applied to mitigating risks in managing customers, design/development activities, manufacturing process controls and after sale services.
                </p>
                <br></br>
                <p className="text-block">
                  Let us know how we may assist you in your risk mitigation effort.
                </p>

              </div>
            </div>
            {/* Single Team Container */}
            <div className="team-member">
              <figure>
                {/* Team Image */}
                <img src="./images/vsm.jpeg" alt="img25" />
                <figcaption className="team_bgcolor">

                </figcaption>
              </figure>
              <div className="name p-b-1 text-center">
                {/* Team Member Name and link to his page */}
                <a href="#">
                  <h5 className="global_color_1">Training3</h5>
                </a>
                {/* Team Member Job */}
                <h6 className="text-center">Process Development</h6>

                <p className="text-block">
                  We believe that process development must include activities that go far beyond designing processes and their interactions. Identifying key performance measurements, and offering a closed-loop system that can facilitate continuous improvement actions are also expected.
                  Process efficiency analysis is comparing Key Performance Indicators (KPI) against set goals. The set goal may consist of a simple target TAKT time (Time taken for a process to transformation inputs to outputs). Measured data requires management and analysis, as explained in our Data management Section.
                  We can develop any process so that captured data is simultaneously linked and visually displayed. At each data capturing point,  the comparisons are available to view in real-time. This is possible for your existing processes and during new process developments. We offer simulation analysis to ensure that new process implementation, or making a change to an existing process, occurs smoothly.
                  Process simulation is no different from the modelling method in the design world. A design engineer models production using a 3D modeling software, analyzing fit, form and function, before releasing the design for manufacture. The same concept of modeling can benefit any business in developing, planning and executing process actions. It is a useful tool for modelling transformation of a conceptual process to reality and ensures doing it right the first time.
                  The benefit of using simulation is not limited to designing level-loaded processes (eliminating bottlenecks), inventory turns analysis (reducing cost of working capital tied up in physical inventory), improving core process efficiency (throughout an analysis), resource analysis and capacity planning when combined with work load projection.
                </p>
                <br></br>
                <p className="text-block">
                Additional benefits are found in Value Stream Mapping (VSM). It is a common example of a tool used in process development. VSM is also known as Continuous Improvement Tool, of which the Toyota Manufacturing System is an excellent example.  VSM can graphically illustrate the process flow of an entire company. Although a graphical illustration can display a problem, VSM has its disadvantages. For instance, VSM is unable to answer the following:
                </p>
                <br></br>
                <p className="text-block">
                There are many manual tasks when analyzing the current state of a process. We’ve all heard the phrase ‘a picture speaks thousand words.’ We take this phrase one step further by designing dynamic process flow in simulation mode; all the above questions and more answers are available at a fingertip.
                </p>
              </div>
            </div>
            
            
            
          </div>
        </div>
      </section>


    );
  }
};
export default Team;