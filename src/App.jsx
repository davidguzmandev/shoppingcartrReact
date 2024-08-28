import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Products } from "./pages/Products"
import { Cart } from "./pages/Cart"
import { ProductProvider } from "./context/ProductProvider"
import { CartProvider } from "./context/CartProvider"



export const App = () => {
  return (
    <ProductProvider>
      <CartProvider>
      <NavBar/>
      <div className="container">
        <Routes>
          <Route path="/" element={ <Products></Products> }></Route>
          <Route path="/cart" element={<Cart></Cart> }></Route>
          <Route path="/*" element={<Navigate to ='/' /> }></Route>
        </Routes>
      </div>
      </CartProvider>
    </ProductProvider>
  )
}
