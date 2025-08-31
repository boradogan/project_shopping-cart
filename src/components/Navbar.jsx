import { Link } from "react-router"
export function Navbar(){

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
                        <Link to={'/'}>
                            <li>Home</li>
                        </Link>
                        <Link to={'/shop'}>
                            <li>Shop</li>
                        </Link>
                        <Link to={'/cart'}>
                        <li>Cart</li>
                        </Link>

                    </ul>
                </div>
            </div>
        </div>
        
        </>
    )
}