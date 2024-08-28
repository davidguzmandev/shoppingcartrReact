import { useReducer } from "react";
import { CartCx } from "./CartCx";

export const CartProvider = ({children}) => {

  const initialState = []

  const cartReducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case '[CART] Add Product':
        return [...state, action.payload]
      case '[CART] Remove Product':
        return state.filter(product => product.id !== action.payload)
      case '[CART] Increment':
        break;
      case '[CART] Decrement':
        break;
      default:
        return state
    }
  }

  const [shoppingList, dispatch] = useReducer(cartReducer, initialState)

  const addProduct = (product) => {
    product.quantity = 1;
    const action = {
      type: '[CART] Add Product',
      payload: product
    }
    dispatch(action)
  }
  const removeProduct = (id) => {
    const action = {
      type: '[CART] Remove Product',
      payload: id
    }
    dispatch(action)
  }
  const increment = (id) => {
    const action = {
      type: '[CART] Increment',
      payload: id
    }
    dispatch(action)
  }
  const decrement = (id) => {
    const action = {
      type: '[CART] Decrement',
      payload: id
    }
    dispatch(action)
  }


  return (
    <CartCx.Provider value={{ shoppingList, addProduct, removeProduct, increment, decrement }}>
      {children}
    </CartCx.Provider>
  )
}
