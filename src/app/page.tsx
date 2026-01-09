import ColorPalette from "@/components/common/colors";
import Contacts from "@/components/common/contacts";
import Hero from "@/components/common/hero";
import Portfolio from "@/components/ux/portfolio/portfolio";
import Prices from "@/components/ux/price/price";

export default function Home() {
  return (
    <>
      {/* <ColorPalette /> */}
      <Hero />
      <Portfolio />
      <Prices />
      <Contacts />
    </>
  );
}
