import { useState } from "react"
import { ShoppingMain } from "../components/ShoppingMain"
import { ShoppingSidebar } from "../components/ShoppingSidebar"
export function ShopPage(){
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
                <ShoppingMain></ShoppingMain>
            </section>
        </div>
    )
}