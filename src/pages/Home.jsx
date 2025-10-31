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
    <>
    Đây là trang Home
    </>
  );
}