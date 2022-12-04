import React from 'react'
import Footer from '../footer'
import Navmenu from '../navmenu'
import BannerUser from './bannerUser'
import Users from './user'

type Props = {}

export default function User({}: Props) {
  return (
    <div>
        <Navmenu />
        <BannerUser />
        <Users />
        <Footer />
    </div>
  )
}