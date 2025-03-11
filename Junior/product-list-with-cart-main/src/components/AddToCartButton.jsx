import { useEffect, useState } from "react";
import "../styles/AddToCartButton.css";

function AddToCartButton({ product, addToCart, cart }) {
  const [isAdded, setIsAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    setIsAdded(true);
    addToCart(product, quantity);
  };

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
    addToCart(product, 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1); 
      addToCart(product, -1);
    }
  };

  console.log("cart", cart)

  useEffect(() => {
  if (!cart) return;

  // 檢查購物車內是否還有這個商品
  const itemInCart = cart.find(item => item.name === product.name);

  if (itemInCart) {
    setIsAdded(true);
    setQuantity(itemInCart.quantity);
  } else {
    setIsAdded(false);
    setQuantity(1);
  }
}, [cart, product.name]);

  return (
    <button
      className={`add-to-cart-button ${isAdded ? "added-to-cart" : ""}`}
      onClick={!isAdded ? handleAddToCart : undefined}
    >
      <div className="button-content">
        {!isAdded ? (
          <div className="add-to-cart-content">
            <div>
              <img
                src="./assets/images/icon-add-to-cart.svg"
                alt="add-to-cart"
              ></img>
            </div>
            <span className="add-to-cart-label">Add to Cart</span>
          </div>
        ) : (
          <div className="added-to-cart-container">
            <div onClick={handleDecrement}>
              <div className="icon-container">
                <img
                src="./assets/images/icon-decrement-quantity.svg"
                alt="decrement"
              />
              </div>
            </div>
            <span>{quantity}</span>
            <div onClick={handleIncrement}>
              <div className="icon-container">
                <img
                src="./assets/images/icon-increment-quantity.svg"
                alt="increment"
              />
              </div>
            </div>
          </div>
        )}
      </div>
    </button>
  );
}

export default AddToCartButton;
