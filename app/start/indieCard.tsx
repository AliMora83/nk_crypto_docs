import React from 'react'

type Props = {}

export default function IndieCard({}: Props) {
  return (
    <div className='my-10'>
        <div className="max-w-lg p-5 rounded-2xl shadow-2xl dark:bg-gray-900 dark:text-gray-100">
	<div className="flex justify-between pb-4 border-bottom">
		<div className="flex items-center">
			<p className=" doc_p dark:text-gray-200">Individuals</p>
		</div><a href="https://africa.businessinsider.com/local/leaders/top-10-youtube-influencers-in-africa-by-country/fynw3xx" target="_blank">
		<p className="doc_p">More info here</p></a>
	</div>
	<div className="space-y-4">
		<div className="space-y-2">
			<img src="/youtubers.webp" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
			<div className="flex items-center text-xs text-gray-400">
				<span>africa.businessinsider.com</span>
			</div>
		</div>
		<div className="space-y-1">
			<a rel="noopener noreferrer" href="#" className="block">
				<h4 className='doc_h4'>
                    Content Creators</h4>
			</a>
			<p className="doc_p dark:text-gray-300">These are the travelers, foodies, health and fitness content creators. We want to help them grow and fund their own Communities, Subscribers and Followers</p>
		</div>
	</div>
</div>
    </div>
  )
}