import { useState } from "react"
import '../styles/Card.css'

export const Card = ({image, title, description, price}) => {

    const [added, setAdded] = useState(false)

  return (
    <div className="card">
        <img src={image} alt={title} className="card-image"/>
        <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <p className="card-price">{price}</p>

            {
                added ? 
                <button type="button" className="btn btn-danger"> Remove </button> :
                <button type="button" className="btn btn-success"> Add </button>
            }

        </div>
    </div>
  )
}
