
import { useState, useEffect, useMemo } from "react"
import { ShoppingMain } from "../components/ShoppingMain"
import { ShoppingSidebar } from "../components/ShoppingSidebar"
export function ShopPage(){
    const [allProducts] = useProducts([])
    const [isSidebarOpen, toggleSidebar] = useSidebar(true);
    const cartObject = useCart([]);

    const [categoryCheckboxes, handleCategoryCheckbox] = useCategoryCheckBoxes(allProducts);

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

/**
 * Custom React hook to fetch products from the Fake Store API.
 * 
 * @param {Array} initialValue - Initial value for the products state.
 * @returns {[Array]} - Returns an array containing the list of all products.
 * 
 * @example
 * const [allProducts] = useProducts([]);
 */
function useProducts(initialValue){
    const [allProducts, setAllProducts] = useState(initialValue);
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

function useCategoryCheckBoxes(allProducts){
    const [categoryCheckboxes, setCategoryCheckboxes] = useState([]);
        
    const allCategories = useMemo(() => {
        return categoryList(allProducts)
    }, [allProducts]);

    function handleCategoryCheckbox(categoryName, newIsChecked){
        const newCategoryCheckboxes = categoryCheckboxes.map(category => (category.name != categoryName)?category: {...category, isChecked: newIsChecked});
        setCategoryCheckboxes(newCategoryCheckboxes)
    }

    useEffect(()=>{
        setCategoryCheckboxes(
            allCategories.map(categoryName => ({
                name: categoryName,
                isChecked:true
            })
        )
        )

    }, [allCategories])

    return [categoryCheckboxes, handleCategoryCheckbox]

}


function categoryList(allProducts){
    //allProducts is a list of objects, all of which has the category property. 
    // returns a unique list of the categories
    const categories = [...new Set(allProducts.map(product => product.category))];
    return categories;
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


function useCart(initialValue = []){
    const [cart, setCart] = useState(initialValue);
    const newCart = [...cart];
    function handleCartAmountChange(name, newAmount){
        for(const index in newCart){
            if(newCart[index].name === name){
                const newCartObject = Object.assign(new CartClass, newCart[index]);
                newCartObject.amount = newAmount;
                newCart[index] = newCartObject;
                setCart(newCart);
                return
            };
        }
        setCart([...newCart, new CartClass(name, newAmount)]);
        return
    }

    return {cart, handleCartAmountChange}

}

class CartClass{
    name
    amount
    constructor(name, amount){
        this.name = name;
        this.amount= amount;
    }


}