import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
    image: StaticImageData,
    index: number
}


export default function PortfolioItem({ image, index }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: .5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .5 }}
            className='h-100 w-full overflow-hidden rounded-lg object-cover'>
            <Image src={image} alt={`Моя работа ${index}`} />
        </motion.div>
    )
}