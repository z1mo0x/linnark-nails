import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
    image: StaticImageData,
    index: number
}

export default function PortfolioItem({ image, index }: Props) {
    return (
        <div className='h-100 w-full overflow-hidden rounded-lg'>
            <Image src={image} alt={`Моя работа ${index}`} />
        </div>
    )
}