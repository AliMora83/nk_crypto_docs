import React from 'react'

type Props = {}

export default function Hero01({}: Props) {
  return (
    <div>
        <section className="dark:bg-[rgb(36,36,36)] dark:text-gray-100 rounded-lg shadow-md">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-gray-100">Welcome to
                        <span className="dark:text-[#caa969]"> NAMKA</span></h1>
                        
                    <p className="mt-2 mb-2 text-sm">Dictum aliquam porta condimentum ac integer
                        <br />
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="px-6 py-2 text-sm font-medium rounded dark:bg-[#caa969] dark:text-gray-900">Play Now</a>
                        <a rel="noopener noreferrer" href="#" className="px-6 py-2 text-sm font-medium border rounded dark:border-gray-100">Learn More</a>
                    </div>
                </div>
                <div className="flex items-center justify-center py-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="nk_mock_01.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    </div>
  )
}