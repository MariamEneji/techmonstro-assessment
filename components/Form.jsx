import Link from 'next/link'

import React from 'react'


const Form = () => {





  return (


    <div id='contact' className='max-w-[1240px] m-auto p-4 h-screen bg-[#061424]'>
    <h1 className='text-2xk font-bold text-center p-4 text-white'>Wanna meet up? Hit Me</h1>
    <form className='max-w-[600px] m-auto'>
        <div className='grid grid-cols-2 gap-2' >
            <input className='border shadow-lg p-3' type="text" placeholder='Name' />
            <input className='border shadow-lg p-3' type="email" placeholder='Email'/>
        </div>

        <input className='border shadow-lg p-3 w-full my-4' type="text" placeholder='Subject' />
        <textarea className='border shadow-lg p-3 w-full' name="" id="" cols="30" rows="10" placeholder='Message'></textarea>

       <Link href='/success'>
       <button className='border shadow-lg p-3 w-full mt-2 text-white' typeof='submit' >Submit</button>
       </Link>
        
        
        
        
    </form>
</div>
  )
}

export default Form