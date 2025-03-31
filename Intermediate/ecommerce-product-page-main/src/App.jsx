import "./App.css";
import Layout from "./components/Layout";
import CartProvider from "./components/store/CartProvider"

function App() {
  
  return (
    <CartProvider>
      <Layout />
    </CartProvider>
  );
}

export default App;
