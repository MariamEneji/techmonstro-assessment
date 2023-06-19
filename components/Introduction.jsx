import React from "react";
import Image from "next/image";

const style = {
  container: `w-full flex justify-center p-2 md:h-screen items-center py-24 z-[3] bg-[#061424]`,
  inner: `max-w-[1240px] m-auto md:grid grid-cols-3 gap-6 `,
  
};

const Introduction = () => {
  return (
   
      <div   className={style.container}>
      <div className={style.inner}>
        <div className='col-span-2  flex flex-col px-8 justify-center text-white' >
          <h2 className='font-bold text-3xl' >A little about me</h2>
          <p className='py-2 '> I started my professional journey as a Mathematics teacher. I loved my job and I love kids. But I wanted to do more, affect more people and solve problems bigger than just me and my immediate surroundings.
            </p>
            <p className='py-2 '>I decided to take the journey into Software engineering and I'm loving it. I'm currently enrolled in AltSchool Africa to broaden my horizon. I work hard and smart and I'm an awesome team player. I look forward to working with you.</p>

            
       
        </div>

        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-100'>
          <Image alt='/' src="/assets/may.jpg" width={200} height={200} className='w-full rounded-xl' />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
