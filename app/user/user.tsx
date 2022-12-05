import React from 'react'
import Video_01 from './video_01'

type Props = {}

function Users({}: Props) {
  return (
    <div className='mb-10'>
        <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto space-y-2" id='visit'>
        <p className='mb-2 text-sm pt-16 text-[#caa969] 
        font-light tracking-wider uppercase '>
                   <span className='font-bold text-[#caa969]'>02.</span> User Guide</p>

                   <h1 className=''>
                     How to use NAMKA Crypto Draw?
                  </h1>

                  <p className='w-4/5'>Onboarding flow is getting users acquainted with an app or program, showing them around. Rem reprehenderit ullam placeat quis deserunt eligendi, nemo ipsa eaque natus tempore alias, corrupti, quas ea? Itaque, vitae cum. </p>

                  </div>

                     <Video_01 />
                     <br />

                  <div className="text-gray-700 text-left max-w-md justify-center   md:max-w-2xl lg:max-w-4xl mx-auto" id='info'>
                     <hr />
                <div className='my-10 pl-16'>
               <h2 className="mb-2 text-lg font-semibold text-gray-900">Follow these steps</h2>
               <ul className="space-y-1 max-w-md list-inside text-gray-500">
                  <li className="flex items-center">
                     <svg className="w-4 h-4 mr-1.5 text-[#caa969] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                     Visit NAMKA Crypto Draw here
                  </li>
                  <li className="flex items-center">
                     <svg className="w-4 h-4 mr-1.5 text-[#caa969] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                     Browse the info page 
                  </li>
                  <li className="flex items-center">
                     <svg className="w-4 h-4 mr-1.5 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                     Click on Draw
                  </li>
                  <li className="flex items-center">
                     <svg className="w-4 h-4 mr-1.5 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                     Buy up to 10 tickets
                  </li>
               </ul>
               </div>
            </div>
                  <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='faq'>
                     <hr />
                  <h4 className=''>
                  Frequently Asked Questions
                  </h4>
                  <p className='w-4/5'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem reprehenderit ullam placeat quis deserunt eligendi, nemo ipsa eaque natus tempore alias, corrupti, quas ea? Itaque, vel optio nobis enim a dolor, harum aliquam fuga labore similique dolorem nesciunt, molestias ratione repudiandae dignissimos. .</p>
                  <code className='code_gray'>Add correct FAQ code</code>
                  </div>
    </div>
  )
}

export default Users