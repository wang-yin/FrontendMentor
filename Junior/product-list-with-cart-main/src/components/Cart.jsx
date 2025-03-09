import "../styles/Cart.css"

function Cart() {
  return (
    <div className="cart">
      <h3 className="cart-title">Your Cart (0)</h3>
      <div className="empty-cart-img">
        <img src="/assets/images/illustration-empty-cart.svg" alt="empty-cart"></img>
      </div>
      <p>Your added items will appear here</p>
    </div>
  )
}

export default Cart