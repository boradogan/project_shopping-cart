import { useOutletContext, Link } from "react-router";
import { useRef } from "react";
import { CartItem } from "../components/CartItem";
import VineSound from '../assets/vine_boom.mp3'
import priceConverter from "../utils/priceConverter";
// const audio = new Audio(VineSound);
// const handleCheckoutClick = () => {
//     // 3. Reset the audio's current time to 0.
//     //    This allows the sound to be re-played even if it's already playing.
//     audio.currentTime = 0.23;
    
//     // 4. Play the sound.
//     audio.play();
// };
export function CartPage(){
    const audioRef = useRef(new Audio(VineSound));

    const {cartObject, allProducts} = useOutletContext();
    const {cart, handleCartAmountChange} = cartObject;

    const handleCheckoutClick = () => {
    // 3. Reset the audio's current time to 0.
    //    This allows the sound to be re-played even if it's already playing.
    audioRef.current.currentTime = 0.23;
    
    // 4. Play the sound.
    audioRef.current.play();
};
    

    const cartInfoList = cart.map(cartItem => {
        const foundItem = allProducts.find(product => product.title === cartItem.name);
        if(!foundItem){
            throw new Error('there is an item in the cart that is not in the product list')
        }
        return {
            name: cartItem.name,
            amount: cartItem.amount,
            price: foundItem.price,
            url: foundItem.image
        }
    }
    )
    console.log(cartInfoList)
    return (
        <div id="cart-page">
            <h2>Cart</h2>
            {cartInfoList.length === 0 &&
                <div className="empty-cart">
                    <span>The cart is empty, <Link to={'/shop'}>Shop now</Link></span>
                </div>
            }
            {cartInfoList.length > 0 && cartInfoList.map((cartItem => (     
                <CartItem key={cartItem.name} cartItem={cartItem} handleCartAmountChange={handleCartAmountChange}></CartItem>
            )))}
            {
                (cartInfoList.length > 0 &&
                    <div className="cart-total">
                        <span style={{fontWeight:700}}>Total: </span> 
                        <span className="total-price">
                            {priceConverter( cartInfoList.reduce((acc, cartItem) => acc += (cartItem.amount * cartItem.price), 0) )}

                        </span>
                        <button onMouseDown={handleCheckoutClick}>Checkout</button>
                    </div>
                )
            }
            
        </div>
    )
}