import React from 'react'

type Props = {}

export default function Video_03({}: Props) {
  return (
    <div className='max-w-md justify-center md:max-w-2xl lg:max-w-4xl mx-auto mt-10 space-y-2' >
        <div className="relative w-full overflow-hidden">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/1GF-9oudpoI" title="YouTube video player" allow="autoplay; fullscreen"></iframe>
        </div>
    </div>
  )
}