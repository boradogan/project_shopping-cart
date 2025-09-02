import { useOutletContext } from "react-router";
export function CartPage(){
    const {cartObject} = useOutletContext();
    const {cart} = cartObject;
    return (
        <div id="cart-page">
            <h2>Cart</h2>
            {cart && cart.map((cartItem => (
                <li key={cartItem.name}>{cartItem.name} {cartItem.amount}</li>
            )))}
        </div>
    )
}