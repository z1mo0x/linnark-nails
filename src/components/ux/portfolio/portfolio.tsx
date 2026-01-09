'use client'

import Title from "../../common/title"
import nails1 from '../../../images/nails-1.jpg'
import nails2 from '../../../images/nails-2.jpg'
import nails3 from '../../../images/nails-3.jpg'
import nails4 from '../../../images/nails-4.jpg'
import nails5 from '../../../images/nails-5.jpg'
import nails6 from '../../../images/nails-6.webp'
import PortfolioItem from "./portfolio-item"
import { Swiper, SwiperRef } from "swiper/react"
import { SwiperSlide } from "swiper/react"
import { useCallback, useRef } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"

const images = [
    nails1,
    nails2,
    nails3,
    nails4,
    nails5,
    nails6,
]
const arrowStyles = 'bg-bardo w-12.5 h-12.5 rounded-lg flex items-center justify-center cursor-pointer'

export default function Portfolio() {

    const swiperRef = useRef<SwiperRef | null>(null)
    if (swiperRef.current) {
        console.log(swiperRef);
    }

    const handleNext = useCallback(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slideNext()
        }
    }, [])
    const handlePrev = useCallback(() => {
        if (swiperRef.current) {
            swiperRef.current.swiper.slidePrev()
        }
    }, [])


    return (
        <div className="container mx-auto mt-20">
            <div className="flex justify-between items-center">
                <Title title="Мои работы" description="Изучите мои работы" />
                <div className="flex gap-5">
                    <div className={`${arrowStyles}`} onClick={handlePrev}>
                        <ArrowLeft color="white" />
                    </div>
                    <div className={`${arrowStyles}`} onClick={handleNext}>
                        <ArrowRight color="white" />

                    </div>
                </div>
            </div>
            <Swiper
                ref={swiperRef}
                slidesPerView={4.5}
                spaceBetween={30}
                navigation
                className="mt-10"
            >
                {
                    images.length > 0
                        ?
                        images.map((image, index) =>
                            <SwiperSlide>
                                <PortfolioItem image={image} index={index} />
                            </SwiperSlide>
                        )
                        :
                        'Фотографий нет'

                }
            </Swiper>

        </div>
    )
}