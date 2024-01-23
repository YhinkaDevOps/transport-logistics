import React from "react";

const Gallery = () => {
  return (
    <div className="w-full min-h-[500px] py-10 bg-[#f4f5f7] text-black">
      <div className="text-center mb-10">
        <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-black">
          Gallery
        </p>
      </div>
      <div className="mx-auto max-w-[1100px] my-5 p-4">
        <div div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="p-2 h-52  shadow-lg shadow-[#040c16] group container rounded-md">
            <img src="/assets/picture_1.jpg" alt="" />
          </div>
          <div className="p-2 h-52">
            <img src="/assets/picture_2.jpg" alt="" />
          </div>
          <div className="p-2 h-52">
            <img src="/assets/picture_3.jpg" alt="" />
          </div>
          <div className="p-2 h-52">
            <img src="/assets/picture_4.jpg" alt="" />
          </div>
          <div className="p-2 h-52 ">
            <img src="/assets/picture_5.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
