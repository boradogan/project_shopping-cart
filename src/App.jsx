import { Navbar } from './components/Navbar'
import { useState } from 'react';

import { Outlet } from 'react-router'
import './App.css'

function App() {
  const cartObject = useCart([]);
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet context={cartObject}></Outlet>
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