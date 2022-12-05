import React from 'react'
import Video_01 from '../user/video_01'
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
                  The UX style guide is a document that includes the design patterns for the future product. Rem reprehenderit ullam placeat quis deserunt eligendi, nemo ipsa eaque natus tempore alias.</p>
                  <br />
                  <Feat />
                  <br />
                  <p className='w-4/5'>The most common documents produced at these stages are:</p>
                  <ul className='list-disc list-inside space-y-2 mt-2 pl-5'>
                     <li>Create/Connect Web3 Wallet</li>
                     <li>Collect Free Matic</li>
                     <li>Play with Free Matic</li>
                     <li>Win more Matic</li>
                  </ul>
                  <br />
               
                  </div>
                  <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='wallet'>
                  <hr />
                  <h4 className=''>
                     Web3 Wallet
                  </h4>
                  <p className='w-4/5'>
                  Follow tthis link to create a new Web3 Wallet. exercitationem ad alias eius expedita harum debitis non consequuntur maiores similique dolorem nesciunt, molestias ratione repudiandae dignissimos.</p>
                  <button className='dark'>Click here</button>
                  <p className='reminder'>Add How-To video</p>
                  </div>

                  <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='matic'>
                  <hr />
                  <h4 className=''>
                     Free Matic
                  </h4>
                  <p className='w-4/5'>
                  Click here to get Free Matic. Rem reprehenderit ullam placeat quis deserunt eligendi, nemo ipsa eaque natus tempore alias, corrupti, quas ea? Itaque optio nobis enim a dolor, harum aliquam fuga labore similique dolorem nesciunt, molestias ratione repudiandae dignissimos.</p>
                  <button className='dark'>Click here</button>
                  <p className='reminder'>Add How-To video</p>

                  </div>
                  
    </div>
  )
}

export default Started