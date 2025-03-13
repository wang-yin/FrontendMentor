import { useState, useEffect } from "react";
import "../styles/Product.css";
import AddToCartButton from "./AddToCartButton";

function Product({ addToCart, cart }) {
  const [dessertsInfo, setDessertsInfo] = useState([]);
  const [addedItems, setAddedItems] = useState({});

  const fetchData = async () => {
    try {
      const result = await fetch("/data.json").then((response) =>
        response.json()
      );
      setDessertsInfo(result);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // 更新加入購物車的商品狀態
    const updatedItems = {};
    cart.forEach((item) => {
      updatedItems[item.name] = true;
    });
    setAddedItems(updatedItems);
  }, [cart]);

  return (
    <div className="product-item grid">
      {dessertsInfo.map((product) => (
        <div className="product-card" key={product.name}>
          <div className={`product-img ${addedItems[product.name] ? "added-to-cart-border" : ""}`}>
            <picture>
              <source
                srcSet={product.image?.desktop}
                media="(min-width: 1024px)"
              />
              <source
                srcSet={product.image?.tablet}
                media="(min-width: 768px)"
              />
              <source
                srcSet={product.image?.mobile}
                media="(max-width: 767px)"
              />
              <img src={product.image?.mobile} alt={product.name} />
            </picture>
            <AddToCartButton
              product={product}
              addToCart={addToCart}
              cart={cart}
            />
          </div>
          <div className="product-category">
            <p>{product.category}</p>
          </div>
          <div className="product-name">
            <p>{product.name}</p>
          </div>
          <div className="product-price">
            <p>${product.price ? product.price.toFixed(2) : "N/A"}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
