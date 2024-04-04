import React from "react";
import myImage from "../images/header-image.avif";
import './styles.css';

function Home() {

  return (
    <div className="top-image">
      <img src={myImage} height="200px" width="100%" alt="faded orange strip going across the page with the words project work in white in the bottom right corner" />
      {/*Hero Section*/}
      <section className="mb-40">
        <div className="px-6 py-12 text-center md:px-12 lg:text-left">
          <div className="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
            <div className="grid items-center lg:grid-cols-2">
              <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                <div
                  className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                  <h1 className="mt-2 mb-16 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
                    Welcome to my  <br /><span className="text-primary">ReactJS Portfolio</span>
                  </h1>
                  <a className="mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
                    data-te-ripple-init data-te-ripple-color="light" href="https://docs.google.com/document/d/198GZtFk6SS9Jpw8MPSsGV7cVyiEjQ_J-BoCSKwF93-c/edit?usp=sharing" target="_blank" role="button">&nbsp;&nbsp;View CV&nbsp;&nbsp;</a>
                </div>
              </div>
              <div className="md:mb-12 lg:mb-0">
                <img src="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="Laptop on a desk with earphones and mobile phone" />
              </div>
            </div>
          </div>
        </div>

      </section>

      {/*About me section*/}
      <div className="container my-24 mx-auto md:px-6">

        <section className="mb-32">

          <div className="container mx-auto text-center lg:text-left xl:px-32">
            <div className="flex grid items-center lg:grid-cols-2">
              <div className="mb-12 lg:mb-0">
                <div
                  className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                  <h2 className="mb-8 text-3xl font-bold">Dale Warburton</h2>
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
                      Junior Front-End Engineer
                    </p>

                    <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-2 h-5 w-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Creative Designs
                    </p>

                    <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="mr-2 h-5 w-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Latest Technologies
                    </p>

                  </div>

                  <p className="mb-0 text-neutral-500 dark:text-neutral-300">
                    I've been interested in technology and gaming as long as I can
                    remember,
                    the PC and X-box are my favourite gaming consoles. My creativity & attention to detail allows me to develop wireframes into visually appealing responsive designs written with clean code. I find enjoyment in picking up new technologies and
                    building cool projects.
                    <ul><li><br></br></li>
                      <li>Level 1 Cybersecurity</li>
                      <li>Level 2 Website Software (ITQ)</li>
                      <li>Level 2 Using Collaborative Technologies (ITQ)</li>
                      <li>Level 2 IT User Skills (Open Systems and Enterprise) (ITQ)</li>
                      <li>2024 Ed-X Front-End Engineer Bootcamp Alumni</li>
                      <li>BA (Hons) 2:1 Journalism University of Central Lancs </li>
                    </ul>
                  </p>
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


      {/*Bottom two images*/}
      <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">

        <div className="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
          <div className="flex flex-col md:flex-row items-strech justify-between bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
            <div className="flex flex-col justify-center md:w-1/2">
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">Best Deal</h1>
              <p className="text-base lg:text-xl text-gray-800 dark:text-white mt-2">Save upto <span className="font-bold">50%</span></p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
              <img src="https://i.ibb.co/J2BtZdg/Rectangle-56-1.png" alt="" className="" />
            </div>
          </div>
          <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">Game Console</h1>
              <p className="text-base lg:text-xl text-gray-800 dark:text-white">Save Upto <span className="font-bold">30%</span></p>
            </div>
            <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
              <img src="https://i.ibb.co/rGfP7mp/Rectangle-59-1.png" alt="" className="md:w-20 md:h-20 lg:w-full lg:h-full" />
            </div>
          </div>
        </div>
      </div>
      {/* Desireables section about me */}
      <div className="container my-24 mx-auto md:px-6" id="des-cont">

        <section className="mb-32 text-center">
          <div className="flex justify-center">
            <div className="max-w-[700px] text-center">
              {/*<h2 className="mb-6 text-center text-3xl font-bold">
                Why is it so<u className="text-primary dark:text-primary-400">
                  great?</u>
              </h2>
              <p className="mb-16 text-neutral-500 dark:text-neutral-300">
                Minus fuga aliquid vero facere ducimus quos, quisquam nemo?
                Molestias ullam provident vitae error aliquam dolorum temporibus?
                Doloremque, quasi
  </p>*/}
            </div>
          </div>

          <div className="grid gap-x-6 md:grid-cols-1 lg:grid-cols-3 lg:gap-x-12">
            <div className="mb-12 lg:mb-0">
              <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.03v13m0-13c-2.819-.831-4.715-1.076-8.029-1.023A.99.99 0 0 0 3 6v11c0 .563.466 1.014 1.03 1.007 3.122-.043 5.018.212 7.97 1.023m0-13c2.819-.831 4.715-1.076 8.029-1.023A.99.99 0 0 1 21 6v11c0 .563-.466 1.014-1.03 1.007-3.122-.043-5.018.212-7.97 1.023" />
                </svg>
              </div>
              <h5 className="mb-4 text-lg font-bold">Design</h5>
              <p className="text-neutral-500 dark:text-neutral-300">
                I value simple design patterns & use clean <br /> code to create attractive design features.
              </p>
              <br />
              <h5 className="mb-4 text-lg font-bold">Things I enjoy designing</h5>
              <p className="text-neutral-500 dark:text-neutral-300">
                UI, UX, Web & Apps.
              </p>
              <h5 className="mb-4 text-lg font-bold">Design tools</h5>
              <p className="text-neutral-500 dark:text-neutral-300">Canva<br />
                Figma <br />
                Pen & Paper</p>
            </div>

            <div className="mb-12 lg:mb-0">
              <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14" />
                </svg>

              </div>
              <h5 className="mb-4 text-lg font-bold">Front End Developer</h5>
              <p className="text-neutral-500 dark:text-neutral-300">
                I like to code things from scratch and enjoy <br /> using the latest tech to create visually <br />appealing mobile & web apps.
              </p>
              <h5 className="mb-4 text-lg font-bold">Languages I speak</h5>
              <p className="text-neutral-500 dark:text-neutral-300">
                HTML5, CSS3, JavaScript, Git
              </p>
              <h5 className="mb-4 text-lg font-bold">Dev Tools</h5>
              <p className="text-neutral-500 dark:text-neutral-300">ReactJS<br />
                Bootstrap <br />
                Tailwind CSS <br />
                Github <br />
                VS Code <br /> </p>

            </div>

            <div className="mb-12 md:mb-0">
              <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
                <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M5.005 10.19a1 1 0 0 1 1 1v.233l5.998 3.464L18 11.423v-.232a1 1 0 1 1 2 0V12a1 1 0 0 1-.5.866l-6.997 4.042a1 1 0 0 1-1 0l-6.998-4.042a1 1 0 0 1-.5-.866v-.81a1 1 0 0 1 1-1ZM5 15.15a1 1 0 0 1 1 1v.232l5.997 3.464 5.998-3.464v-.232a1 1 0 1 1 2 0v.81a1 1 0 0 1-.5.865l-6.998 4.042a1 1 0 0 1-1 0L4.5 17.824a1 1 0 0 1-.5-.866v-.81a1 1 0 0 1 1-1Z" clip-rule="evenodd" />
                  <path d="M12.503 2.134a1 1 0 0 0-1 0L4.501 6.17A1 1 0 0 0 4.5 7.902l7.002 4.047a1 1 0 0 0 1 0l6.998-4.04a1 1 0 0 0 0-1.732l-6.997-4.042Z" />
                </svg>
              </div>

              <h5 className="mb-4 text-lg font-bold">Passion</h5>
              <p className="text-neutral-500 dark:text-neutral-300">
                I genuinly love turning ideas into aesthetically <br /> pleasing designs, I genuinly care for people < br /> 
                and enjoy helping them on their craft.
              </p>

              <h5 className="mb-4 text-lg font-bold">Work I enjoy</h5>
              <p className="text-neutral-500 dark:text-neutral-300">
                Mobile & Web Apps, Front-End
              </p>
              <h5 className="mb-4 text-lg font-bold">Experience</h5>
              <p className="text-neutral-500 dark:text-neutral-300">5+ Years in Technology<br />
                Designer <br />
                Artist <br />
                Creativity <br />
              </p>  
            </div>

            {/*<div className="mb-12 md:mb-0">
              <div className="mb-6 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" className="h-6 w-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                </svg>
              </div>
              <h5 className="mb-4 text-lg font-bold">Live analytics</h5>
              <p className="text-neutral-500 dark:text-neutral-300">
                Illum doloremque ea, blanditiis sed dolor laborum praesentium
                maxime sint, consectetur atque ipsum ab adipisci
              </p>
</div>*/}
          </div>
        </section>

      </div>


    </div>



  );
}

export default Home;
