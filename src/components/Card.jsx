import { useContext, useEffect, useState } from "react"
import '../styles/Card.css'
import { CartCx } from "../context/CartCx"

export const Card = ({id, image, title, description, price, handleAdd, handleRemove}) => {

  const {shoppingList} = useContext(CartCx)
  const [added, setAdded] = useState(false)

  const addProduct = () => {
    handleAdd()
    setAdded(true)
  }

  const removeProduct = () => {
    handleRemove()
    setAdded(false)
  }

  const checkAdded = () => {
    const boolean = shoppingList.some(product => product.id == id)
    setAdded(boolean)
  }

  useEffect(() => {
    checkAdded()
  }, [])
  

  return (
    <div className="card">
        <img src={image} alt={title} className="card-image"/>
        <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <p className="card-price">{price}</p>

            {
                added ? 
                <button type="button" className="btn btn-danger" onClick={removeProduct}> Remove </button> :
                <button type="button" className="btn btn-success" onClick={addProduct}> Add </button>
            }

        </div>
    </div>
  )
}
