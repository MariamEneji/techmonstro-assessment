"use client"
import Contact from '@/components/Contact'
import Form from '@/components/Form'
import Gallery from '@/components/Gallery'
import Introduction from '@/components/Introduction'
import Navbar from '@/components/Navbar'

import Image from 'next/image'


export default function Home() {
  return (
   <div>
    <Navbar />
    <Introduction />
    <Gallery />
    <Contact />
   </div>
  )
}



