type Props = {
    title: string,
    description?: string
}

export default function Title({ title, description }: Props) {
    return (
        <div>
            <h2 className="title text-6xl">{title}</h2>
            {
                description
                &&
                <div className="text-silver mt-1.5">{description}</div>
            }
        </div>
    )
}