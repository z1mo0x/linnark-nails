'use client'

import { prices } from "@/config/siteConfig";
import Title from "../../common/title";
import PriceItem from "./price-item";

const wrapperStyle = 'flex flex-col p-1.5 gap-y-5 border-l-[3px] border-white pl-5 overflow-hidden'
export default function Prices() {
    return (
        <div className="bg-shadow-grey pt-20 pb-20 text-white mt-15">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-x-25 mt-10 pb-5">
                    <div className={`${wrapperStyle}`}>
                        <Title title="Цены" />
                        {prices.main.map((price, index) =>
                            <PriceItem key={price.title + index} {...price} index={index} />
                        )}
                    </div>
                    <div className={`${wrapperStyle}`}>
                        <div className="title text-6xl">Дополнительные услуги</div>
                        {prices.addictional.map((price, index) =>
                            <PriceItem key={price.title + index} {...price} index={index} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}