'use client'

import { motion } from "framer-motion"

export default function Footer() {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: .5 }}
            className="h-50 bg-bardo origin-bottom">
            <div className=""></div>
            <div className=""></div>
        </motion.div>
    )
}