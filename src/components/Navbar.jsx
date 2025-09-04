import { Link } from "react-router"
export function Navbar({cartList}){
    const totalItems = cartList.reduce((acc, cartItem) => acc + cartItem.amount, 0);
    console.log('Total number of items -> ', totalItems)

    return (
        <>
        <div className="navbar-container">
            <div className="navbar">
                <div className="logo-container">
                    <div className="logo-image">
                        <img src="https://placehold.co/60" alt="" />

                    </div>
                    <div className="logo">
                         LogoName 

                    </div>
                </div>

                <div className="nav-items">
                    <ul>
                        <li>

                        <Link to={'/'}>
                            Home
                        </Link>
                        </li>
                        <li>

                        <Link to={'/shop'}>
                            Shop
                        </Link>
                        </li>

                        <li>

                        <Link to={'/cart'}>
                            <div className="cart-link">
                                <span className="total-items">
                                    {totalItems>0?totalItems: null}
                                </span>
                                <span>
                                    Cart
                                </span> 

                            </div>
                        </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        
        </>
    )
}