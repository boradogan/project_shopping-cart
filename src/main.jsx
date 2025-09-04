import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { ShopPage } from './pages/ShopPage.jsx'
import { CartPage } from './pages/CartPage.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App></App>}>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route path='shop' element={<ShopPage></ShopPage>}></Route>
          <Route path='cart' element={<CartPage></CartPage>}></Route>
          <Route path='*' element={<HomePage></HomePage>}></Route>

        </Route>
      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
