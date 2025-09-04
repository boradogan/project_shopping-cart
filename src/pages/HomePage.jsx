import { HeroSection } from "../components/HeroSection"
import { ImageCaroussel } from "../components/ImageCaroussel"
import { useOutletContext } from "react-router"
export function HomePage(){
    const {allProducts} = useOutletContext();
    const featuredProducts = allProducts.slice(0, 6);
    return (
        <div id="home-page">
            <section>
                <HeroSection></HeroSection>
            </section>
            <section>
                <ImageCaroussel featuredProducts={featuredProducts}></ImageCaroussel>
            </section>
        </div>
    )
}