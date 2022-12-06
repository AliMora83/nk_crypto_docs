import React from 'react'
import FAQ from '../start/faq'
import IndieCard from '../start/indieCard'
import Table01 from '../start/table'
import WodeMaya from './personaWode'

type Props = {}

function Users({ }: Props) {
   return (
      <div className='mb-10'>
         <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto space-y-2" id='how'>
            <p className='mb-2 text-sm pt-16 text-[#caa969] 
        font-light tracking-wider uppercase '>
               <span className='font-bold text-[#caa969]'>02.</span> User Guide</p>

            <h1 className=''>
               Who is our White-label for?
            </h1>

            <p className='w-4/5'>This software will allow you to have your own lottery draw. White-label means we will customise the platform to your brand. Now that we know what it can do, here is a look at our ideal partner profile.</p>
            <Table01 />
         </div>
         <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto mt-10" id='faq'>
            <hr />
            <h4 className=''>User personas</h4>
            <p className='w-4/5'>The purpose is to help Individuals, Organisations, and Groups, to host their own Draw Events to raise funds independantly.
               A winner is selected every 3 days. Communities and NPO's may apply directly to you to fund their projects.</p>
            <br />

            <div className='grid grid-cols-2 items-center'>
               <IndieCard />
               <WodeMaya />
            </div>
            <br />

            <p className='w-4/5'>
               User scenarios focus on what a user will do, rather than outlining the thought process. Vitae necessitatibus optio eum totam perspiciatis soluta delectus voluptatem ratione, maiores quam architecto ea nulla repellendus fuga nemo esse corporis! Molestias a, atque exercitationem.</p>
            <br />
            <p className='w-4/5'>
               The main purpose of a scenario map is to depict all the possible scenarios for every single function. Vitae necessitatibus optio eum totam perspiciatis soluta delectus voluptatem ratione, maiores quam architecto ea nulla repellendus fuga nemo esse corporis! Molestias a, atque exercitationem.</p>
         </div>

         <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto mt-20" id='faq'>
            <FAQ />
         </div>
         <br />
         <div className="text-gray-700 text-left max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto" id='features'>

         </div>
      </div>
   )
}

export default Users