import React from "react";
import { createContext, useState } from "react";// import { items } from "../Pages/Proudect";
import {products}from"../API/index.js"
export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//   let cart = {};
//   for (let i = 1; i < products.length + 1; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };

export const ShopContextProvider = (props) => {
  const [newProduct, setNewProduct] = useState([]);

//   const updateCartItemCount = (newAmount, itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
//   };

const clearCart = () => {
  setNewProduct([]);
};
  const contextValue = {
    newProduct, setNewProduct,clearCart
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};