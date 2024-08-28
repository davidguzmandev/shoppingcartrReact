import { useContext } from "react"
import { Card } from "../components/Card"
import { ProductCx } from "../context/ProductCx"
import { CartCx } from "../context/CartCx"

export const Products = () => {

  const {products} = useContext(ProductCx)
  const { addProduct, removeProduct} = useContext(CartCx)

  return (
    <>
      <h1>Products</h1>
      <hr />
      {products.map(product => (
      <Card
        key = {product.id}
        id = {product.id}
        image = {product.image}
        title = {product.title}
        description = {product.description}
        price = {product.price}
        handleAdd = {()=> addProduct(product)}
        handleRemove = {()=> removeProduct(product.id)}
      />
      ))}
    </>
  )
}
