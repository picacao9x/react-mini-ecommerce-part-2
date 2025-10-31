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
    <div className="container">
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
      <div className="grid">
        {filtered.map((p) => (
          <Link
            key={p.id}
            to={`/product/${p.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="card">
              <div>
                <h3>{p.name}</h3>
                <p>{p.category}</p>
                <strong className="price">${p.price}</strong>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  alert(`Add ${p.name} to cart`);
                }}
                className="btn"
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
