import React from 'react'
import Navmenu from '../navmenu'
import BannerInt from '../internal/bannerInt'
import Style01 from './style'
import Footer from '../footer'

type Props = {}

export default function Style({}: Props) {
  return (
    <div className='bg-gray-50'>
        <Navmenu />
        <BannerInt />
        <Style01 />
        <Footer />
    </div>
  )
}