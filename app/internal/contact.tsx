import React from 'react'

type Props = {}

export default function Contact01({ }: Props) {
    return (
        <div className='my-10'>
            <div className="flex flex-col items-center border rounded-lg shadow-md md:flex-row md:max-w-xl border-gray-700 bg-gray-800">

                <img className="object-cover w-full rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/ali_mora.jpg" alt="" />

                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h4 className="mb-1 font-bold tracking-wide text-gray-900 dark:text-white">Ali Mora</h4>
                    <h5 className="mb-2 font-thin tracking-wide text-gray-900 dark:text-white">NAMKA Crypto Draw Developer</h5>
                    <p className="mb-1 text-xs text-gray-700 dark:text-gray-400">Thank you for showing interest in NAMKA Crypto Draw. Here are my contact details. I will help where possible or refer you to <a href="https://portal.thirdweb.com/" target="_blank" className='underline font-semibold'>Thirdweb</a>  for high-level queries.</p>
                    <p className="mb-1 text-xs text-gray-700 dark:text-gray-400">
                        ali@openmindi.co.za <br />
                       <a href="https://api.whatsapp.com/send?phone=623705952"
                       target="_blank">+2762 370 5952</a> 
                    </p>
                </div>
            </div>

        </div>
    )
}