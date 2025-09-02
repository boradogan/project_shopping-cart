import { useEffect, useRef, useState } from "react"
export function ImageCaroussel(){

    const [currentIndex, setCurrentIndex] = useState(0)
    const goToNext = () => {
        setCurrentIndex(prevIndex => 
            prevIndex === 6 - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevious = () => {
        setCurrentIndex(prevIndex => 
            prevIndex === 0 ? 6 - 1 : prevIndex - 1
        );
    };
    const containerStyle = {
        transform: `translateX(-${currentIndex * 25}%)`
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

            </div>
            
        </div>
    )
}