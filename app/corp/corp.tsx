import React from 'react'
import Banner01 from './banner01'
import Hero01 from './hero01'
import Slider_01 from './slider'

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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem reprehenderit ullam placeat quis deserunt eligendi, nemo ipsa eaque natus tempore alias, corrupti, quas ea? Itaque, vitae cum. Vitae necessi a dolor, harum aliquam fuga labore similique dolorem nesciunt, molestias ratione repudiandae dignissimos.</p>
                  </div>
                  <br />
                  <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='hero'>
                     <hr />
                  <h4 className=''>
                     Add hero banner
                  </h4>
                  <p className='w-4/5'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem reprehenderit ullam placeat quis deserunt eligendi, nemo ipsa eaque natus tempore alias, corrupti, quas ea? Itaque, vitae cum. Vitae necessitatibus optio eum totam perspiciatis soluta delectio nobis enim a dolor, harum aliquam fuga labore similique dolorem nesciunt, molestias ratione repudiandae dignissimos.</p>
                  <br />
                  <Hero01 />
                  <Slider_01 />
                  <br />
                  </div>
                  <br />
                  <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='cta'>
                     <hr />
                  <h4 className=''>
                     Add call to action
                  </h4>
                  <p className='w-4/5'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem reprehenderit ullam placeat quis deserunt eligendi, nemo ipsa eaque natus tempore alias, corrupti, quas ea? Itaqde odio vel optio nobis enim a dolor, harum aliquam fuga labore similique dolorem nesciunt, molestias ratione repudiandae dignissimos.</p>
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
                           <p className='text-xs text-gray-500 font-sans'>Select the Web3 Wallet you created. Itaqde odio vel optio nobis enim a dolor, harum aliquam fuga labore similique dolorem nesciunt.</p>
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
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem reprehenderit ullam placeat quis deserunt eligendi, nemo ipsa eaque natus tempore alias, corrupti, quas ea? Itaque, enim a dolor, harum aliquam fuga labore similique dolorem nesciunt, molestias ratione repudiandae dignissimos.</p>
                  </div>
                  <br />
                  <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='troubleshooting'>
                     <hr />
                  <h4 className=''>
                  Troubleshooting
                  </h4>
                  <p className='w-4/5'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem reprehenderit ullam placeat quis deserut quibusdam dignissimos odit! Soluta ullam quisquam unde odio vel optio nobis enim a dolor, harum aliquam fuga labore similique dolorem nesciunt, molestias ratione repudiandae dignissimos.</p>
                  </div>
                  
    </div>
  )
}

export default Corpo