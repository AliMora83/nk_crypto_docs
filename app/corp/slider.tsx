import React from 'react'
import { ReactCompareSliderImage } from 'react-compare-slider';

type Props = {}

export default function Slider_01({ }: Props) {
    return (
        <div className='my-5 w-4/5'>
            <ReactCompareSliderImage src="fnb_1a.png" srcSet="fnb_1b.png" />
           
        </div>

    )
}