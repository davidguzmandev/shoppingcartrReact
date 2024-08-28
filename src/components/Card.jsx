import { useState } from "react"
import '../styles/Card.css'

export const Card = ({image, title, description, price, handleAdd, handleRemove}) => {

    const [added, setAdded] = useState(false)

    const addProduct = () => {
      setAdded(true)
      handleAdd()
    }

    const removeProduct = () => {
      handleRemove()
      setAdded(false)
    }

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
