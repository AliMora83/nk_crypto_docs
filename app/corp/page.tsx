import React from 'react'
import Footer from '../footer'
import Navmenu from '../navmenu'
import BannerCorp from './bannerCorp'
import BannerUser from './bannerCorp'
import Corpo from './corp'
import Users from './corp'

type Props = {}

export default function Corp({}: Props) {
  return (
    <div>
        <Navmenu />
        <BannerCorp />
        <Corpo />
        <Footer />
    </div>
  )
}