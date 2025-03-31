import React from "react";

const CartContext = React.createContext({
  count: 0,
  totalAmount: 0,
})

export default CartContext