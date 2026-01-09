'use client'

import { motion } from "framer-motion"

type Props = {
    title: string,
    description?: string
}

export default function Title({ title, description }: Props) {
    return (
        <div>
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: .5, delay: .25 }}
                className="title text-6xl">{title}</motion.h2>
            {
                description
                &&
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 1 }}
                    transition={{ duration: .5, delay: .5 }}
                    className="text-silver mt-1.5">{description}</motion.div>
            }
        </div>
    )
}