import React from 'react'

type Props = {}

export default function Timeline({}: Props) {
  return (
    <div>
        <section className="dark:bg-[#0b0e10] dark:text-gray-100">
            <div className="container max-w-5xl px-4 py-12 mx-auto" id='timeline'>
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3">
                        <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-[#caa969]">
                            <h3 className="text-3xl font-semibold">NAMKA CRYPTO DRAW</h3>
                            <span className="text-sm font-light tracking-wider uppercase dark:text-gray-400 animate-pulse">Development Timeline</span>
                        </div>
                    </div>
                    <div className="relative col-span-12 px-4 pb-20 space-y-6 sm:col-span-9">
                        <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#caa969]">
                                <h3 className="text-lg font-semibold tracking-wide">
                                    Meet with potential partners</h3>
                                <time className="text-xs tracking-wide uppercase dark:text-gray-400">Dec 2022</time>
                                <p className="mt-3">More info coming soon...</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#caa969]">
                                <h3 className="text-lg font-semibold tracking-wide">Start Software Documentation</h3>
                                <time className="text-xs tracking-wide uppercase dark:text-gray-400">Nov 2022</time>
                                <p className="mt-3">After speaking to a few important people, the need for Software Documentation became obvious. I thought this would be the easy part.</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#caa969]">
                                <h3 className="text-lg font-semibold tracking-wide">MVP Ready for testing</h3>
                                <time className="text-xs tracking-wide uppercase dark:text-gray-400">May 2022</time>
                                <p className="mt-3">The Minimum Viable Product was ready for testing, making use of Matic from Testnet. The orignal color theme was dark blue. The current theme feels more elegant.</p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-[#caa969]">
                                <h3 className="text-lg font-semibold tracking-wide">Start Development</h3>
                                <time className="text-xs tracking-wide uppercase dark:text-gray-400">April 2022</time>
                                <p className="mt-3">After completing a Full-Stack Web Development Bootcamp, I needed to build something for my portfolio. I decided on Web3 Lottery because it can help me and anyone who makes use of it!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}