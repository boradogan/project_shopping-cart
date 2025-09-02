import priceConverter from "../utils/priceConverter"
export function CartItem({cartItem, handleCartAmountChange}){

    function handleDecreaseAmount(){
        handleCartAmountChange(cartItem.name, cartItem.amount - 1)

    }
    function handleIncreaseAmount(){
        handleCartAmountChange(cartItem.name, cartItem.amount + 1)

    }
    return (
        <li className="cart-item">
            <div className="cart-image">
                <img src={cartItem.url} alt="" />

            </div>
            <div className="cart-info">
                <div className="title">
                    <h4>
                        {cartItem.name}

                    </h4>
                </div>
                <div className="amount">
                    <span>
                        Amount: {cartItem.amount}

                    </span>
                    <button onClick={handleDecreaseAmount}>Minus</button>
                    <button onClick={handleIncreaseAmount}>Plus</button>
                </div>
                <div className="price-info">
                    <span>Price:</span> <span>{cartItem.amount} x {priceConverter(cartItem.price)} = </span> 
                    <span className="price">{priceConverter(cartItem.amount * cartItem.price)}</span>
                </div>

            </div>
        </li>
    )

}