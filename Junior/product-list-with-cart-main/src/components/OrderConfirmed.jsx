import "../styles/OrderConfirmed.css";

function OrderConfirmed({ cart, totalPrice }) {
  return (
    <div className="order-confirmed-container">
      <div>
        <img
        src="/assets/images/icon-order-confirmed.svg"
        alt="order-confirmed"
      ></img>
      </div>
      <h1 className="order-confirmed-title">Order Confirmed</h1>
      <p className="order-confirmed-text">We hope you enjoy your food!</p>
      <div className="order-confirmed-info-container">
        {cart.map((item) => (
          <>
            <div key={item.name} className="order-confirmed-info">
              <div className="order-confirmed-product-img">
                <img src={item.image.thumbnail}></img>
              </div>
              <div className="order-confirmed-product-detail">
                <p className="order-confirmed-product-name">{item.name}</p>
                <p className="order-confirmed-product-quantity">
                  {item.quantity}x
                  <span className="order-confirmed-product-unitprice">
                    @ ${item.price.toFixed(2)}
                  </span>
                </p>
              </div>
              <div className="order-confirmed-product-totalprice">
                <p>${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
            <hr></hr>
          </>
        ))}
        <div className="order-confirmed-product-total-price">
          <p>Order Total</p>
          <h3>${totalPrice()}</h3>
        </div>
      </div>
      <button className="new-order-button">Start New Order</button>
    </div>
  );
}

export default OrderConfirmed;
