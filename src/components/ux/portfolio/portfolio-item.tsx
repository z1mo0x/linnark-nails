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
            className='group  relative h-100 w-full overflow-hidden rounded-lg object-cover'>
            <Image src={image} alt={`Портфолио | рис. ${index}`} />
            <div className="
             group-hover:translate-x-0  
             z-5 duration-500 absolute h-full top-0 left-0 w-full -translate-x-full bg-bardo p-5">
                <div className="font-bold text-white">
                    Какие услуги были оказаны:
                </div>
            </div>
        </motion.div>
    )
}