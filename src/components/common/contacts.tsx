'use client'

import { Mail, Phone } from "lucide-react"
import Title from "./title"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Contacts() {
    return (
        <div className="py-15">
            <div className="container mx-auto">
                <Title title="Контактная информация" />
                <div className="gap-x-12.5 mt-10 relative">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: .5, delay: .25 }}
                        viewport={{ once: true }}
                        className="rounded-lg">
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A7c303afbbf32a93ee198d2cfac7fc073c420e3f46f8ec07fde199b4e4108c795&amp;source=constructor" width="100%" height="450" ></iframe>
                    </motion.div>
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: .5 }}
                        className="w-1/3 border-silver h-full absolute top-1/2 -translate-y-1/2 right-0 border-2 rounded-lg p-5  bg-[rgba(255,255,255,1)] backdrop-blur-xs">
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-2">
                                <span className="flex gap-2.5 font-bold">
                                    <Phone />
                                    Телефон:
                                </span>
                                <Link href={'tel:+79925107250'}>+7(992)-510-72-50</Link>
                            </div>
                            <div className="flex gap-2">
                                <span className="flex gap-2.5 font-bold">
                                    <Mail />
                                    Почта:
                                </span>
                                <Link href={'mailto:linali17@bk.ru'}>linali17@bk.ru</Link>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="font-bold text-xl">Как добраться</div>
                            <div className=""></div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}