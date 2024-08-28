import { useContext } from "react";
import { CartCx } from "../context/CartCx";
import Swal from "sweetalert2";

export const Cart = () => {

  const { shoppingList, removeProduct, increment, decrement } = useContext(CartCx)

  const total = () => {
    return shoppingList.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)
  }

  const handleCheckout = () => {
    const productPurchased = shoppingList.map((product) => `${product.title} x ${product.quantity}`).join('\n')
    shoppingList.length > 0 ? 
    Swal.fire({
      icon: 'success',
      title: 'Success Purchase',
      html: `<p> You have bought: </p><pre>${productPurchased}</pre>`
      }
    )
    : ''
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>

          {shoppingList.map(product => (
            <tr key ={product.id}>
              <th scope="row">{product.title}</th>
              <td>${product.price}</td>
              <td>
                <button className="btn btn-outline-primary"
                onClick={() => decrement(product.id)}
                >-</button>
                <button className="btn btn-primary">{product.quantity}</button>
                <button className="btn btn-outline-primary"
                onClick={() => increment(product.id)}
                >+</button>
              </td>
              <td>
                <button className="btn btn-danger" onClick={()=> removeProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <th><b>Total: </b></th>
            <td><b>${total()}</b></td>
          </tr>
        </tbody>
      </table>

      <div className="d-grid gap-2">
        <button className="btn btn-primary" type="button" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </>
  );
};
