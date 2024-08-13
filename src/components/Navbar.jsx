import { ShoppingCart } from "@mui/icons-material"
import { Badge } from "@mui/material"

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Cart</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="/">Products</a>
              </div>
            </div>
            <Badge badgeContent={4} color="primary">
              <ShoppingCart />
            </Badge>

        </div>
    </nav>
  )
}
