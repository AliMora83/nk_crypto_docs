import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";


type Props = {}

export default function Group({}: Props) {
    const images = [
        { url: "/fnb_1a.png" },
        { url: "/fnb_1b.png" },
        { url: "/fnb_2a.png" },
        { url: "/fnb_2b.png" },
      ];
  return (
    <div>
        <p>Example of the Hero banner and 'Learn More' page update</p>
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