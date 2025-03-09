import "./App.css";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <main>
        <h1 className="title">Desserts</h1>
        <div className="product-container">
          <Product />
        </div>
        <div className="cart-container">
          <Cart />
        </div>
      </main>
    </>
  );
}

export default App;
