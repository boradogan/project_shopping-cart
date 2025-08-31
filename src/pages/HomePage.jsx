import { HeroSection } from "../components/HeroSection"
import { ImageCaroussel } from "../components/ImageCaroussel"
export function HomePage(){
    return (
        <div id="home-page">
            <section>
                <HeroSection></HeroSection>
            </section>
            <section>
                <ImageCaroussel></ImageCaroussel>
            </section>
        </div>
    )
}