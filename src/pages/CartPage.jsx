import { useOutletContext } from "react-router";
export function CartPage(){
    const {cartObject, allProducts} = useOutletContext();
    const {cart} = cartObject;
    const cartInfoList = cart.map(cartItem => {
        const foundItem = allProducts.find(product => product.title === cartItem.name);
        if(!foundItem){
            return null
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
            {cart && cartInfoList.map((cartItem => (     
                <li key={cartItem.name}>
                    <div className="cart-image">
                        <img src={cartItem.url} alt="" />

                    </div>
                    {cartItem.name} {cartItem.amount}
                </li>
            )))}
        </div>
    )
}