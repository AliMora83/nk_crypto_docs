import React from 'react'

type Props = {}

export default function Feat({}: Props) {
  return (
    <div>
        <div className="bg-gray-800 text-gray-200 rounded-lg shadow-md">
            <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="mb-3 text-xl font-bold leading-none text-center sm:text-2xl dark:text-gray-200">Our main features</h2>
                    <p className="text-lg text-gray-400">What the user can expect on the platform.</p>
                </div>
                <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-[#caa969]">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <div className="ml-3">
                            <dt className="text-lg font-semibold">Web3 Wallet</dt>
                            <dd className="mt-2 text-gray-400">Guidance to create or connect existing Web3 Wallet.</dd>
                        </div>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-[#caa969]">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <div className="ml-3">
                            <dt className="text-lg font-semibold">Free Matic</dt>
                            <dd className="mt-2 text-gray-400">Follow this link to collect 0.05 Free Matic.</dd>
                        </div>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-[#caa969]">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <div className="ml-3">
                            <dt className="text-lg font-semibold">Play Free/Real</dt>
                            <dd className="mt-2 text-gray-400">Play Free version until you are ready for Real Game.</dd>
                        </div>
                    </div>
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-[#caa969]">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <div className="ml-3">
                            <dt className="text-lg font-semibold">Withdraw Crypto</dt>
                            <dd className="mt-2 text-gray-400">Once you Win, you may withdraw with just one click.</dd>
                        </div>
                    </div>
                </dl>
            </div>
        </div>
    </div>
  )
}