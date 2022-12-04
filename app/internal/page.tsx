import React from 'react'
import BannerInt from './bannerInt'
import Internals from './internal'
import Timeline from './timeline'

type Props = {}

export default function Internal({}: Props) {
  return (
    <div>
        <BannerInt />
        <Internals />
        <Timeline />
    </div>
  )
}