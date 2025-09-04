import { useEffect, useRef, useState } from "react"
export function ImageCaroussel({featuredProducts}){
    const CAROUSSEL_SIZE = 4;
    
    const [currentIndex, setCurrentIndex] = useState(CAROUSSEL_SIZE)
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);
    console.log('current index', currentIndex);
    console.log('isAnimating', isAnimating);
    console.log('isTransitioning', isTransitioning);
    console.log('render happening at', new Date().toISOString());


    const extendedFeaturedProducts = [...featuredProducts.slice(-4), ...featuredProducts, ...featuredProducts.slice(0, CAROUSSEL_SIZE)];

    useEffect(()=>{
        let timeoutId;
        if(currentIndex === 0){
            timeoutId = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(featuredProducts.length);
                setTimeout(() => {
                    
                    setIsAnimating(false)
                    setIsTransitioning(true);
                }, 50);
                    
                
            }, 500);
        } else if(currentIndex === (featuredProducts.length + CAROUSSEL_SIZE)){
            timeoutId = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(CAROUSSEL_SIZE);
                setTimeout(() => {
                    
                    setIsAnimating(false)
                    setIsTransitioning(true);
                }, 50);
                    
                
            }, 500);

        } else {
            timeoutId = setTimeout(() => {
                setIsAnimating(false);
                
            }, 500);
        }
        return () => {
            clearTimeout(timeoutId)
        }

    } ,[currentIndex])

    
    const goToNext = () => {
        if(isAnimating){
            return
        }
        console.log('goToNext called at', new Date().toISOString());
        setIsAnimating(true);

        setCurrentIndex(currentIndex === featuredProducts.length + CAROUSSEL_SIZE? 0: currentIndex + 1);
    };

    const goToPrevious = () => {
        if(isAnimating){
            return
        }
        setIsAnimating(true);
        setCurrentIndex(prevIndex => 
            prevIndex === 0 ? 6 - 1 : prevIndex - 1
        );
    };
    const containerStyle = {
        transform: `translateX(-${currentIndex * 25}%)`,
        transition: isTransitioning? 'transform 0.5s ease-out ' : 'none'
    };
   
    return(
        <div className="image-caroussel">
            
            {/* <div className="button-wrapper">
                <ul>
                    <li>
                        <button onClick={goToPrevious}></button>
                    </li>
                    <li>
                        <button></button>
                    </li>
                    <li>
                        <button onClick={goToNext}></button>
                    </li>
                </ul>

            </div> */}
            <div className="right direct">
                <button onClick={goToNext}>{'>'}</button>
            </div>
            <div className="left direct">
                <button onClick={goToPrevious}>{'<'}</button>

            </div>
            <div className="caroussel-image-container"  style={containerStyle}>
                {extendedFeaturedProducts.map((item, index) => (
                    <div key={index} className="caroussel-item-big">
                        <img src={item.image} alt="" />
                    
                    </div>
                ))}


            </div>
            
        </div>
    )
}