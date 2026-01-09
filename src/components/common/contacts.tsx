import { Mail, Phone } from "lucide-react"
import Title from "./title"
import Link from "next/link"

export default function Contacts() {
    return (
        <div className="py-15">
            <div className="container mx-auto">
                <Title title="Контактная информация" />
                <div className="grid grid-cols-2 gap-x-12.5 mt-5">
                    <div className="">
                        <iframe className="w-full h-100" src="https://yandex.ru/map-widget/v1/?um=constructor%3A7c303afbbf32a93ee198d2cfac7fc073c420e3f46f8ec07fde199b4e4108c795&amp;source=constructor"></iframe>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-2">
                            <span className="flex gap-2.5 font-bold"><Phone />Телефон:</span>
                            <Link href={'tel:+79925107250'}>+7(992)-510-72-50</Link>
                        </div>
                        <div className="flex gap-2">
                            <span className="flex gap-2.5 font-bold"><Mail />Почта:</span>
                            <Link href={'tel:+79925107250'}>+7(992)-510-72-50</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}