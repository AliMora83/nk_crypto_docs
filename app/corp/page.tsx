import React from 'react'
import Footer from '../footer'
import Navmenu from '../navmenu'
import BannerCorp from './bannerCorp'
import Corpo from './corp'

type Props = {}

export default function Corp({}: Props) {
  return (
    <div className='bg-gray-50'>
        <Navmenu />
        <BannerCorp />
        <Corpo />
        <Footer />
    </div>
  )
}