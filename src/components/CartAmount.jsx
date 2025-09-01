export function CartAmount({amount, handleCartAmountHelper}){

    function handleDecrease(){
        if(amount >= 0) {
            handleCartAmountHelper(amount - 1);
        }
    }


    return (
        <div className="cart-amount">
            <div className="minus">
                <button onClick={handleDecrease}>Decrease</button>
            </div>
            <span>{amount}</span>
            <div className="plus">
                <button onClick={() => {handleCartAmountHelper(amount + 1)}}>Increase</button>

            </div>
        </div>
    )
}


