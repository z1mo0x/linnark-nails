import Title from "./title"

export default function Contacts() {
    return (
        <div className="py-15">
            <div className="container mx-auto">
                <Title title="Контактная информация" />
                <div className="grid grid-cols-2 gap-x-12.5">
                    <div className="">
                        <iframe className="w-full h-100" src="https://yandex.ru/map-widget/v1/?um=constructor%3A7c303afbbf32a93ee198d2cfac7fc073c420e3f46f8ec07fde199b4e4108c795&amp;source=constructor"></iframe>
                    </div>
                    <div className=""></div>
                </div>
            </div>
        </div>
    )
}