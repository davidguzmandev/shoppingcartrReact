import { useContext } from "react";
import { CartCx } from "../context/CartCx";

export const Cart = () => {

  const { shoppingList, removeProduct, increment, decrement } = useContext(CartCx)
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
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <button className="btn btn-danger" onClick={()=> removeProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-grid gap-2">
        <button className="btn btn-primary" type="button">
          Checkout
        </button>
      </div>
    </>
  );
};
