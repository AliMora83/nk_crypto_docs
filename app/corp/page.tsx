import React from 'react'
import BannerCorp from './bannerCorp'
import BannerUser from './bannerCorp'
import Corpo from './corp'
import Users from './corp'

type Props = {}

export default function Corp({}: Props) {
  return (
    <div>
        <BannerCorp />
        <Corpo />
    </div>
  )
}