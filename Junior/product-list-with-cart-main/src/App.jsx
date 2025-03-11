import "./App.css";
import Product from "./components/Product";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === product.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const totalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  
  const removeFromCart = (productName) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== productName));
  }
  console.log("cart", cart)


  return (
    <>
      <main>
        <h1 className="title">Desserts</h1>
        <div className="product-container">
          <Product addToCart={addToCart} cart={cart}/>
        </div>
        <div className="cart-container">
          <Cart cart={cart} totalPrice={totalPrice} removeFromCart={removeFromCart}/>
        </div>
      </main>
    </>
  );
}

export default App;
