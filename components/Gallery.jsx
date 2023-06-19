import React, { useState } from "react";
import Image from "next/image";
import coding from "/public/assets/coding.avif";
import dance from "/public/assets/dance.avif";
import board from "/public/assets/board.avif";
import movies from "/public/assets/movies.avif";
import restaurant from "/public/assets/restaurant.avif";
import visit from "/public/assets/visit.avif";
import video from "/public/assets/video.avif";
import sleep from "/public/assets/sleep.avif";
import GalleryItems from "./GalleryItems";

const style = {
  container: ``,
};

const Gallery = () => {
  const [img1, setImg1] = useState(false);

  const handleImg1 = () => {
    setImg1(!img1);
  };

  const [img2, setImg2] = useState(false);

  const handleImg2 = () => {
    setImg2(!img2);
  };

  const [img3, setImg3] = useState(false);

  const handleImg3 = () => {
    setImg3(!img3);
  };

  const [img4, setImg4] = useState(false);

  const handleImg4 = () => {
    setImg4(!img4);
  };

  const [img5, setImg5] = useState(false);

  const handleImg5 = () => {
    setImg5(!img5);
  };

  const [img6, setImg6] = useState(false);

  const handleImg6 = () => {
    setImg6(!img6);
  };

  const [img7, setImg7] = useState(false);

  const handleImg7 = () => {
    setImg7(!img7);
  };

  const [img8, setImg8] = useState(false);

  const handleImg8 = () => {
    setImg8(!img8);
  };



  return (
    <div id="gallery" className="w-full lg:h-screen p-2 py-16 bg-[#061424] ">


      <div
        onClick={handleImg1}
        className={img1 ? "w-full flex justify-center align-center" : "hidden"}
      >
        <GalleryItems imageUrl={coding}/>
      </div>

      <div
        onClick={handleImg2}
        className={img2 ? "w-full flex justify-center align-center" : "hidden"}
      >
        <GalleryItems imageUrl={dance}/>
      </div>

      <div
        onClick={handleImg3}
        className={img3 ? "w-full flex justify-center align-center" : "hidden"}
      >
        <GalleryItems imageUrl={board}/>
      </div>

      <div
        onClick={handleImg4}
        className={img4 ? "w-full flex justify-center align-center" : "hidden"}
      >
        <GalleryItems imageUrl={movies}/>
      </div>

      <div
        onClick={handleImg5}
        className={img5 ? "w-full flex justify-center align-center" : "hidden"}
      >
        <GalleryItems imageUrl={restaurant} />
      </div>

      <div
        onClick={handleImg6}
        className={img6 ? "w-full flex justify-center align-center" : "hidden"}
      >
        <GalleryItems imageUrl={video}/>
      </div>

      <div
        onClick={handleImg7}
        className={img7 ? "w-full flex justify-center align-center" : "hidden"}
      >
        <GalleryItems imageUrl={visit}/>
      </div>

      <div
        onClick={handleImg8}
        className={img8 ? "w-full flex justify-center align-center" : "hidden"}
      >
        <GalleryItems imageUrl={sleep}/>
      </div>


      <div
        className={
          img1 || img2 || img3 || img4 || img5 || img6 || img7 || img8
            ? "hidden"
            : "max-w-[1240px] mx-auto flex flex-col justify-center  h-full"
        }
      >
        <h2 className="text-4xl font-bold py-4 text-white">
          Things I like to do
        </h2>

        {/* grid container */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div onClick={handleImg1}>
            <GalleryItems imageUrl={coding} title="Code" />
          </div>

          <div onClick={handleImg2}>
          <GalleryItems imageUrl={dance} title="Dance" />
          </div>
          <div onClick={handleImg3}>
          <GalleryItems imageUrl={board} title="Boardgames" />
          </div>
          <div onClick={handleImg4}>
          <GalleryItems imageUrl={movies} title="Watch Movies" />
          </div>
          <div onClick={handleImg5}>
          <GalleryItems imageUrl={restaurant} title="Restaurants" />
          </div>
          <div onClick={handleImg6}>
          <GalleryItems imageUrl={video} title="Videogames" />
          </div>
          <div onClick={handleImg7}>
          <GalleryItems imageUrl={visit} title="Visit Friends" />
          </div>
          <div onClick={handleImg8}>
          <GalleryItems imageUrl={sleep} title="Sleep" />
          </div>
          
          
          
          
          
          
          
        </div>
      </div>
    </div>
  );
};

export default Gallery;
