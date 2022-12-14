import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";


type Props = {}

export default function Architecture({}: Props) {
    const images = [
        { url: "/arch_02.png" },
        { url: "/arch_01.png" },
        { url: "/indie_arch.png" },
      ];
  return (
    <div>
        <p className='text-xs pb-2'>Here is an example of a Content Creator with Web3 branding</p>
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