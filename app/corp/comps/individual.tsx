import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";


type Props = {}

export default function Individual({}: Props) {
    const images = [
        { url: "/wode_1a.png" },
        { url: "/wode_1b.png" },
        { url: "/wode_2a.png" },
        { url: "/wode_2b.png" },
        { url: "/wode_3a.png" },
        { url: "/wode_3b.png" },
        { url: "/wode_3c.png" },
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