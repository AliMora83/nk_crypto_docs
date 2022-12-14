import React from 'react'
import Banner01 from './banner01'
import Archi from './comps/architecture'
import Hero01 from './hero01'
import Tabs from './tabs'
import TroubleList from './troubleList'

type Props = {}

function Corpo({}: Props) {
  return (
    <div className='mb-10'>
        <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='addToWeb'>
        <p className='mb-2 text-sm pt-16 text-[#caa969] 
        font-light tracking-wider uppercase '>
                   <span className='font-bold text-[#caa969]'>03.</span> Corporate Guide</p>
                  <h1 className=''>
                     How to add it to your website?
                  </h1>
                  <p className='w-4/5'>
                   Blockchain technology is still growing. New improvements are constantly being released. We will worry about Web3 Tech. You keep the current website (Web2). You will have to add a few links to your Web2, which will take your users to your whitelabeled Web3 Platform. </p>
                   <p className='w-4/5'> We will supply you with the links and components.</p>
                  </div>
                  <br />
                  <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='hero'>
                     <hr />
                  <h4 className=''>
                     Add hero banner
                  </h4>
                  <p className='w-4/5'>
                  All A-list websites have a general structure. Working together, we design and uplaod new Hero Banners to promote the new offer either links them to your Web3 to play or to a learn more page on Web2 for more info on Web3 Wallets and connecting it.</p>
                  <br />
                  <Hero01 />
                  <hr />
                  <p>Click on each tab below, to view use case.</p>
                  <Tabs />
                  <br />
                  </div>
                  <br />
                  <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='cta'>
                     <hr />
                  <h4 className=''>
                     Add call to action
                  </h4>
                  <p className='w-4/5'>
                  These will also be added to your Web2 Home page. We will ensure all whitelabeled artwork is inline with your corporate brand identity. Refering to your colors, fonts, imagery, etc.</p>
                     <br />
                     <Banner01 />
                  </div>
                  <br />
                  <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='web3'>
                     <hr />
                  <h4 className=''>
                     Connect to web3
                  </h4>
                  <div className='flex flex-row'>
                  <img className='m-10 h-60 rounded-lg shadow-lg' src="log_in.png" alt="" />
                  <div className='m-10 p-10 h-60 w-80 border-gray-100 border rounded-2xl hover:bg-slate-50 hover:shadow duration-150 ease-out'>
                        <div className='space-y-1'>
                           <h4>Select Web3 Wallet</h4>
                           <p className='text-xs text-gray-500 font-sans'>Ideal User will land on your whitelabeled Web3 log-in page.</p>
                           <p className='text-xs text-gray-500 font-sans'>They will connect the Web3 Wallet they created by following the steps on your Web2 Learn more page.</p>
                        </div>
                     </div>
                  </div>
                  
                  </div>
                  <br />
                  <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='whitelabel'>
                     <hr />
                  <h4 className=''>
                     Whitelabel Requirements
                  </h4>
                  <p className='w-4/5'>
                  Your Corporate Identity will be ideal. If you don't have one, we can develop everything for a small fee.</p>
                  <div className='mt-5 pl-10'>
               <h2 className="mb-2">Here is an list of requirements:</h2>
               <ul className="space-y-1 max-w-md list-inside text-gray-500">
                  <li className="flex items-center">
                     <svg className="w-4 h-4 mr-1.5 text-[#caa969] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                     Your logo, Icons and various sizes.
                  </li>
                  <li className="flex items-center">
                     <svg className="w-4 h-4 mr-1.5 text-[#caa969] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                     Your image gallery, fonts and colors options.
                  </li>
                  <li className="flex items-center">
                     <svg className="w-4 h-4 mr-1.5 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                     Copywrite for Web3 Artwork and more info page
                  </li>
               </ul>
            </div>
                  </div>
                  <br />
                  <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto mt-16" id='troubleshooting'>
                  
                  <TroubleList />
                  </div>
                  
    </div>
  )
}

export default Corpo