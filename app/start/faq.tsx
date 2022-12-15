import React from 'react'

type Props = {}

export default function FAQ({}: Props) {
  return (
    <div>
        <section className="dark:bg-gray-800 dark:text-gray-200 rounded-lg shadow-md">
          <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <h4 className="p-2 text-sm font-medium tracking-wider text-center uppercase">
              How it works</h4>
            <h2 className="mb-12 text-xl font-bold leading-none text-center sm:text-2xl dark:text-gray-200">Frequently Asked Questions</h2>
            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
              <details>
                <summary className="py-2 outline-none cursor-pointer">I don't have a Web3 Wallet. Can you help?</summary>
                <div className="px-4 pb-4">
                  <p className='text-sm text-gray-400'>Yes. Better and more accurate questions and answers will be added here. Do send me any suggestions you may have.</p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none cursor-pointer">
                  I don't have any money, can I still play?</summary>
                <div className="px-4 pb-4">
                  <p className='text-sm text-gray-400'>Yes! Better and more accurate questions and answers will be added here. Do send me any suggestions you may have.</p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none cursor-pointer">I want to partner with you, where do we start?</summary>
                <div className="px-4 pb-4 space-y-2">
                  <p className='text-sm text-gray-400'>Glad to see your enthusiam and optimism to take this step. We can start with a brief online meet to understand your gaols and how we can make it happen.</p>
                  <p className='text-sm text-gray-400'>ali@openmindi.co.za
                  </p>
                  <p className='text-gray-400 hover:text-gray-200'><a href="https://api.whatsapp.com/send?phone=623705952" target='_blank' rel='noreferrer'>+2762 370 5952 </a></p>
                </div>
              </details>
            </div>
          </div>
        </section>
    </div>
  )
}