import React from 'react'
import BannerUser from './bannerUser'
import Users from './user'

type Props = {}

export default function User({}: Props) {
  return (
    <div>
        <BannerUser />
        <Users />
    </div>
  )
}