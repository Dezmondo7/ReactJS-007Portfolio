import React from "react";
import myImage from "../images/header-image.avif";
import myPhoto from "../images/mypic.jpg";
import './styles.css';

function Home() {

    return  ( <div className="top-image">
    <img src={myImage} height="200px" width="100%" alt="faded orange strip going across the page with the words project work in white in the bottom right corner" />
  {/*New Hero Section*/}
  {/*About me section*/}
  <div class="container my-24 mx-auto md:px-6">

  <section class="mb-32">

    <div class="container mx-auto text-center lg:text-left xl:px-32">
      <div class="flex grid items-center lg:grid-cols-2">
        <div class="mb-12 lg:mb-0">
          <div
            class="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
            <h2 class="mb-8 text-3xl font-bold">Dale Warburton</h2>
            <p class="mb-8 pb-2 text-neutral-500 dark:text-neutral-300 lg:pb-0">
              HTML5, CSS3, JavaScript, Python, JQuery, NodeJS, ReactJS, Bootstrap, Tailwind, Canva, Git. 
            </p>

            <div class="mx-auto mb-8 flex flex-col md:flex-row md:justify-around lg:justify-between">
              <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="mr-2 h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Junior Front-End Engineer
              </p>

              <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="mr-2 h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Creative Designs
              </p>

              <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" class="mr-2 h-5 w-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Latest Technologies
              </p>

            </div>

            <p class="mb-0 text-neutral-500 dark:text-neutral-300">
            I've been interested in technology and gaming as long as I can
              remember,
              the PC and X-box are my favorite gaming consoles. For the past 5 years I
              have worked in IT helping some of the worlds largest brands complete some pretty cool projects by
              supplying them highly experienced contractors. I find enjoyment in picking up new technologies and
              building cool projects.
              <ul><li><br></br></li>
              <li>Level 1 Cybersecurity</li>
              <li>Level 2 Website Software (ITQ)</li>
              <li>Level 2 Using Collaborative Technologies (ITQ)</li>
              <li>Level 2 IT User Skills (Open Systems and Enterprise) (ITQ)</li>
              <li>EdX Front-end Engineer Bootcamp Alumni</li>
              </ul>
            </p>
          </div>
        </div>

        <div>
          <img src="https://image.lexica.art/full_jpg/c3a0a0df-93d4-43de-9ac0-071fbfe74686"
            class="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image of avatar" />
        </div>
      </div>
    </div>
  
  </section>

</div>


{/*Bottom two images*/}
<div class="container mx-auto py-9 md:py-12 px-4 md:px-6">

<div class="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
  <div class="flex flex-col md:flex-row items-strech justify-between bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
    <div class="flex flex-col justify-center md:w-1/2">
      <h1 class="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">Best Deal</h1>
      <p class="text-base lg:text-xl text-gray-800 dark:text-white mt-2">Save upto <span class="font-bold">50%</span></p>
    </div>
    <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
      <img src="https://i.ibb.co/J2BtZdg/Rectangle-56-1.png" alt="" class="" />
    </div>
  </div>
  <div class="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
    <div class="flex flex-col justify-center">
      <h1 class="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">Game Console</h1>
      <p class="text-base lg:text-xl text-gray-800 dark:text-white">Save Upto <span class="font-bold">30%</span></p>
    </div>
    <div class="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
      <img src="https://i.ibb.co/rGfP7mp/Rectangle-59-1.png" alt="" class="md:w-20 md:h-20 lg:w-full lg:h-full" />
    </div>
  </div>
</div>
</div>
</div>

    );
}

export default Home;
