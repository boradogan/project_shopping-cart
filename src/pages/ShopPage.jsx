
import { useState, useEffect, useMemo } from "react"
import { ShoppingMain } from "../components/ShoppingMain"
import { ShoppingSidebar } from "../components/ShoppingSidebar"
import { useOutletContext } from "react-router"
export function ShopPage(){

    const [isSidebarOpen, toggleSidebar] = useSidebar(true);

    const {cartObject, allProducts, categoryCheckboxes, handleCategoryCheckbox} = useOutletContext();


    const filteredProducts = filterProducts(allProducts, categoryCheckboxes);
    
    return (
        <div id="shop-page"className={isSidebarOpen?'sidebar-open':'sidebar-closed'}>
            <section>
                <ShoppingSidebar isOpen={isSidebarOpen} toggle={toggleSidebar} categoriesCheckboxes={categoryCheckboxes} handleChange={handleCategoryCheckbox}></ShoppingSidebar>            
            </section>
            <section>
                <ShoppingMain allProducts={filteredProducts} cartObject={cartObject}></ShoppingMain>
            </section>
        </div>
    )
}

function useSidebar(initialValue){
    const [isSidebarOpen, setSidebarOpen] = useState(initialValue);
    function toggleSidebar(){
        setSidebarOpen(!isSidebarOpen);
    }
    return [isSidebarOpen, toggleSidebar]

}



function filterProducts(products, categoriesCheckbox) {
    return products.filter(product => (
        isChecked(product.category, categoriesCheckbox)
    ))

}
function isChecked(categoryName, categoriesCheckbox){
    const category = categoriesCheckbox.find(categoryCheckbox => categoryCheckbox.name === categoryName);
    if(category){
        return category.isChecked;
    }
    return
}




