import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Products } from "./pages/Products"
import { Cart } from "./pages/Cart"



export const App = () => {
  return (
    <>
      <NavBar/>
      <div className="container">
        <Routes>
          <Route path="/" element={ <Products></Products>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/*" element={<Navigate to ='/' />}></Route>
        </Routes>
      </div>
    </>
  )
}
