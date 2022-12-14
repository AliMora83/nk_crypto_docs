import React from 'react'
import Video_01 from '../user/video_01'
import Video_02 from '../user/video_02'
import Video_03 from '../user/video_03'
// import Video_01 from '../user/video_01'
import Feat from './feat'
import IndieCard from './indieCard'

type Props = {}

function Started({}: Props) {


  return (
    <div className='mb-10'>
        <div className="text-gray-700 text-left max-w-md justify-center md:max-w-4xl mx-auto space-y-2" id='what'>

                  <p className='mb-2 text-sm pt-16 text-[#caa969] font-light tracking-wider uppercase '>
                   <span className='font-bold text-[#caa969]'>01.</span> Start here</p>
        
                  <h1 className=''>
                     What is NAMKA Crypto Draw?
                  </h1>

                  <p className='w-4/5'>
                     It is a Lottery Draw developed on the Blockchain. You may buy up to 10 tickets to enter the draw. One random ticket will be notified of winning! They may withdraw immediately. It is a game whose victory or failure is lead by probability.
                  </p>
                   <br />
                   <Video_01 />
                  <br/>
                  <hr />
                  
                  <h4 className=''>
                     Feautures
                  </h4>
                  <p className='w-4/5'>
                  Here is a brief look at what an Ideal User is able to do on our platform. These are the basic, more features and fuctionalities will be added with future updates.</p>
                  <br />
                  <Feat />
                  <br />
                  <p className='w-4/5'>We aim to make the process as simple as possible:</p>
                  
                  <ul className='space-y-1 max-w-md list-inside text-gray-500 pl-10'>
                     <li className='flex items-center'>
                     <svg className="w-4 h-4 mr-1.5 text-[#caa969] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        Create/Connect Web3 Wallet</li>
                        
                     <li className='flex items-center'>
                     <svg className="w-4 h-4 mr-1.5 text-[#caa969] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                       Collect Free Matic</li>

                     <li className='flex items-center'>
                     <svg className="w-4 h-4 mr-1.5 text-[#caa969] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                       Play with Free/Real</li>

                     <li className='flex items-center'>
                     <svg className="w-4 h-4 mr-1.5 text-[#caa969] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                       Withdraw Winnings</li>
                  </ul>
                  <br />
               
                  </div>
                  <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='wallet'>
                  <hr />
                  <h4 className=''>
                     Web3 Wallet
                  </h4>
                  <p className='w-4/5'>
                  Watch the video before you visit the link. <br/> Follow this link to create a new Web3 Wallet. </p>
                  <Video_02 />
                  <br />
                  
                  <a href="https://metamask.io/download/" target="_blank">
                  <button className='dark'>Create Wallet</button></a>
                  </div>

                  <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='matic'>
                  <hr />
                  <h4 className=''>
                     Free Matic XXX
                  </h4>
                  <p className='w-4/5'>
                  Watch the video before you visit the link. <br/> Click here to get Free Matic. </p>
                  <Video_03 />
                  <br />
                  <a href="https://mumbaifaucet.com/" target="_blank">
                  <button className='dark'>Collect Matic</button></a>

                  </div>
                  
    </div>
  )
}

export default Started