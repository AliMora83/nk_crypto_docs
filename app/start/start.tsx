import React from 'react'
import BankCard from './bankCard'
import FAQ from './faq'
import FoodCard from './foodCard'
import IndieCard from './indieCard'
import RetailCard from './retailCard'
import Table01 from './table'
import Tabs from './tabs'
// import Stats from './stats'
// import Toggle from './toggle'

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

                  <br/>
                  <hr />
                  <h4 className=''>User personas</h4>
                  <p className='w-4/5'>The purpose is to help Individuals, Organisations, and Groups, to host their own Draw Events to raise funds independantly.
                  A winner is selected every 3 days. Communities and NPO's may apply directly to you for funding.</p>
                     <br />
                  <p className='w-4/5'>
                  Represent the key characteristics of real users, focusing on behavior, thought patterns, and motivation.</p>
                  <Table01 />
                  <br />
                  {/* <FAQ /> */}
                  <br />
                  <div className='flex flex-row items-center'>
                  <IndieCard />
                     <div className='m-10 p-10 h-64 w-80 border-gray-100 border rounded-2xl hover:bg-slate-50 hover:shadow duration-150 ease-out'>
                        <div className='space-y-1'>
                           <h4>Use Case Scenario</h4>
                           <p className='text-xs text-gray-500 font-sans'>Represent the key characteristics of real users, focusing on behavior, thought patterns, and motivation.</p>
                        </div>
                     </div>
                  </div>
                  <br />

                  <p className='w-4/5'>
                  User scenarios focus on what a user will do, rather than outlining the thought process. Vitae necessitatibus optio eum totam perspiciatis soluta delectus voluptatem ratione, maiores quam architecto ea nulla repellendus fuga nemo esse corporis! Molestias a, atque exercitationem.</p>
                  <br />
                  <p className='w-4/5'>
                  The main purpose of a scenario map is to depict all the possible scenarios for every single function. Vitae necessitatibus optio eum totam perspiciatis soluta delectus voluptatem ratione, maiores quam architecto ea nulla repellendus fuga nemo esse corporis! Molestias a, atque exercitationem.</p>
                  </div>
                  <br />
                  <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='features'>
                  <hr />
                  <h4 className=''>
                     Feautures
                  </h4>
                  <p className='w-4/5'>
                  The UX style guide is a document that includes the design patterns for the future product. Rem reprehenderit ullam placeat quis deserunt eligendi, nemo ipsa eaque natus tempore alias, corrupti, quas ea?  odio vel optio nobis enim a dolor, harum aliquam fuga labore similique dolorem nesciunt, molestias ratione repudiandae dignissimos.</p>
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