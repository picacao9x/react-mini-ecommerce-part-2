import React, { useState, useMemo } from "react";
import products from "../data/products.json";

export default function ProductsCategory() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const filtered = useMemo(() => {
    let result = products;

    if (category !== "All") {
      result = result.filter((p) => p.category === category);
    }

    if (search.trim() !== "") {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sort === "price-asc") result = [...result].sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") result = [...result].sort((a, b) => b.price - a.price);

    return result;
  }, [search, category, sort]);

  const categories = ["All", "Phone", "Laptop", "Tablet", "Accessory"];

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Product by Category</h2>

      {/* Bộ lọc */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "1rem",
          alignItems: "center",
        }}
      >
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="default">Sort by</option>
          <option value="price-asc">Price ↑</option>
          <option value="price-desc">Price ↓</option>
        </select>

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1, padding: "0.3rem 0.5rem" }}
        />
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
          <div
            key={p.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: "1rem",
            }}
          >
            <h3>{p.name}</h3>
            <p>{p.category}</p>
            <strong>${p.price}</strong>
            <button
              style={{
                display: "block",
                marginTop: "0.5rem",
                width: "100%",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
        {filtered.length === 0 && <p>No products found.</p>}
      </div>
    </div>
  );
}