import React from 'react'

const Testimonials = () => {
  return (
    <div className="w-full min-h-[500px] py-10 bg-[#f4f5f7] text-black ">
      <div className="text-center mb-10">
        <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-black">
          Testimonials
        </p>
        <p className="text-xl text-[#71717a] mt-3">
          What our customers say about us
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto max-w-[1100px] p-2 ">
        <div className="bg-[#333663] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto p-4">
          <div>
            <p className="text-justify text-white">
              "As a frequent traveler, I've experienced various transportation
              services, but Chimkasimma Transport Services stands out. Their
              commitment to customer satisfaction is evident in the
              well-maintained vehicles, friendly drivers, and efficient booking
              system. Whether it's a short intra-state trip or a long
              inter-state journey, Chimkasimma consistently delivers quality
              service.
            </p>
            <p className="mt-4 text-center font-semibold text-white">
              Patric Stevens
            </p>
          </div>
        </div>
        <div className="bg-[#333663] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto p-4">
          <div>
            <p className="text-justify text-white">
              "I rely on Chimkasimma Transport Services for my business's
              corporate travel needs, and they never disappoint. The
              professionalism and reliability they exhibit make them an ideal
              choice. From coordinating group travel for our team to providing
              executive transportation for clients, Chimkasimma ensures a smooth
              and comfortable ride every time. Their dedication to excellence
              has made them an indispensable partner in our corporate travel
              strategy."
            </p>
            <p className="mt-4 text-center font-semibold text-white">
              Olayinka Adams
            </p>
          </div>
        </div>
        <div className="bg-[#333663] shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto p-4">
          <div>
            <p className="text-justify text-white">
              "Chimkasimma Transport Services has been my go-to choice for
              inter-state travel. The punctuality, professionalism, and comfort
              they provide make every journey a delight. Their modern fleet,
              coupled with courteous staff, ensures a seamless and enjoyable
              travel experience. I highly recommend Chimkasimma for anyone
              seeking reliable and top-notch transportation services. Traveling
              with them is not just a commute; it's a stress-free and enjoyable
              experience.""
            </p>
            <p className="mt-4 text-center font-semibold text-white">
              Akeh Micheal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials