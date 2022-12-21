import React from 'react'

type Props = {}

export default function TroubleList({}: Props) {
  return (
    <div>
        <section className="dark:bg-gray-800 dark:text-gray-200 rounded-lg shadow-md">
          <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <h4 className="p-2 text-sm font-medium tracking-wider text-center uppercase">
              Bugs and Errors will occur</h4>
            <h2 className="mb-12 text-xl font-bold leading-none text-center sm:text-2xl dark:text-gray-200">Trouble Shooting Guide</h2>
            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
              <details>
                <summary className="py-2 outline-none cursor-pointer">The link does not work?</summary>
                <div className="px-4 pb-4">
                  <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas animi enim veritatis deleniti ex. Impedit.</p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none cursor-pointer">
                  My signal is weak?</summary>
                <div className="px-4 pb-4">
                  <p className='text-sm text-gray-400'>Better and more accurate questions and answers will be added here. Do send me any suggestions you may have.</p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none cursor-pointer">The button does not work?</summary>
                <div className="px-4 pb-4 space-y-2">
                  <p className='text-sm text-gray-400'>Better and more accurate questions and answers will be added here. Do send me any suggestions you may have.</p>
                  <p className='text-sm text-gray-400'>Better and more accurate questions and answers will be added here. Do send me any suggestions you may have.</p>
                </div>
              </details>
            </div>
          </div>
        </section>
    </div>
  )
}