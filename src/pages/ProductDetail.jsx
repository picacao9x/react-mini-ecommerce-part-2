import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/app.css";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/src/data/products.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(item => item.id === parseInt(id));
        setProduct(found);
      });
  }, [id]);

  if (!product) return <p style={{ padding: "1rem" }}>Loading...</p>;

  return (
    <div className="container">
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h2 style={{ marginTop: "1rem" }}>{product.name}</h2>
      <p>${product.price}</p>
      <button className="btn">Add to cart</button>

      {/* Nút quay lại trang chủ */}
      <div style={{ marginTop: "1.5rem" }}>
        <Link to="/" className="btn" style={{ background: "#555" }}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
