
import vid from '../assets/images/course-video.mp4'
import '../assets/css/templatemo-edu-meeting.css'
import '../assets/css/fontawesome.css'
import '../assets/css/flex-slider.css'
import Header from '../components/Header'
import serviceIcon1 from '../assets/images/service-icon-01.png'
import serviceIcon2 from '../assets/images/service-icon-02.png'
import serviceIcon3 from '../assets/images/service-icon-03.png'
import { Link } from 'react-router-dom'




function Home() {
  return (
  
  <>
  <Header />
       <section className="section main-banner " id="top" data-section="section1">
        <video src={vid} autoPlay muted loop id="bg-video" />
       

        <div className="video-overlay header-text ">
          <div className="container ml-10">
            <div className="row">
              <div className="col-lg-12">
                <div className="caption">
                  <h6>Hello Students</h6>
                  <h2>Welcome to Innostart India</h2>
                  <p><em>This is an innovative educational based platform aimed to support and encourage youth of india for
                    innovation and entrepreneurship within educational institutions.<b>This dynamic platform will help to
                      collaborate, ideate, develop, and launch innovative projects and startups , thus contributing to
                      economic growth and societal advancement. </b></em></p>

                  <div className="main-button-red">
                    <div className="scroll-to-section"><Link to='/signin'>Join Now</Link></div>
                  </div>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="services mt-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="owl-service-item owl-carousel flex gap-5  p-2 h-[360px]">

                <div className="item">
                  <div className="icon">
                    <img src={serviceIcon1} alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Resource Repository</h4>
                    <p>The platform will host a comprehensive repository of resources, including educational materials, case
                      studies, business plans, and best practices related to innovation and entrepreneurship.</p>
                  </div>
                </div>

                <div className="item">
                  <div className="icon">
                    <img src={serviceIcon2} alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Pitching and Showcasing</h4>
                    <p>InnoStart India will allow users to pitch their ideas and showcase their projects to a wider
                      audience. This feature can attract potential investors, partners, and customers.</p>
                  </div>
                </div>

                <div className="item">
                  <div className="icon">
                    <img src="" alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Innovation Hub</h4>
                    <p>InnoStart India will establish an online innovation hub where students, educators, and entrepreneurs
                      can come together to share ideas, brainstorm solutions to real-world problems, and initiate projects.
                    </p>
                  </div>
                </div>

                <div className="item">
                  <div className="icon">
                    <img src={serviceIcon3} alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Global Collaboration</h4>
                    <p>InnoStart India will facilitate global collaboration by connecting users with international partners,
                      enabling the exchange of ideas and perspectives on a global scale.
                    </p>
                  </div>
                </div>

                <div className="item">
                  <div className="icon">
                    <img src={serviceIcon3}alt="" />
                  </div>
                  <div className="down-content">
                    <h4>Mentorship and Networking</h4>
                    <p>InnoStart India will facilitate mentorship and networking opportunities by connecting experienced
                      entrepreneurs and industry professionals with aspiring innovators.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

     
  </>
   

 
    
  )
}

export default Home
