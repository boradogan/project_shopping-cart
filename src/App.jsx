import { Navbar } from './components/Navbar'
import { useState, useEffect, useMemo } from 'react';

import { Outlet } from 'react-router'
import './App.css'

function App() {
  const cartObject = useCart([]);
  const [allProducts] = useProducts([]);
  const [categoryCheckboxes, handleCategoryCheckbox] = useCategoryCheckBoxes(allProducts);
  const contextValue = {allProducts, cartObject, categoryCheckboxes, handleCategoryCheckbox}
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet context={contextValue}></Outlet>
      </main>
    
    </>
  )
}

export default App

function useCart(initialValue = []){
    const [cart, setCart] = useState(initialValue);
    const newCart = [...cart];
    function handleCartAmountChange(name, newAmount){
        for(const index in newCart){
            if(newCart[index].name === name){
              if(newAmount === 0){
                console.log('thte amount is 0')
                newCart.splice(index, 1);
                setCart(newCart);
                return

              }
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