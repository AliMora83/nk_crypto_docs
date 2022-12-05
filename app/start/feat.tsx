import React from 'react'

type Props = {}

export default function Feat({}: Props) {
  return (
    <div>
        <div className="bg-gray-800 text-gray-200 rounded-lg shadow-md">
            <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="mb-3 text-xl font-bold leading-none text-center sm:text-2xl dark:text-gray-200">Our features listed here</h2>
                    <p className="text-lg text-gray-400">Lorem mollis rutrum efficitur, lectus velit pharetra elit.</p>
                </div>
                <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-[#caa969]">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <div className="ml-3">
                            <dt className="text-lg font-semibold">Feature One</dt>
                            <dd className="mt-2 text-gray-400">Vorem mollis rutrum efficitur, lectus velit pharetra elit.</dd>
                        </div>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-[#caa969]">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <div className="ml-3">
                            <dt className="text-lg font-semibold">Feature Two</dt>
                            <dd className="mt-2 text-gray-400">Qorem mollis rutrum efficitur, lectus velit pharetra elit.</dd>
                        </div>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-[#caa969]">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <div className="ml-3">
                            <dt className="text-lg font-semibold">Feature Three</dt>
                            <dd className="mt-2 text-gray-400">Porem mollis rutrum efficitur, lectus velit pharetra elit.</dd>
                        </div>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-[#caa969]">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <div className="ml-3">
                            <dt className="text-lg font-semibold">Feature Five</dt>
                            <dd className="mt-2 text-gray-400">Lorem mollis rutrum efficitur, lectus velit pharetra elit.</dd>
                        </div>
                    </div>
                </dl>
            </div>
        </div>
    </div>
  )
}