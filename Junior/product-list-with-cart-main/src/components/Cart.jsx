import "../styles/Cart.css";

function Cart({ cart, totalPrice, removeFromCart, orderConfirmed }) {
  return (
    <div className="cart">
      <h3 className="cart-title">Your Cart ({cart.length})</h3>
      {cart.length === 0 ? (
        <div className="empty-cart-img">
          <img
            src="/assets/images/illustration-empty-cart.svg"
            alt="empty-cart"
          />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <>
              <div key={item.name} className="cart-product">
                <div className="cart-product-info">
                  <p className="cart-product-name">{item.name}</p>
                  <p className="cart-product-quantity">
                    {item.quantity}x
                    <span className="cart-product-unitprice">
                      {" "}
                      @ ${item.price.toFixed(2)}
                    </span>{" "}
                    <span className="cart-product-totalprice">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </p>
                </div>
                <div className="cart-product-remove" onClick={() => removeFromCart(item.name)}>
                  <div className="icon-remove">
                    <img
                      src="/assets/images/icon-remove-item.svg"
                      alt="remove"
                    ></img>
                  </div>
                </div>
              </div>
              <hr></hr>
            </>
          ))}
          <div className="order">
            <div className="order-total-container">
              <p className="order-total">Order Total</p>
              <h2 className="order-total-price">${totalPrice()}</h2>
            </div>
            <div className="carbon-neutral-info">
              <img
                className="carbon-neutral-icon"
                src="/assets/images/icon-carbon-neutral.svg"
              ></img>
              <p className="carbon-neutral-text">
                This is a <span className="highlight-text">carbon-neutral</span>{" "}
                delivery
              </p>
            </div>
            <button className="confirm-order-button" onClick={orderConfirmed}>Confirm Order</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
