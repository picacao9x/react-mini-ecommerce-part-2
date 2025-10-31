import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import "../styles/app.css";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/src/data/products.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container">
      <h1 style={{ marginTop: "3rem" }}>Our Products</h1>
      <div className="grid">
        {products.map(elements => (
          <Link key={elements.id} to={`/product/${elements.id}`}>
            <ProductCard {...elements} />
          </Link>
        ))}
      </div>
    </div>
  );
}