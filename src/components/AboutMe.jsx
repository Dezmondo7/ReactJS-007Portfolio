import React from 'react';
import '../components/AboutMe.css';


  function AboutMe() {

    return (
      <div className="container1">
        <div className="container-wide aboutme-bckgrnd" id="cont-about">
          <div className="container1 my-24 mx-auto md:px-6">

            <section className="mb-32">

              <div className="container1 mx-auto text-center lg:text-left xl:px-32">
                <div className="flex grid items-center lg:grid-cols-2">
                  <div className="mb-12 lg:mb-0">
                    <div
                      className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                      <h2 className="mb-8 text-3xl font-bold">Dale</h2>
                      <i className="fa-brands fa-html5 fa-2xl"></i><i className="fa-brands fa-css3-alt fa-2xl"></i><i className="fa-brands fa-js fa-2xl"></i><i className="fa-brands fa-python fa-2xl"></i><i className="fa-brands fa-node-js fa-2xl"></i><i className="fa-brands fa-bootstrap fa-2xl"></i><i className="fa-brands fa-react fa-2xl"></i>
                      <p className="mb-8 pb-2 text-neutral-500 dark:text-neutral-300 lg:pb-0">
                        HTML5, CSS3, JavaScript, ES6, Python, JQuery, NodeJS, ReactJS, Bootstrap, Tailwind CSS, Canva, Kanban, Agile, Git.
                      </p>


                      <div className="mx-auto mb-8 flex flex-col md:flex-row md:justify-around lg:justify-between">
                        <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" className="mr-2 h-5 w-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Web Designer
                        </p>

                        <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" className="mr-2 h-5 w-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Web Developer
                        </p>

                        <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                            stroke="currentColor" className="mr-2 h-5 w-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Software Engineer
                        </p>

                      </div>

                      <p className="mb-0 text-neutral-500 dark:text-neutral-300">
                        I am a creative Web Designer, Developer and Software Engineer who uses the latest technologies and frameworks to create aesthetically pleasing, responsive websites with a mobile first approach that work seemlessly across Desktop and Tablets.
                        <ul><li><br></br></li>
                          <li>SERVICES</li>
                          <li>Logo Design</li>
                          <li>Web Design & Development</li>
                          <li>Copywriting & Content Creation</li>
                          <br></br>

                          <li>QUALIFICATIONS</li>
                          <li>98% in Front-End Engineering (Web Development)</li>
                          <li>BA (Hons) 2:1 Journalism University of Central Lancs </li>
                        </ul>
                      </p>
                      <button type="button" className="btn btn-primary btn-lg" href="contact-location">Contact Me</button>
                    </div>
                  </div>

                  <div>
                    <img src="https://image.lexica.art/full_jpg/c3a0a0df-93d4-43de-9ac0-071fbfe74686"
                      className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image of avatar" />
                  </div>
                </div>
              </div>


            </section>

          </div>
        </div>
      </div>
    );
  }

export default AboutMe 