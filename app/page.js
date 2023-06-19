"use client"
import Contact from '@/components/Contact'
import Form from '@/components/Form'
import Gallery from '@/components/Gallery'
import Introduction from '@/components/Introduction'
import Navbar from '@/components/Navbar'
import Script from 'next/script'

import Image from 'next/image'


export default function Home() {
  return (
   <div>
    <Script src="https://third-party-script.js"></Script>
    <Navbar />
    <Introduction />
    <Gallery />
    <Contact />
   </div>
  )
}



