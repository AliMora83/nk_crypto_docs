import React from 'react'

type Props = {}

export default function Banner01({}: Props) {
  return (
    <div>
        <section className="py-6 dark:bg-[rgb(36,36,36)] dark:text-gray-50 rounded-lg shadow-md">
            <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
                <h1 className="text-white">Buy your Tickets now!</h1>
                <p className="text-center">At a assumenda quas cum earum ut itaque cquas cum earum ut itaque commodi saepe rem aspernatur quam.</p>
                <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
                    <button className="px-6 py-2 text-md font-medium rounded dark:bg-[#caa969] dark:text-gray-900">Play Now</button>
                    <button className="px-6 py-2 text-md font-normal border rounded dark:bg-gray-100 dark:text-gray-900 ">Learn more</button>
                </div>
            </div>
        </section>
    </div>
  )
}