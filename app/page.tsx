import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Home({}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
    scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#caa969]">

            <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
   
            <a href="start"><img className='relative h-96 mx-auto object-cover hover:scale-110 duration-300 ease-out' 
              src="/nk_mock_01.png"
              alt="namka mockup" /></a>

        <div className='z-20'>

          <h1 className="doc_h1 tracking-[4px]">Documentation</h1>

          <h2 className='doc_h4 text-base'>
              Namka <span className='text-white animate-pulse'>crypto</span> draw</h2>
        
            <div className='pt-5'>
                <Link href="start"><button className='heroButton'>Docs</button></Link>
                <Link href="#"><button className='heroButton'>About</button></Link>
                <Link href="#"><button className='heroButton'>Contact</button></Link>
                
            </div>
            </div>
            </div>
</div>
)}