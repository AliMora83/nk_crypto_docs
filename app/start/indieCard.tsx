import React from 'react'

type Props = {}

export default function IndieCard({}: Props) {
  return (
    <div className='my-10'>
        <div className="max-w-lg p-5 rounded-2xl shadow-2xl dark:bg-gray-900 dark:text-gray-100">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<p className=" doc_p dark:text-gray-200">Individuals</p>
		</div>
		<p className="doc_p">More info here</p>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src="/banks.jpg" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			{/* <div className="flex items-center text-xs">
				<span>6 min ago</span>
			</div> */}
		</div>
		<div className="space-y-1">
			<a rel="noopener noreferrer" href="#" className="block">
				<h4 className='doc_h4'>
                    Content Creators</h4>
			</a>
			<p className="doc_p dark:text-gray-300 w-5/6">Represent the key characteristics of real users, focusing on behavior, thought patterns, and motivation.</p>
		</div>
	</div>
</div>
    </div>
  )
}