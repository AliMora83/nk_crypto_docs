import React from 'react'
import Navmenu from '../navmenu'
import BannerInt from './bannerInt'
import Internals from './internal'
import Timeline from './timeline'

type Props = {}

export default function Internal({}: Props) {
  return (
    <div className='bg-gray-50'>
        <Navmenu />
        <BannerInt />
        <Internals />
        <Timeline />
    </div>
  )
}