import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

type Props = {}

export default function Archi({}: Props) {
  const images = [
    { url: "/indie_arch.png" },
    { url: "/arch_01.png" },
    { url: "/arch_02.png" },
    { url: "/connect.png" },
    { url: "/chain.webp" },
  ];

  return (
    <div>
        <p className='text-xs pb-2'>Here is an overall look at the Web Architecture</p>

        <div className='object-center'>
            <SimpleImageSlider
              width={750}
              height={460}
              images={images}
              showBullets={false}
              showNavs={true}
            />
          </div>
    </div>
  )
}