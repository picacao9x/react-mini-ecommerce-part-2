import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products.json";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <div style={{ padding: "2rem" }}>
        <p>❌ Product not found.</p>
        <Link to="/products">← Back to products</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", maxWidth: 800, margin: "0 auto" }}>
      <Link to="/products">← Back to products</Link>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          marginTop: "1rem",
          flexWrap: "wrap",
        }}
      >
        {/* Ảnh sản phẩm */}
        <div
          style={{
            flex: "1 1 300px",
            border: "1px solid #ddd",
            borderRadius: 8,
            overflow: "hidden",
          }}
        >
          <img
            src={product.image || "https://via.placeholder.com/400x300"}
            alt={product.name}
            style={{ width: "100%", height: "auto" }}
          />
        </div>

        {/* Thông tin chi tiết */}
        <div style={{ flex: "1 1 300px" }}>
          <h2>{product.name}</h2>
          <p>Category: {product.category}</p>
          <h3 style={{ color: "#007bff" }}>${product.price}</h3>

          <p style={{ marginTop: "1rem", color: "#555" }}>
            {product.description ||
              "This is a detailed description of the product. You can add more info here such as specs, features, or warranty details."}
          </p>

          <button
            onClick={() => alert(`Add ${product.name} to cart`)}
            style={{
              marginTop: "1.5rem",
              background: "#28a745",
              color: "#fff",
              border: "none",
              padding: "0.7rem 1.5rem",
              borderRadius: 5,
              cursor: "pointer",
            }}
          >
          Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}