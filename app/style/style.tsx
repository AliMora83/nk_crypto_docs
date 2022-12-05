import React from 'react'

type Props = {}

export default function Style01({}: Props) {
  return (
  
      <div className='mb-10'>
        <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto mt-10 space-y-2" id='sdk'>

                 {/* Theme style here */}
                 <p className='mb-2 text-sm pt-16 text-[#caa969] font-light tracking-wider uppercase '>
                   <span className='font-bold text-[#caa969]'>01.</span>  Start here - Header number
                  </p>
              
                  <h1 className=''>
                     Actual Header
                  </h1>

                  <p className='doc_p w-4/5'>
                     It is a Lottery Draw developed on the Blockchain. You may buy up to 10 tickets to enter the draw. One random ticket will be notified of winning! They may withdraw immediately. It is a game whose victory or failure is lead by probability.
                  </p>
                  <br />
                  <button className='dark'>Click here</button>
                  <button className='light'>Click here</button>
                  <button className='gradient'>Click here</button>

              

                  <br/>
             
                  <hr />
                  <h4>Heading Style h4</h4>
                  <p className='text-xs w-3/5'>
                     It is a Lottery Draw developed on the Blockchain. You may buy up to 10 tickets to enter the draw. One random ticket will be notified of winning! They may withdraw immediately. It is a game whose victory or failure is lead by probability.
                  </p>
                  <br />
                  <div className='space-y-2 my-5'>
                     <h1>Heading Style h1</h1>
                     <h2>Heading Style h2</h2>
                     <h3>Heading Style h3</h3>
                     <h4>Heading Style h4</h4>
                     <h5>Heading Style h5</h5>
                  </div>
                  <br />
                  <hr />
                  <h3>Heading Style h3</h3>
                  <p className='w-4/5'>
                     It is a Lottery Draw developed on the Blockchain. You may buy up to 10 tickets to enter the draw. One random ticket will be notified of winning! They may withdraw immediately. It is a game whose victory or failure is lead by probability.
                  </p>

               <div className='my-10'>
               <h2 className="mb-2 text-lg font-semibold text-gray-900">Password requirements:</h2>
               <ul className="space-y-1 max-w-md list-inside text-gray-500">
                  <li className="flex items-center">
                     <svg className="w-4 h-4 mr-1.5 text-[#caa969] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                     At least 10 characters
                  </li>
                  <li className="flex items-center">
                     <svg className="w-4 h-4 mr-1.5 text-[#caa969] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                     At least one lowercase character
                  </li>
                  <li className="flex items-center">
                     <svg className="w-4 h-4 mr-1.5 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>
                     At least one special character, e.g., ! @ # ?
                  </li>
               </ul>
            </div>
         </div>
    </div>
  )
}