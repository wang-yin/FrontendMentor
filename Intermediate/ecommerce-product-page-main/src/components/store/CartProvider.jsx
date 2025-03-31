import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItem = (amount) => {
    setCount((prevCount) => {
      const newCount = prevCount + amount;
      setTotalAmount(newCount * 125);
      return newCount;
    });
  };

  const removeItem = () => {
    setCount(0);
    setTotalAmount(0);
  }

  return (
    <CartContext.Provider value={{ count, totalAmount, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
