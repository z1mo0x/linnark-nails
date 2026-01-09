const colorStyle = 'h-20 w-full'

export default function ColorPalette() {
    return (
        <div className="grid grid-cols-12 fixed top-0 z-10 left-0 w-full">
            <div className={`${colorStyle} bg-bardo`}></div>
            <div className={`${colorStyle} bg-dark-bardo`}></div>
            <div className={`${colorStyle} bg-charcoal`}></div>
            <div className={`${colorStyle} bg-grey`}></div>
            <div className={`${colorStyle} bg-silver`}></div>
            <div className={`${colorStyle} bg-silver-2`}></div>
            <div className={`${colorStyle} bg-white-smoke`}></div>
            <div className={`${colorStyle} bg-shadow-grey`}></div>
            <div className={`${colorStyle} bg-slate-grey`}></div>
            <div className={`${colorStyle} bg-parchment`}></div>
            <div className={`${colorStyle} bg-bone`}></div>
            <div className={`${colorStyle} bg-khaki-beige`}></div>
        </div>
    )
}