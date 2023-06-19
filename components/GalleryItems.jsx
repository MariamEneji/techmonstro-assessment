import React from "react";
import Image from "next/image";
import { useState } from "react";

const GalleryItems = ({ imageUrl, title }) => {
 

  return (

    
    <div
      
      className=
          "p-2 shadow-xl shadow-gray-100 rounded-xl hover:scale-105 ease-in duration-300 group-hover:opacity-10 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] "
      
    >
    

      <Image
        alt="/"
        src={imageUrl}
        width="700"
        height="180"
        className="rounded-xl"
      />

      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <p className="pb-4 pt-2 text-white text-center">{title}</p>
      </div>

      <script src="Gallery.jsx"></script>
    </div>
  );
};

export default GalleryItems;
