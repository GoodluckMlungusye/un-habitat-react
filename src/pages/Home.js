import React from "react";
import Counter from "../components/Counter"
import Gallery from "../components/FeaturedCourse";
import VideoContainer from "../components/VideoContainer";
import Copyright from "../components/CopyRight";
import Footer from "../components/Footer";

export default function Home() {

    return (
      <section className="home">

      <VideoContainer />

      <div className="hero-info">
          <span>Engage with our community of learners</span>
          <div className="counter-wrapper">
              <div className="counter">
                 <Counter number={41} title="Courses" />
              </div>
              <div className="vertical"></div>
              <div className="counter">
                 <Counter number={12223} title="Users" />
              </div>
          </div>
      </div>

      <div className="portfolio">

          <div className="mainContainer">

              <div className="portfolio-header"><span>Featured Courses</span></div>

              <Gallery/>
      
          </div>
      
      </div>

      <div class="pace-course">
            <div class="pace-container">
                <div class="pace-title">
                    <span>Self-paced courses</span>
                </div>
                <div class="pace-info">
                    <p>
                        Learn platform offers multilingual self-paced e-learning courses,
                        accessible free of charge online and on the moodle mobile app.
                        The courses allow you to learn about a subject based on your 
                        individual needs and interests, and the format allows you to study
                        at your pace, from any location and at any time.
                    </p>
                </div>
            </div>
        </div>

      <div className="webinars">
          <div className="portfolio-header"><span>Technical Webinars</span></div>
          <div className="webinar-wrapper">
              <div className="webinar-img"><img src="/assets/images/extras/webinar.jpg" alt=""/></div>
              <div className="webinar-content">

                  <div className="webinar-desc">
                      <div className="date-block">
                          <span>12</span>Dec
                      </div>
                      <div className="webinar-info">
                          <div><span>Innovative Capacity Building: Instructional Design in a Nutshell: Creating Engaging and Impactful Adult Learning Experiences.</span></div>
                          <div className="location-block">
                          
                                  <div className="svg-wrapper">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                       <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                      </svg>
                                      <span>8:00 am - 5:00 pm</span>
                                  </div>
                           
                            
                                  <div className="svg-wrapper">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                      </svg>
                                      <span>Venice, Italy</span>
                                  </div>
                                
                            
                          </div>
                      </div>
                  </div>

                  <div className="webinar-desc">
                      <div className="date-block">
                          <span>28</span>Sep
                      </div>
                      <div className="webinar-info">
                          <div><span>Innovative Capacity Building: Instructional Design in a Nutshell: Creating Engaging and Impactful Adult Learning Experiences.</span></div>
                          <div className="location-block">
                          
                                  <div className="svg-wrapper">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                       <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                      </svg>
                                      <span>11:00 am - 4:30 pm</span>
                                  </div>
                           
                            
                                  <div className="svg-wrapper">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                      </svg>
                                      <span>Birmingham, UK</span>
                                  </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="social">
          <div className="newsletter">
              <div className="newsletter-content">
                  <span>newsletter</span>
                  <span>Receive news and updates in your inbox</span>
                  <button>Subscribe to our newsletter</button>
              </div>
              <div className="block"></div>
              <div className="media">
                  <h1>Let's keep in touch</h1>
                  <div className="icons">
                      <a href="https://www.facebook.com/UNHABITAT/"><img src="/assets/icons/facebook.png" alt="fb"/></a>
                      <a href="https://linkedin.com/company/un-habitat-united-nation-human-settlements-programme-"><img src="/assets/icons/linkedin.png" alt="in"/></a>
                      <a href="https://twitter.com/UNHABITAT"><img src="/assets/icons/x.png" alt="x"/></a>
                  </div>
              </div>
          </div>
          <div className="mobile">
              <div className="owner">
                  <span>Download MOODLE Mobile APP</span>
              </div>
              <div className="mobile-desc"><span>Access learning at a touch of a button</span></div>
              <div className="mobile-block">
                  <img src="/assets/images/extras/google.png" alt="google"/>
                  <img src="/assets/images/extras/apple.png" alt="apple"/>
              </div>
          </div>
      </div>
      <Footer />
      <Copyright />

  </section>
    )
  }