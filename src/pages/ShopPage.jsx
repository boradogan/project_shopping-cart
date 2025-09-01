import { useState, useEffect } from "react"
import { ShoppingMain } from "../components/ShoppingMain"
import { ShoppingSidebar } from "../components/ShoppingSidebar"
export function ShopPage(){
    const [allProducts] = useProducts()
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    function toggleSidebar(){
        setSidebarOpen(!isSidebarOpen);
    }
    return (
        <div id="shop-page"className={isSidebarOpen?'sidebar-open':'sidebar-closed'}>
            <section>
                <ShoppingSidebar isOpen={isSidebarOpen} toggle={toggleSidebar}></ShoppingSidebar>            
            </section>
            <section>
                <ShoppingMain allProducts={allProducts}></ShoppingMain>
            </section>
        </div>
    )
}

function useProducts(){
    const [allProducts, setAllProducts] = useState([]);
    useEffect(()=>{
        if(allProducts.length > 0){
            return
        }
        fetch('https://fakestoreapi.com/products')
            .then(response => {
                console.log(response.status);
                return response.json();
            })
            .then(data => {
                setAllProducts(data);
                console.log(data);
            });
    }, []);
    return [allProducts]
    
}