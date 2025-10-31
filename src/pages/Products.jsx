import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import products from "../data/products.json";

export default function Products() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  const filtered = useMemo(() => {
    let result = products;

    // Lọc theo từ khóa
    if (search.trim() !== "") {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sắp xếp theo giá
    if (sort === "price-asc") result = [...result].sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") result = [...result].sort((a, b) => b.price - a.price);

    return result;
  }, [search, sort]);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>All Products</h2>

      {/* Bộ lọc tìm kiếm & sắp xếp */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1, padding: "0.3rem 0.5rem" }}
        />
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="default">Sort by</option>
          <option value="price-asc">Price ↑</option>
          <option value="price-desc">Price ↓</option>
        </select>
      </div>

      {/* Danh sách sản phẩm */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "1rem",
        }}
      >
        {filtered.map((p) => (
          <Link
            key={p.id}
            to={`/product/${p.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                border: "1px solid #ddd",
                padding: "1rem",
                borderRadius: 8,
                background: "#fff",
                transition: "0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = "0 0 10px rgba(0,0,0,0.1)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <h3>{p.name}</h3>
              <p>{p.category}</p>
              <strong>${p.price}</strong>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  alert(`Add ${p.name} to cart`);
                }}
                style={{
                  display: "block",
                  marginTop: "0.5rem",
                  width: "100%",
                  background: "#007bff",
                  color: "#fff",
                  border: "none",
                  padding: "0.5rem",
                  borderRadius: 5,
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && <p>No products found.</p>}
    </div>
  );
}
