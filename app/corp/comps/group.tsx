import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";


type Props = {}

export default function Group({}: Props) {
    const images = [
        { url: "/rugby_1a.jpg" },
        { url: "/rugby_1b.jpg" },
        { url: "/rugby_2a.jpg" },
        { url: "/rugby_2b.jpg" },
        { url: "/rugby_3a.jpg" },
        { url: "/rugby_3b.jpg" },
      ];
  return (
    <div>
        <p className='text-xs pb-2'>Here is an example of a local Sports Club with Web3 branding.</p>
        <div className='hover:shadow-lg shadow-md'>
              <SimpleImageSlider
        width={750}
        height={460}
        images={images}
        showBullets={false}
        showNavs={true}
      /></div>
    </div>
  )
}