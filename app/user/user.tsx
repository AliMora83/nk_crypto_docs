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
                     <h4 className='pt-10 pb-5 text-gray-800 font-semibold'>
                        Browse Info page
                     </h4>
                     <p className='w-4/5'>
                     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem reprehenderit ullam placeat quis deserunt eligendi, nemo ipsa eaque natus tempore alias, corrupti, quas ea? Itaque, vitae cum.</p>
               </div>
                  <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='draw'>
                  <h4 className='pt-20 pb-5 text-gray-800 font-semibold'>
                     Got to Draw
                  </h4>
                  <p className='w-4/5'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem reprehenderit ullam placeat quis deserunt eligendi, nemo ipsa eaque natus tempore alias, corrupti, quas ea? Itaque, vitae cum. Vitae necessitatibus optio eum totam perspiciatis soluta delectus voluptatem ratione, maiores quam architecto ea nulla repellendus fuga nemo esse corporis!</p>
                  </div>
                  <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='tickets'>
                  <h4 className='pt-20 pb-5 text-gray-800 font-semibold'>
                     Buy tickets
                  </h4>
                  <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem reprehenderit ullam placeat quis deserunt eligendi, nemo ipsa eaque natus tempore alias, corrupti, quas ea? Itaque, vel optio nobis enim a dolor, harum aliquam fuga labore similique dolorem nesciunt, molestias ratione repudiandae dignissimos.</p>
                  </div>
                  <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='wait'>
                  <h4 className='pt-20 pb-5 text-gray-800 font-semibold'>
                     Wait for draw
                  </h4>
                  <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem reprehenderit ullam placeat quis deserunt eligendi, nemo ipsa eaque natus tempore alias, corrupti, quas ea? Itaque, vel optio nobis enim a dolor, harum aliquam fuga labore similique dolorem nesciunt, molestias ratione repudiandae dignissimos.</p>
                  </div>
                  <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='check'>
                  <h4 className='pt-20 pb-5 text-gray-800 font-semibold'>
                     Check Winnings
                  </h4>
                  <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem reprehenderit ullam placeat quis deserunt eligendi, nemo ipsa eaque natus tempore alias, corrupti, quas ea? Itaque, vel optio nobis enim a dolor, harum aliquam fuga labore similique dolorem nesciunt, molestias ratione repudiandae dignissimos.</p>
                  </div>
                  <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='faq'>
                  <h4 className='pt-20 pb-5 text-gray-800 font-semibold'>
                  Frequently Asked Questions
                  </h4>
                  <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem reprehenderit ullam placeat quis deserunt eligendi, nemo ipsa eaque natus tempore alias, corrupti, quas ea? Itaque, vel optio nobis enim a dolor, harum aliquam fuga labore similique dolorem nesciunt, molestias ratione repudiandae dignissimos.</p>
                  </div>
    </div>
  )
}

export default Users