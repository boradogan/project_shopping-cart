import { useState, useEffect, useMemo } from "react"
import { ShoppingMain } from "../components/ShoppingMain"
import { ShoppingSidebar } from "../components/ShoppingSidebar"
export function ShopPage(){
    const [allProducts] = useProducts()
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const allCategories = useMemo(() => {
        return categoryList(allProducts)
    }, [allProducts])

    const [categoryCheckboxes, setCategoryCheckboxes] = useState([]);

    function handleCategoryCheckbox(categoryName, newIsChecked){
        console.log(categoryName, newIsChecked);
        const newCategoryCheckboxes = categoryCheckboxes.map(category => (category.name != categoryName)?category: {...category, isChecked: newIsChecked});
        console.log('new Categories')
        console.log(newCategoryCheckboxes);
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
    
    function toggleSidebar(){
        setSidebarOpen(!isSidebarOpen);
    }

    return (
        <div id="shop-page"className={isSidebarOpen?'sidebar-open':'sidebar-closed'}>
            <section>
                <ShoppingSidebar isOpen={isSidebarOpen} toggle={toggleSidebar} categoriesCheckboxes={categoryCheckboxes} handleChange={handleCategoryCheckbox}></ShoppingSidebar>            
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


function categoryList(allProducts){
    //allProducts is a list of objects, all of which has the category property. 
    // returns a unique list of the categories
    const categories = [...new Set(allProducts.map(product => product.category))];
    return categories;
}