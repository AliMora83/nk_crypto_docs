import React from 'react'

type Props = {}

export default function Video_01({}: Props) {
  return (
    <div className='max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto mt-10 space-y-2' >
        <div className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden pt-96 mt-10">
            <iframe
            className="embed-responsive-item allowfullscreen absolute top-0 right-0 bottom-0 left-0 w-full h-full"
            src="https://player.vimeo.com/video/137857207"></iframe>
        </div>
    </div>
  )
}