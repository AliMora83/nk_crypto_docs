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
            <p className='w-4/5'>The purpose is to help Individuals, Organisations, and Groups, to host their own Crypto Draw Events to raise funds independantly.
              It can be set to select a winner every 5 mins, 1 hour, 1 day, once a week or once a month. Communities and NPO's may apply directly to you to fund their projects.</p>
            <br />

            <div className='grid grid-cols-2 items-center'>
               <IndieCard />
               <WodeMaya />
            </div>
            <br />
            <h2>Ideal Individual User Persona</h2>
            <p className='w-4/5'>
               Our Ideal Individual User Persona <strong className='font-semibold'>knows and understands Web3</strong>. They know about blockchain and all the <strong className='font-semibold'> opportinties it has to offer.</strong> We want to help these creators achieve thier goals by funding them, and thier own communities or NPO's, <strong className='font-semibold'> by making use of your Web3 Platform.</strong></p>
            <p className='w-4/5'>
               Our IIUP must have an <strong className='font-semibold'>respectable online following</strong> while consistently creating quality, safe (not-get-banned-friendly), content. They will take a few minutes in thier <strong className='font-semibold'>video to talk about the Crypto Draw</strong> and where to find the links.</p>
            <br />
            <h2>Ideal Individual User Scenario flow</h2>

            <p className='w-4/5'>
               Your Ideal User has <strong className='font-semibold'>some knowledge of Web3.</strong>  They will visit your website and read the <strong className='font-semibold'>Learn More page.</strong> Once they are comfortable on how it works, they will create a Web3 Wallet and will add 0.05 Free Matic to it.</p>
            <p className='w-4/5'>
               They will be able to <strong className='font-semibold'>buy up to 10 tickets per Draw.</strong> This user will then patiently wait for the Draw to end. A <strong className='font-semibold'>Winning Banner</strong> will appear on your screen when you win!</p>
            <p className='w-4/5'>
               The user will then withdraw the crypto with <strong className='font-semibold'>just one click.</strong> <br/> They are now able to play again for Free or enter the Real Draw,<strong className='font-semibold'> with Real Currency.</strong></p>
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