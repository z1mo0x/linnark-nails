'use client'

import ReactLenis, { useLenis } from "lenis/react"
import { useEffect } from "react"

type Props = {
    children: React.ReactNode
}

export default function LenisProvider({ children }: Props) {

    const lenis = useLenis()


    useEffect(() => {
        if (lenis) {
            lenis.options.lerp = 0.2
            lenis.options.duration = 1.2
        }
    }, [])
    return (
        <>
            <ReactLenis root />
            {children}
        </>
    )
}