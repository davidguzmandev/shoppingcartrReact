import { ShoppingCart } from "@mui/icons-material"
import { Badge } from "@mui/material"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { CartCx } from "../context/CartCx"

export const NavBar = () => {

  const {shoppingList} = useContext(CartCx)

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Shopping Cart by React</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav">
                <NavLink to='/' className="nav-link" aria-current="page" href="/">Products</NavLink>
              </div>
            </div>
            <NavLink to='/cart'>
              <Badge badgeContent={shoppingList.length} color="primary">
                <ShoppingCart />
              </Badge>
            </NavLink>
        </div>
    </nav>
  )
}
