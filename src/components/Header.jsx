import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        background: "#f8f8f8",
        borderBottom: "1px solid #ddd",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/category/phone">Phone</Link>
        <Link to="/category/laptop">Laptop</Link>
      </div>
      <Link to="/cart">Cart</Link>
    </header>
  );
}
