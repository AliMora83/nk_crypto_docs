import React from 'react'
import Footer from '../footer'
import Navmenu from '../navmenu'
import BannerDoc from './bannerDoc'
import Started from './start'

type Props = {}

export default function Start({}: Props) {
  return (
    <div>
        <Navmenu />
        <BannerDoc />
        <Started />
        <Footer />
    </div>
  )
}