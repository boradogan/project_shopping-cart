export function CartPage(cartObject){
    const {cart} = cartObject;
    return (
        <div id="cart-page">
            <h2>Cart</h2>
            {cart && cart.map((cartItem => (
                <li key={cartItem.name}>{cartItem.name}</li>
            )))}
        </div>
    )
}