import React from 'react'

type Props = {}

function Internals({}: Props) {
  return (
    <div className='mb-10'>
        <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto mt-10 space-y-2" id='sdk'>
        <p className='mb-2 text-sm pt-10 text-[#caa969] 
        font-light tracking-wider uppercase '>
                   <span className='font-bold text-[#caa969]'>04.</span> Internal Guide</p>
                  <h1>How to use back end?</h1>
                  <p className='w-4/5'>
                  Minimum hardware and <span className='text-gray-800 font-semibold'>software requirements</span>. Rem reprehenderit ullam placeat quis deserunt eligendi, nemo ipsa eaque natum quibusdam placeat eos velit tenetur, ipsum asperiores labore? </p>

                  <br />
                  <hr />
                  <h4>SDK Guide</h4>
                  <p className='w-4/5'> Rem blanditiis adipisci ab <code className='code_gray'>@tailwindcss/typography</code> natus provident quibusdam dignissimos odit! Soluta ullam quisqu.</p>

                  <pre className='pre_black'>
                     <code className='code_wit'>Test code here</code></pre>

                  <pre className='pre_black'>
                     <code className='code_wit'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </code></pre>

                  </div>
                  <br />
                  <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='api'>
                     <hr />
                  <h4 className=''>
                     API Guide
                  </h4>
                  <p className='w-4/5'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem reprehenderit ullam placeat quis deseruatus provident quibusdam dignissimos odit! Soluta ullam quisquam unde odio vel optio nobis enim a dolor, harum aliquam fuga labore similique dolorem nesciunt, molestias ratione repudiandae dignissimos.</p>
                  </div>
                  <br />
                  <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='support'>
                     <hr />
                  <h4 className=''>
                     Support
                  </h4>
                  <p className='w-4/5'>
                  Lorem contact details and where to look for more information or assistance. Implement localization. People like getting information in their own language. So, take care ofaddress formats, and so on. nemo ipsa eaque natus tempore alias, corrupti, quas ea? Itaque, vel optio nobis enim a dolor, harum aliquam fuga labore similique dolorem nesciunt, molestias ratione repudiandae dignissimos.</p>
                  <br />


             </div>       
    </div>
  )
}

export default Internals