import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export const CartProvider = (props) => {
  const [state, setState] = useState({
    setItem: function (item) {
      setState((old) => ({
        ...old,
        cartItems: [...old.cartItems, item],
      }));
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeItem: function (item) {
      const arr = state.cartItems.filter(
        (cartItem) => cartItem.name !== item.name
      );
      setState((old) => ({ ...old, cartItems: arr }));
    },
    cartItems: [],
  });

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");

    if (cartItems) {
      setState({
        ...state,
        cartItems: JSON.parse(cartItems),
      });
    }
  }, []);

  useEffect(() => {
    if (state.cartItems) {
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    }
  }, [state]);

  return (
    <CartContext.Provider value={state}>{props.children}</CartContext.Provider>
  );
};
