'use client'

import { Price } from "@/types/main-types"
import { motion } from "framer-motion"

export default function PriceItem({ title, price, index }: Price & { index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5, type: 'spring', stiffness: 50 }}
            className='flex gap-5 justify-between items-end' >
            <div className='font-semibold py-0.5 pb-0 shrink-0'>
                {title}
            </div>
            <div className="w-full border-b border-dashed mb-1"></div>
            <div className="shrink-0">
                <span className="font-semibold">{price}</span> руб.
            </div>
        </motion.div>
    )
}