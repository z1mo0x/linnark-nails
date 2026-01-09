'use client'
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";
import nails1 from '../../images/nails-1.jpg'
import nails2 from '../../images/nails-2.jpg'
import nails3 from '../../images/nails-3.jpg'
import nails4 from '../../images/nails-4.jpg'
import nails5 from '../../images/nails-5.jpg'
import nails6 from '../../images/nails-6.webp'
import Image from "next/image";
import { memo } from "react";

const blockStyles = 'h-75 w-full rounded-lg overflow-hidden';

export default memo(function Hero() {

    const { scrollYProgress } = useScroll()

    const borderRadius = useTransform(
        scrollYProgress,
        [0, .5],
        ['0%', '200%']
    )

    const y = useTransform(
        scrollYProgress,
        [0, .5],
        [0, -400]
    )

    const scale = useTransform(
        scrollYProgress,
        [0, .25],
        [1, .75]
    )

    return (
        <motion.div
            // initial={{ borderRadius: '200%' }}
            // animate={{
            //     borderEndEndRadius: '3%',
            //     borderEndStartRadius: '3%',
            //     borderStartEndRadius: '0%',
            //     borderStartStartRadius: '0%'
            // }}
            // transition={{ duration: 1 }}
            style={{
                borderRadius
            }}
            className="h-screen bg-bone">
            <motion.div
                style={{ y }}
                className="h-full container mx-auto flex justify-center flex-col">
                <div className="w-full grid grid-cols-4 gap-7.5">
                    <motion.div
                        initial={{ y: -100, x: -100, opacity: 0 }}
                        animate={{ y: 0, x: 0, opacity: 1 }}
                        transition={{ duration: .5, delay: .4 }}
                        style={{ scale }}
                        className={`${blockStyles}`}
                    >
                        <Image src={nails1} alt="Работа 1" />
                    </motion.div>
                    <div className="w-max mx-auto col-span-2 flex justify-center flex-col">
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5, ease: 'linear' }}
                            className="title text-7xl text-bardo pl-1">
                            Linnark
                        </motion.div>
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5, delay: .2 }}
                            className="mt-2.5 text-lg text-charcoal">
                            Превращу ваши идеи в реальность
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: .5, delay: .5 }}
                        >
                            <Button size='lg' className="px-15 box-border hover:bg-dark-bardo bg-bardo mt-10 w-full text-xl" asChild>
                                <Link href='#'>Записаться</Link>
                            </Button>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ y: -100, x: 100, opacity: 0 }}
                        animate={{ y: 0, x: 0, opacity: 1 }}
                        transition={{ duration: .5, delay: 1 }}
                        style={{ scale }}
                        className={`${blockStyles}`}>
                        <Image src={nails2} alt="Работа 2" />
                    </motion.div>
                </div>
                <div className="w-full grid grid-cols-4 gap-7.5 mt-7.5">
                    <motion.div
                        initial={{ x: -100, y: 100, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ duration: .5, delay: .6 }}
                        style={{ scale }}
                        className={`${blockStyles}`}>
                        <Image src={nails3} alt="Работа 3" />
                    </motion.div>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: .5, delay: .7 }}
                        style={{ scale }}
                        className={`${blockStyles}`}>
                        <Image src={nails4} alt="Работа 4" />
                    </motion.div>
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: .5, delay: .8 }}
                        style={{ scale }}
                        className={`${blockStyles}`}>
                        <Image src={nails5} alt="Работа 5" />
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, y: 100, opacity: 0 }}
                        animate={{ x: 0, y: 0, opacity: 1 }}
                        transition={{ duration: .5, delay: .9 }}
                        style={{ scale }}
                        className={`${blockStyles}`}>
                        <Image src={nails6} alt="Работа 6" />
                    </motion.div>
                </div>
            </motion.div>
        </motion.div >
    )
})