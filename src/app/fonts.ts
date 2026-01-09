import localFont from 'next/font/local';

export const anabelle = localFont({
    src: [
        {
            path: "../../public/fonts/Annabelle.ttf",
            weight: '400',
            style: 'normal'
        }
    ],
    variable: '--font-anabelle',
    display: 'swap'
})