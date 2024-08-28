import { useEffect, useState } from "react";
import { ProductCx } from "./ProductCx";
import Swal from "sweetalert2";

export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to fetch",
        text: "Error getting products",
      });
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductCx.Provider value={{ products }}>
        {children}
    </ProductCx.Provider>
  );
};
