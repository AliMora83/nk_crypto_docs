import React from 'react'
import Footer from '../footer'
import Navmenu from '../navmenu'
import BannerUser from './bannerUser'
import Users from './user'

type Props = {}

export default function User({ }: Props) {
  return (
    <div className='bg-gray-50'>
      <Navmenu />
      <BannerUser />
      <Users />

      <Footer />
    </div>
  )
}