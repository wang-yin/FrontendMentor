import { useState, useEffect } from "react";
import "../styles/Product.css";

function Product() {
  const [dessertsInfo, setDessertsInfo] = useState([]);
  console.log("dessertsInfo", dessertsInfo);

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

  return (
    <div className="product-item grid">
      {dessertsInfo.map((product, index) => (
        <div className="product-card" key={index}>
          <div className="product-img">
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
            <button className="add-to-cart-button">
              <div className="button-content">
                <div>
                  <img
                    src="./assets/images/icon-add-to-cart.svg"
                    alt="add-to-cart"
                  ></img>
                </div>
                <span>Add to Cart</span>
              </div>
            </button>
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
