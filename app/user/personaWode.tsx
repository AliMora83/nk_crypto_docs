import React from 'react'

type Props = {}

export default function WodeMaya({}: Props) {
  return (
    <div>
        <div className="max-w-md p-8 sm:flex sm:space-x-6 bg-gray-50 text-gray-800">
	<div className="flex-shrink-0"><a href="https://wodemaya.me/" target="_blank">
		<img src="/maya_wode.png" alt="wode" className="h-20 w-20 object-cover rounded-full shadow-md ring-2 ring-offset-4 bg-gray-500 ring-[#caa969] ring-offset-gray-100"/></a>
	</div>
	<div className="flex flex-col space-y-2">
		<div>
			<h4>Wode Maya</h4>
			<span className="text-sm text-gray-600">Youtube Content Creator</span>
            <p className='text-xs text-gray-500 font-sans'>Our sole aim is to showcase amazing African stories and more. We are building something special.</p>
		</div>
		<div className="-space-y-4">
			<span className="flex items-center">
            <svg className="w-4 h-4 text-[#caa969] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
				<p className="">@WODEMAYA</p>
			</span>
			<span className="flex items-center">
            <svg className="w-4 h-4 text-[#caa969] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
				<p className="">1.22M subscribers</p>
			</span>
		</div>
	</div>
</div>
    </div>
  )
}