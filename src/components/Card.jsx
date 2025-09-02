import { useState } from "react";
import { CartAmount } from "./CartAmount";
import { RatingComponent } from "./RatingComponent";
import priceConverter from "../utils/priceConverter";
export function Card({productInfo, cartObject}){
    const {cart, handleCartAmountChange} = cartObject;
    const matchedCartElement = cart.find(cartElement => cartElement.name === productInfo.title);
    const cartAmount = matchedCartElement? matchedCartElement.amount:0;

    function handleAddToCartButton(){
        handleCartAmountChange(productInfo.title, 1);
    }
    function handleCartAmountHelper(newAmount){
        handleCartAmountChange(productInfo.title, newAmount);
    }
    
    return (
        <div className="card">
            <div className="visual">
                <img src={productInfo.image} alt="" />

            </div>
            <div className="info-text">
                <div className="category">
                    {productInfo.category}
                </div>
                <div className="price">
                    {priceConverter(productInfo.price)}
                </div>
                <div className="name">
                    <h4>{productInfo.title}</h4>
                </div>
                
            </div>
            <div className="ratings">
                <RatingComponent rating={productInfo.rating.rate}></RatingComponent>
                {productInfo.rating.rate}
            </div>
            <div className="buy-area">
                {cartAmount === 0 ? <button onClick={handleAddToCartButton}>Add to Cart</button> : <CartAmount amount={cartAmount} handleCartAmountHelper={handleCartAmountHelper}></CartAmount>}
                
            </div>
        </div>
    )
}

