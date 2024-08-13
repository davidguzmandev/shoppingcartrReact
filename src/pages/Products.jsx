import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import { Card } from "../components/Card"

export const Products = () => {

  const [products, setProducts] = useState([])

  const fetchProducts = async () => {

    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data)
    } catch (error){
      Swal.fire(
        {
          icon: 'error',
          title: "Failed to fetch",
          text: "Error getting products"
        }
      )
      console.log(error);
    }

  }

  useEffect(() => { 
    fetchProducts()
  },[])

  return (
    <>
      <h1>Products</h1>
      <hr />
      {products.map(product => (
      <Card
        key = {product.id}
        image = {product.image}
        title = {product.title}
        description = {product.description}
        price = {product.price}
      />
      ))}
    </>
  )
}
