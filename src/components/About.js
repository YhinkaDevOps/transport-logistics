import React from "react";
// import styles from './about.module.css'
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full min-h-[500px] py-10 bg-[#56ccf2] text-black">
      <div className="text-center mb-10">
        <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-black">
          About
        </p>
      </div>

      <div className="mx-auto max-w-[1100px] w-full grid sm:grid-cols-2 gap-8 px-4">
        <div className="text-center shadow-md rounded-tl-[150px] rounded-tr-[50px]">
          <Image
            src="/assets/Chimkas-image.jpg" // Path to the image in the `public` directory
            alt="My Image"
            width={600} // Set the desired width
            height={200} // Set the desired height
          />
        </div>
        <div className="flex flex-col gap-2 p-4 text-justify">
          <p className="animate__animated animate__zoomIn">
            Chimkasimma Transport Services is a leading road transport provider
            dedicated to fulfilling the transportation needs of individuals both
            within and outside Enugu State.
          </p>
          <p className="animate__animated animate__zoomIn">
            Having a steadfast commitment to delivering reliable mobility
            services to commuters nationwide, our company boasts a dynamic,
            multicultural workforce skillfully managed by a team of qualified
            professionals with extensive expertise in diverse fields.
          </p>
          <p className="animate__animated animate__zoomIn">
            Experiencing rapid growth in operational reach, boasting an
            impressive fleet, prioritizing top-notch customer service, and
            leveraging technology as a key operational driver, Chimkasimma
            Transport Services is poised to consistently offer outstanding
            services at competitive rates to commuters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
