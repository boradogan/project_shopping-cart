import { useEffect, useRef, useState } from "react"
export function ImageCaroussel(){

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);
    console.log('current index', currentIndex);
    console.log('isAnimating', isAnimating);
    console.log('isTransitioning', isTransitioning);
    console.log('render happening at', new Date().toISOString());

    useEffect(()=>{
        let timeoutId;

        if(currentIndex === 6){
            timeoutId = setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
                setTimeout(() => {
                    
                    setIsAnimating(false)
                    setIsTransitioning(true);
                }, 50);
                    
                
            }, 500);

        } else if (currentIndex > 0) {
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

        setCurrentIndex(currentIndex === 6? 0: currentIndex + 1);
    };

    const goToPrevious = () => {
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
            
            <div className="button-wrapper">
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

            </div>
            <div className="right direct">

            </div>
            <div className="left direct">

            </div>
            <div className="caroussel-image-container"  style={containerStyle}>
                <div className="caroussel-item-big">
                    <img src="https://placehold.co/100" alt="" />
                    
                </div>
                <div className="caroussel-item-big">
                    <img src="https://placehold.co/200" alt="" />
                </div>
                <div className="caroussel-item-big">
                    <img src="https://placehold.co/300" alt="" />
                </div>
                <div className="caroussel-item-big">
                    <img src="https://placehold.co/400" alt="" />
                </div>
                <div className="caroussel-item-big">
                    <img src="https://placehold.co/500" alt="" />
                </div>
                <div className="caroussel-item-big">
                    <img src="https://placehold.co/600" alt="" />
                </div>
                <div className="caroussel-item-big">
                    <img src="https://placehold.co/100" alt="" />
                    
                </div>
                <div className="caroussel-item-big">
                    <img src="https://placehold.co/200" alt="" />
                </div>
                <div className="caroussel-item-big">
                    <img src="https://placehold.co/300" alt="" />
                </div>
                <div className="caroussel-item-big">
                    <img src="https://placehold.co/400" alt="" />
                </div>

            </div>
            
        </div>
    )
}