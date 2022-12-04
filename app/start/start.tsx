import React from 'react'
import BankCard from './bankCard'
import FoodCard from './foodCard'
import IndieCard from './indieCard'
import RetailCard from './retailCard'
import Table01 from './table'
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

                  <p className='doc_p w-4/5'>
                     It is a Lottery Draw developed on the Blockchain. You may buy up to 10 tickets to enter the draw. One random ticket will be notified of winning! They may withdraw immediately. It is a game whose victory or failure is lead by probability.
                  </p>

                  <br/>
                  <h4 className=''>User personas</h4>
                  <p className='doc_p w-4/5'>The purpose is to help Individuals, Organisations, and Groups, to host their own Draw Events to raise funds independantly.
                  A winner is selected every 3 days. Communities and NPO's may apply directly to you for funding.</p>
                     <br />
                  <p className='doc_p w-4/5'>
                  Represent the key characteristics of real users, focusing on behavior, thought patterns, and motivation.</p>
                  <Table01 />
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
                  <div className='flex flex-row items-center'>
                  <FoodCard />
                     <div className='m-10 p-10 h-64 w-80 border-gray-100 border rounded-2xl hover:bg-slate-50 hover:shadow duration-150 ease-out'>
                        <div className='space-y-1'>
                           <h4>Use Case Scenario</h4>
                           <p className='doc_p text-xs'>Represent the key characteristics of real users, focusing on behavior, thought patterns, and motivation.</p>
                        </div>
                     </div>
                  </div>
                  <br />
                  <div className='flex flex-row items-center'>
                  <RetailCard />
                     <div className='m-10 p-10 h-64 w-80 border-gray-100 border rounded-2xl hover:bg-slate-50 hover:shadow duration-150 ease-out'>
                        <div className='space-y-1'>
                           <h1>Use Case Scenario</h1>
                           <p className='doc_p text-xs'>Represent the key characteristics of real users, focusing on behavior, thought patterns, and motivation.</p>
                        </div>
                     </div>
                  </div>
                  <br />
                  <p className='doc_p'>
                  User scenarios focus on what a user will do, rather than outlining the thought process. Vitae necessitatibus optio eum totam perspiciatis soluta delectus voluptatem ratione, maiores quam architecto ea nulla repellendus fuga nemo esse corporis! Molestias a, atque exercitationem.</p>
                  <br />
                  <p className='doc_p'>
                  The main purpose of a scenario map is to depict all the possible scenarios for every single function. Vitae necessitatibus optio eum totam perspiciatis soluta delectus voluptatem ratione, maiores quam architecto ea nulla repellendus fuga nemo esse corporis! Molestias a, atque exercitationem.</p>
                  </div>
                  <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='features'>
                 
                  <p className='doc_p'>
                  The UX style guide is a document that includes the design patterns for the future product. Rem reprehenderit ullam placeat quis deserunt eligendi, nemo ipsa eaque natus tempore alias, corrupti, quas ea?  odio vel optio nobis enim a dolor, harum aliquam fuga labore similique dolorem nesciunt, molestias ratione repudiandae dignissimos.</p>
                  <br />
                  <p className='doc_p'>The most common documents produced at these stages are:</p>
                  <ul className='list-disc list-inside space-y-2 mt-2 pl-5'>
                     <li>Site maps</li>
                     <li>Site maps</li>
                     <li>Site maps</li>
                     <li>Site maps</li>
                  </ul>
                  <br />
                     {/* <Toggle /> */}
                  </div>
                     {/* <Stats /> */}

                  <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='wallet'>
                  <h4 className='pt-20 pb-5 text-gray-800 font-semibold'>
                     Web3 Wallet
                  </h4>
                  <p className='doc_p'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem reprehenderit ullam placeat quis deserunt eligendi, nemo ipsa eaque natus tempore alias, corrupti, quas ea? Itaque, vitae cum. Vitae necessitatibus optio eum totam perspiciatis soluta delectus voluptatem ratione, maiores quam architecto ea nulla repellendus fuga nemo esse corporis! Molestias a, atque exercitationem ad alias eius expedita harum debitis non consequuntur maiores illum quibusdam placeat eos velit tenetur, ipsum asperiores labore? Rem blanditiis adipisci ab natus provident quibusdam dignissimos odit! Soluta ullam quisquam unde odio vel optio nobis enim a dolor, harum aliquam fuga labore similique dolorem nesciunt, molestias ratione repudiandae dignissimos.</p>
                  </div>
                  <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='matic'>
                  <h4 className='pt-20 pb-5 text-gray-800 font-semibold'>
                     Free Matic
                  </h4>
                  <p className='doc_p'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem reprehenderit ullam placeat quis deserunt eligendi, nemo ipsa eaque natus tempore alias, corrupti, quas ea? Itaque, vitae cum. Vitae necessitatibus optio eum totam perspiciatis soluta delectus voluptatem ratione, maiores quam architecto ea nulla repellendus fuga nemo esse corporis! Molestias a, atque exercitationem ad alias eius expedita harum debitis non consequuntur maiores illum quibusdam placeat eos velit tenetur, ipsum asperiores labore? Rem blanditiis adipisci ab natus provident quibusdam dignissimos odit! Soluta ullam quisquam unde odio vel optio nobis enim a dolor, harum aliquam fuga labore similique dolorem nesciunt, molestias ratione repudiandae dignissimos.</p>
                  </div>
                  
    </div>
  )
}

export default Started